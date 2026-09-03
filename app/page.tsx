import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import RouteRail from "@/components/RouteRail";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
// import AnnouncementBar from "@/components/AnnouncementBar";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Logo America",
  alternateName: "Logo America LLC",
  url: "https://www.logoamerica.us",
  logo: "https://www.logoamerica.us/logo-hz.png",
  email: "contact@logoamerica.us",
  telephone: "+1-281-953-9004",
  description:
    "Premium brand identity studio crafting distinctive logos, complete brand systems, and strategic rebrands for growing businesses across the United States. Fixed-scope pricing, full IP ownership.",
  foundingDate: "2020",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  sameAs: [
    "https://www.trustpilot.com/review/logoamerica.agency",
    "https://clutch.co/profile/logo-america",
    "https://www.goodfirms.co/company/logo-america",
    "https://www.google.com/search?q=logo+america+agency+reviews",
  ],
  brand: {
    "@type": "Brand",
    name: "Logo America",
    logo: "https://www.logoamerica.us/logo-hz.png",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Logo America",
  url: "https://www.logoamerica.us",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.logoamerica.us/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Logo America",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Brand Identity Design",
  name: "Logo America Brand Identity Services",
  provider: {
    "@type": "Organization",
    name: "Logo America",
    url: "https://www.logoamerica.us",
  },
  areaServed: "US",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.logoamerica.us/#contact",
    servicePhone: "+1-281-953-9004",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Brand Identity Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Logo Design",
          description:
            "Distinctive wordmarks, symbols, and monograms crafted for visibility across every touchpoint — from app icons to building signage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity Systems",
          description:
            "Complete visual systems including color palettes, typography, iconography, and layout principles with practical guidelines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategic Rebranding",
          description:
            "Evolution without losing hard-earned recognition. Brand audits, rollout strategy, and legacy brand transitions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Naming & Verbal Identity",
          description:
            "Business names, taglines, and brand voice frameworks that clear trademark screening and sound authentically yours.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motion Logos & Digital Assets",
          description:
            "Animated logo systems, responsive app icons, favicon suites, and motion principles for brands living across screens.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Guidelines & Asset Libraries",
          description:
            "Practical brand books with organized file structures, usage rules, and downloadable asset libraries for real-world workflows.",
        },
      },
    ],
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "Organization",
    name: "Logo America",
  },
  ratingValue: "4.8",
  reviewCount: "120",
  bestRating: "5",
  worstRating: "1",
};

const jsonLd = [organizationSchema, websiteSchema, serviceSchema, aggregateRatingSchema];

export default function Home() {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <AnnouncementBar /> */}
      <Cursor />
      <Nav />
      <RouteRail />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Packages />
        <Testimonials />
        <Reviews />
        <Process />
        <Studio />
        <Contact />
      </main>
      <Footer />
      <LeadModal />
    </SmoothScroll>
  );
}
