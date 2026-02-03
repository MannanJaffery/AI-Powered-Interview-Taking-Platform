import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import HowItWorks from "./components/landing/HowItWorks";
import CTA from "./components/landing/CTA";
import Faq from "./components/landing/faq";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Faq />
      {/* <Features />
      <HowItWorks />
      <CTA />
      <Footer /> */}
    </>
  );
}
