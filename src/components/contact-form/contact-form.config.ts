import type { ContactFormData } from './contact-form.interface';

import { ContactRequestType } from '@/constants/ContactRequestType';

export const MIN_TITLE_LENGTH = 3;
export const MAX_TITLE_LENGTH = 150;
export const MIN_MESSAGE_LENGTH = 10;
export const MAX_MESSAGE_LENGTH = 5000;
export const MAX_EMAIL_LENGTH = 254;
export const MAX_PHONE_LENGTH = 30;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const INITIAL_FORM: ContactFormData = {
  title: '',
  requestType: ContactRequestType.HireMe,
  message: '',
  email: '',
  phoneNbr: '',
  website: '',
};
