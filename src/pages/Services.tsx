import Header from "@/components/layout/Header";
import ServicesSection from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
      
      {/* Fixed UI Elements */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default Services;