import { Layout } from '@/layout/layout';

import { NextIntlClientProvider } from 'next-intl';

import { useDocumentDataset } from '@/hooks/useDocumentDataset';
import { notFound } from 'next/navigation';

import localFont from 'next/font/local';

import type { NextFont } from 'next/dist/compiled/@next/font';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/locale';

import { defaultLocale, locales } from '@/i18n/locale';

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

export default async function RootLayout({
  params,
  children
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>): Promise<React.ReactNode> {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const { dataset } = await useDocumentDataset();

  return (
    <html lang={defaultLocale} {...dataset}>
      <body className={magnat.className}>
        <NextIntlClientProvider>
          <Layout>
            <Layout.Header />
            <Layout.Content>{children}</Layout.Content>
            <Layout.Footer>
              Oskar Szkurłat ©{new Date().getFullYear()}
            </Layout.Footer>
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
