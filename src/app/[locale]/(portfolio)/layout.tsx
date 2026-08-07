import { Layout } from '@/components/_layout/layout';

import { DocumentDatasetProvider } from '@/providers/DocumentDatasetProvider';
import { NextIntlClientProvider } from 'next-intl';

import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locale';

import type { Revalidate } from 'next/dist/server/lib/cache-control';
import type { Metadata } from 'next';
import type { Viewport } from 'next';
import type { Locale } from '@/i18n/locale';

import { magnatFont } from '@/app/fonts';

import '@/app/globals.scss';

export const dynamic = 'force-dynamic';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true
};

export const metadata: Metadata = {
  title: 'Oskar Szkurłat Portfolio',
  description: 'Portfolio Web Application'
};

export const revalidate: Revalidate = false;

export default async function RootLayout({
  params,
  children
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>): Promise<React.ReactNode> {
  const { locale } = await params;

  const typedLocale: Locale = locale as Locale;

  if (!isLocale(typedLocale)) notFound();

  return (
    <html lang={typedLocale}>
      <body className={magnatFont.className}>
        <NextIntlClientProvider>
          <DocumentDatasetProvider>
            <Layout>
              <Layout.Header />
              <Layout.Content>{children}</Layout.Content>
              <Layout.Footer>
                Oskar Szkurłat ©{new Date().getFullYear()}
              </Layout.Footer>
            </Layout>
          </DocumentDatasetProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
