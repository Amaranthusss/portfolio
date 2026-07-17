import { Layout } from '@/components/_layout/layout';

import { DocumentDatasetProvider } from '@/providers/DocumentDatasetProvider';
import { NextIntlClientProvider } from 'next-intl';

import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locale';

import localFont from 'next/font/local';

import type { Revalidate } from 'next/dist/server/lib/cache-control';
import type { NextFont } from 'next/dist/compiled/@next/font';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/locale';

import '../../globals.scss';

export const dynamic = 'force-dynamic';

export const magnat: NextFont = localFont({
  src: [
    {
      path: '../../../../public/fonts/magnat/Magnat-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-LightItalic.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-RegularItalic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-SemiBold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-ExtraBold.woff',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../../../public/fonts/magnat/Magnat-ExtraBoldItalic.woff',
      weight: '800',
      style: 'italic'
    }
  ],
  display: 'swap'
});

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
      <body className={magnat.className}>
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
