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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Logo America",
  url: "https://logoamerica.us",
  email: "contact@logoamerica.us",
  description:
    "Brand identity studio crafting distinctive logos, identity systems, and rebrands. Strategy, design, and delivery — coast to coast.",
  areaServed: "United States",
  address: [
    { "@type": "PostalAddress", addressLocality: "Brooklyn", addressRegion: "NY", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
  ],
  sameAs: [],
  makesOffer: [
    "Logo Design",
    "Identity Systems",
    "Rebrands",
    "Naming & Verbal Identity",
    "Motion & Responsive Logos",
    "Brand Guidelines",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function Home() {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Cursor />
      <Nav />
      <RouteRail />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Testimonials />
        <Reviews />
        <Process />
        <Studio />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <LeadModal />
    </SmoothScroll>
  );
}
