import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/landing/Hero";
import WhyUseInterviewAI from "./components/landing/whyuse";
import FeaturesSection from "./components/landing/FeaturesSection";
import Testimonials from "./components/landing/testimonials";

import Faq from "./components/landing/faq";
import Pricing from "./components/landing/pricing";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

    <FeaturesSection />
      <WhyUseInterviewAI />
      
      
      <Testimonials />
      <Faq />
      <Pricing />
      <Footer />
    </>
  );
}
