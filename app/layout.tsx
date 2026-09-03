import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Archivo, Public_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = "https://www.logoamerica.us";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Logo America | Professional Logo Design & Brand Identity Agency",
    template: "%s | Logo America",
  },
  description:
    "Logo America is a premium brand identity studio crafting distinctive logos, complete brand systems, and strategic rebrands for growing businesses nationwide. Custom logo design, brand identity, rebranding, naming & verbal identity, motion logos, and brand guidelines. Fixed-scope pricing, full IP ownership.",
  keywords: [
    "logo design agency",
    "branding agency",
    "brand identity design",
    "professional logo design",
    "company rebranding",
    "brand strategy",
    "visual identity design",
    "custom logo design",
    "logo design services",
    "brand design agency",
    "naming agency",
    "verbal identity",
    "motion logo design",
    "brand guidelines",
    "trademark logo design",
  ],
  authors: [{ name: "Logo America" }],
  creator: "Logo America",
  publisher: "Logo America",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Logo America",
    title: "Logo America | Professional Logo Design & Brand Identity Agency",
    description:
      "Premium logo design and brand identity for ambitious companies. Strategy, design, and delivery — nationwide.",
    images: [
      {
        url: "/og.jpeg",
        width: 1200,
        height: 630,
        alt: "Logo America — Brand Identity Studio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LogoAmerica",
    creator: "@LogoAmerica",
    title: "Logo America | Professional Logo Design & Brand Identity Agency",
    description:
      "Premium logo design and brand identity for ambitious companies. Fixed-scope pricing, full IP ownership.",
    images: ["/og.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${publicSans.variable} ${instrument.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="facebook-domain-verification" content="8l7d71lftshlkyjm38cq4stbai7jng" />
        <Script id="fb-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1053773370702642');fbq('track', 'PageView');`,
        }} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1053773370702642&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="grain">
        {children}
        <Script id="tawk-to" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a8daefe722f0e344fc317ff/1k0sn74td';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
      </body>
    </html>
  );
}