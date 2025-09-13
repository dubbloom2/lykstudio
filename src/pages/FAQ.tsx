import Header from "@/components/layout/Header";
import FAQSection from "@/components/sections/FAQ";
import TestimonialsSection from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
      
      {/* Fixed UI Elements */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;