import ScrollProgress from "@/components/ScrollProgress";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import LogoVsBranding from "@/components/LogoVsBranding";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Quiz from "@/components/Quiz";
import ContactForm from "@/components/ContactForm";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <LogoVsBranding />
      {/* <Portfolio /> */}
      <Process />
      <WhyChooseUs />
      <CtaBanner />
      <Pricing />
      <Testimonials />
      <Quiz />
      <ContactForm />
      <FinalCta />
      <Footer />

      <a href="#contact" className="btn btn-primary sticky-cta">Get Your Logo</a>
    </>
  );
}
