import type { ContactRequestType } from '@/constants/ContactRequestType';

export interface ContactRequest {
  title: string;
  requestType: ContactRequestType;
  message: string;
  email: string;
  phoneNbr?: string;
}

export interface ContactFormData extends ContactRequest {
  website: string;
}

export interface ContactFormErrors {
  title?: string;
  requestType?: string;
  message?: string;
  email?: string;
  phoneNbr?: string;
}

export interface ContactFormResponse {
  message?: string;
}
