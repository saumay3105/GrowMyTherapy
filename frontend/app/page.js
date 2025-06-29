import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/ServiceSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import QuoteSection from "@/components/QuoteSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <QuoteSection/>
      <ContactForm />
    </main>
  );
}
