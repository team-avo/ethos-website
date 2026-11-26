import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { PhoneCtaBar } from '@/components/layout/PhoneCtaBar';
import { business } from '@/data/business';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  openGraph: {
    type: 'website',
    siteName: business.name,
    url: siteUrl,
    images: [business.heroImage.src],
  },
  twitter: {
    card: 'summary_large_image',
    images: [business.heroImage.src],
  },
  robots: {
    // Still a staging/preview environment until Khush signs off on the
    // rebuild. Flip to true once we're ready to compete with the live
    // WordPress site for the brand's search traffic.
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-page text-white">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <PhoneCtaBar />
        {/* CallRail phone-swap — loads async, no visual impact */}
        <Script
          src="https://cdn.callrail.com/companies/744125446/82cf8ae086c4fb91a656/12/swap.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
