import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      
      {/* Fixed UI Elements */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;