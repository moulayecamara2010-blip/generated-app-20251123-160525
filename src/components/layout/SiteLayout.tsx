import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';
type SiteLayoutProps = {
  children: React.ReactNode;
};
export function SiteLayout({ children }: SiteLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-soft-sand text-charcoal">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}