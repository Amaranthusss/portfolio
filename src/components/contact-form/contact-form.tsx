'use client';
import { Select } from '../select/select';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { isContactRequestType } from '@/utils/isContactRequestType';
import { validateForm } from './_utils/validateForm';

import type { ContactFormResponse } from './contact-form.interface';
import type { ContactFormErrors } from './contact-form.interface';
import type { ContactFormData } from './contact-form.interface';
import type { SelectOption } from '../select/select.interface';

import { ContactRequestType } from '@/constants/ContactRequestType';
import { MAX_MESSAGE_LENGTH } from './contract-form.config';
import { MAX_EMAIL_LENGTH } from './contract-form.config';
import { MAX_PHONE_LENGTH } from './contract-form.config';
import { MAX_TITLE_LENGTH } from './contract-form.config';
import { INITIAL_FORM } from './contract-form.config';

import styles from './contact-form.module.scss';

export const ContactForm = (): React.ReactNode => {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const t = useTranslations('common.contact-form');

  const requestTypeOptions: SelectOption<ContactRequestType>[] = [
    { label: t('hire-me'), value: ContactRequestType.HireMe },
    {
      label: t('commission-project'),
      value: ContactRequestType.CommissionProject,
    },
    { label: t('ask-question'), value: ContactRequestType.AskQuestion },
    { label: t('other'), value: ContactRequestType.Other },
  ];

  const updateField = <T extends keyof ContactFormData>(
    field: T,
    value: ContactFormData[T]
  ): void => {
    setForm((currentForm: ContactFormData): ContactFormData => ({
      ...currentForm,
      [field]: value,
    }));

    setErrors((currentErrors: ContactFormErrors): ContactFormErrors => ({
      ...currentErrors,
      [field]: undefined,
    }));

    setSubmitError(undefined);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setSubmitError(undefined);

    const validationErrors: ContactFormErrors = validateForm(form, t);

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response: Response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const responseData: ContactFormResponse = await response.json();

      if (!response.ok) {
        return setSubmitError(
          responseData.message ?? t('error.api-responsed-with-error')
        );
      }

      setForm(INITIAL_FORM);
      setIsSubmitted(true);
    } catch {
      setSubmitError(t('error.api-response-error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <Input
        required
        type={'text'}
        name={'title'}
        autoComplete={'off'}
        id={'contact-title'}
        maxLength={MAX_TITLE_LENGTH}
        value={form.title}
        error={errors.title}
        label={t('subject')}
        placeholder={t('subject-placeholder')}
        onChange={(event): void => updateField('title', event.target.value)}
      />

      <Select<ContactRequestType>
        required
        label={t('request-type')}
        options={requestTypeOptions}
        value={form.requestType}
        error={errors.requestType}
        onChange={(value: ContactRequestType): void => {
          if (isContactRequestType(value)) updateField('requestType', value);
        }}
      />

      <Input.TextArea
        required
        name={'message'}
        id={'contact-message'}
        value={form.message}
        error={errors.message}
        maxLength={MAX_MESSAGE_LENGTH}
        label={t('message')}
        placeholder={t('message-placeholder')}
        onChange={(event) => updateField('message', event.target.value)}
      />

      <Input
        required
        id={'contact-email'}
        name={'email'}
        type={'email'}
        autoComplete={'email'}
        value={form.email}
        error={errors.email}
        maxLength={MAX_EMAIL_LENGTH}
        label={t('email')}
        placeholder={t('email-placeholder')}
        onChange={(event) => updateField('email', event.target.value)}
      />

      <Input
        id={'contact-phone'}
        name={'phoneNbr'}
        type={'tel'}
        value={form.phoneNbr}
        error={errors.phoneNbr}
        maxLength={MAX_PHONE_LENGTH}
        autoComplete={'tel'}
        label={t('phone')}
        placeholder={t('phone-placeholder')}
        onChange={(event) => updateField('phoneNbr', event.target.value)}
      />

      <div className={styles.honeypot} aria-hidden={'true'}>
        <label htmlFor={'contact-website'}>Website</label>

        <input
          id={'contact-website'}
          name={'website'}
          type={'text'}
          tabIndex={-1}
          autoComplete={'off'}
          value={form.website}
          onChange={(event) => updateField('website', event.target.value)}
        />
      </div>

      {submitError != null && (
        <div className={styles.submit_error} role={'alert'}>
          <p>{submitError}</p>
          <p>{t('error.submit-error-affix')}</p>
        </div>
      )}

      {!isSubmitted && (
        <Button
          type={'submit'}
          mode={'primary'}
          disabled={isSubmitting}
          className={styles.submit}
        >
          {isSubmitting ? t('status.sending') : t('status.try-send')}
        </Button>
      )}

      {isSubmitted && (
        <div className={styles.success}>
          <h3 className={styles.success_title}>Message sent successfully</h3>

          <p className={styles.success_message}>
            Thank you for contacting me. I will get back to you as soon as
            possible.
          </p>

          <Button
            type={'button'}
            mode={'default'}
            className={styles.send_next}
            onClick={(): void => setIsSubmitted(false)}
          >
            Send another message
          </Button>
        </div>
      )}
    </form>
  );
};
