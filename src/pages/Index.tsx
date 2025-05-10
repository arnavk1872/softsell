
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
