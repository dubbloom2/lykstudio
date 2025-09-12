import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      
      {/* Fixed UI Elements */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default Index;