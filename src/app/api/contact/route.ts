import { isContactRequestType } from '@/utils/isContactRequestType';

import { Resend } from 'resend';

import type { ContactRequest } from '@/components/contact-form/contact-form.interface';

import { ContactRequestType } from '@/constants/ContactRequestType';

const resendApiKey: string | undefined = process.env.RESEND_API_KEY;
const targetEmail: string | undefined = process.env.RESEND_TARGET_EMAIL;

const resend: Resend | null =
  resendApiKey != null ? new Resend(resendApiKey) : null;

const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 150;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 30;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactRequestBody extends ContactRequest {
  website?: string;
}

const isContactRequestBody = (value: unknown): value is ContactRequestBody => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  if (!('title' in value) || typeof value.title !== 'string') {
    return false;
  }

  if (!('requestType' in value) || !isContactRequestType(value.requestType)) {
    return false;
  }

  if (!('message' in value) || typeof value.message !== 'string') {
    return false;
  }

  if (!('email' in value) || typeof value.email !== 'string') {
    return false;
  }

  if (
    'phoneNbr' in value &&
    value.phoneNbr !== undefined &&
    typeof value.phoneNbr !== 'string'
  ) {
    return false;
  }

  if (
    'website' in value &&
    value.website !== undefined &&
    typeof value.website !== 'string'
  ) {
    return false;
  }

  return true;
};

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const getRequestTypeLabel = (requestType: ContactRequestType): string => {
  switch (requestType) {
    case ContactRequestType.HireMe:
      return 'Hire me';

    case ContactRequestType.AskQuestion:
      return 'Ask a question';

    case ContactRequestType.CommissionProject:
      return 'Commission a project';

    case ContactRequestType.Other:
      return 'Other';

    default:
      return requestType;
  }
};

export async function POST(request: Request): Promise<Response> {
  if (resend == null || targetEmail == null) {
    console.error('Contact endpoint is not configured correctly.');

    return Response.json(
      {
        message:
          'Unable to send your message. Please try again later or contact me directly by email.',
      },
      { status: 500 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        message: 'Invalid request.',
      },
      { status: 400 }
    );
  }

  if (!isContactRequestBody(body)) {
    return Response.json({ message: 'Invalid request data.' }, { status: 400 });
  }

  // Honeypot - real users should never fill this field.
  if (body.website != null && body.website.trim().length > 0) {
    return Response.json(
      { message: 'Message sent successfully.' },
      { status: 200 }
    );
  }

  const title = body.title.trim();
  const message = body.message.trim();
  const email = body.email.trim();
  const phoneNbr = body.phoneNbr?.trim() ?? '';

  if (title.length < MIN_TITLE_LENGTH || title.length > MAX_TITLE_LENGTH) {
    return Response.json({ message: 'Invalid subject.' }, { status: 400 });
  }

  if (
    message.length < MIN_MESSAGE_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return Response.json({ message: 'Invalid message.' }, { status: 400 });
  }

  if (
    email.length === 0 ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email)
  ) {
    return Response.json(
      { message: 'Invalid email address.' },
      { status: 400 }
    );
  }

  if (phoneNbr.length > MAX_PHONE_LENGTH) {
    return Response.json({ message: 'Invalid phone number.' }, { status: 400 });
  }

  const requestType: string = getRequestTypeLabel(body.requestType);

  const safeTitle: string = escapeHtml(title);
  const safeMessage: string = escapeHtml(message);
  const safeEmail: string = escapeHtml(email);
  const safePhoneNbr: string = escapeHtml(phoneNbr);

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: targetEmail,
    replyTo: email,
    subject: `Portfolio - ${title}`,
    html: `
      <h2>New contact request</h2>

      <p>
        <strong>Request type:</strong>
        ${requestType}
      </p>

      <p>
        <strong>Subject:</strong>
        ${safeTitle}
      </p>

      <p>
        <strong>Email:</strong>
        ${safeEmail}
      </p>

      ${
        safePhoneNbr.length > 0
          ? `
            <p>
              <strong>Phone:</strong>
              ${safePhoneNbr}
            </p>
          `
          : ''
      }

      <h3>Message</h3>

      <p>
        ${safeMessage.replaceAll('\n', '<br />')}
      </p>
    `,
  });

  if (error != null) {
    console.error('Failed to send contact email:', error);

    return Response.json(
      {
        message:
          'Unable to send your message. Please try again later or contact me directly by email.',
      },
      { status: 500 }
    );
  }

  return Response.json(
    {
      message: 'Message sent successfully.',
      id: data?.id,
    },
    { status: 200 }
  );
}
