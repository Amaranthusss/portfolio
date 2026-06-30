import { Content } from './content/content';
import { Header } from './header/header';
import { Footer } from './footer/footer';

import type { PropsWithChildren } from 'react';

import './layout.module.scss';

export const Layout = ({ children }: PropsWithChildren): React.ReactNode =>
  children;

Layout.Content = Content;
Layout.Header = Header;
Layout.Footer = Footer;
