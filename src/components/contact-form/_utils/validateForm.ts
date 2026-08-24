import { isContactRequestType } from '@/utils/isContactRequestType';

import type { ContactFormErrors } from '../contact-form.interface';
import type { ContactFormData } from '../contact-form.interface';
import type { _Translator } from 'next-intl';
import type { Messages } from '../../../../i18n';

import { MIN_MESSAGE_LENGTH } from '../contract-form.config';
import { MAX_MESSAGE_LENGTH } from '../contract-form.config';
import { MAX_EMAIL_LENGTH } from '../contract-form.config';
import { MAX_PHONE_LENGTH } from '../contract-form.config';
import { MAX_TITLE_LENGTH } from '../contract-form.config';
import { MIN_TITLE_LENGTH } from '../contract-form.config';
import { EMAIL_PATTERN } from '../contract-form.config';

export function validateForm(
  form: ContactFormData,
  t: _Translator<Messages, 'common.contact-form'>
): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const title: string = form.title.trim();
  const message: string = form.message.trim();
  const email: string = form.email.trim();
  const phoneNbr: string | undefined = form.phoneNbr?.trim();

  if (title.length < MIN_TITLE_LENGTH) {
    errors.title = t('validation.title-min-length', {
      min: MIN_TITLE_LENGTH,
    });
  } else if (title.length > MAX_TITLE_LENGTH) {
    errors.title = t('validation.title-max-length', {
      max: MAX_TITLE_LENGTH,
    });
  }

  if (!isContactRequestType(form.requestType)) {
    errors.requestType = t('validation.request-type-invalid');
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    errors.message = t('validation.message-min-length', {
      min: MIN_MESSAGE_LENGTH,
    });
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = t('validation.message-max-length', {
      max: MAX_MESSAGE_LENGTH,
    });
  }

  if (email.length === 0) {
    errors.email = t('validation.email-required');
  } else if (email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    errors.email = t('validation.email-invalid');
  }

  if (phoneNbr != null && phoneNbr.length > MAX_PHONE_LENGTH) {
    errors.phoneNbr = t('validation.phone-max-length', {
      max: MAX_PHONE_LENGTH,
    });
  }

  return errors;
}
