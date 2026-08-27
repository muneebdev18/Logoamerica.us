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

const siteUrl = "https://logoamerica.us";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Logo America — We Design the Marks America Runs On",
    template: "%s — Logo America",
  },
  description:
    "Logo America is a brand identity studio crafting distinctive logos, identity systems, and rebrands for companies that refuse to blend in. Strategy, design, and delivery — coast to coast.",
  keywords: [
    "logo design",
    "brand identity",
    "branding agency",
    "logo designer",
    "rebranding",
    "brand guidelines",
    "naming",
    "motion logo",
    "Logo America",
  ],
  authors: [{ name: "Logo America" }],
  creator: "Logo America",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Logo America",
    title: "Logo America — We Design the Marks America Runs On",
    description:
      "Brand identity studio crafting distinctive logos and identity systems. NYC → LA, and everywhere between.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo America — We Design the Marks America Runs On",
    description:
      "Brand identity studio crafting distinctive logos, identity systems, and rebrands.",
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
};

export const viewport: Viewport = {
  themeColor: "#0a1220",
  width: "device-width",
  initialScale: 1,
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
