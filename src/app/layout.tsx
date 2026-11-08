import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { AppNavigation } from '@/components/layout/AppNavigation';

import './globals.css';

export const metadata: Metadata = {
  title: 'Instagram',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <AppNavigation />

        <div className="md:pl-20">
          <main className="mx-auto max-w-220 px-4 py-8 md:px-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
