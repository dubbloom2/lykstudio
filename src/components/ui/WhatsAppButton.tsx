import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/2250789511404?text=Bonjour%20LYK%20Studio%2C%20je%20viens%20du%20site%20web%20et%20j'aimerais%20avoir%20plus%20d'informations.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Contacter LYK Studio via WhatsApp"
    >
      <div className="flex items-center bg-[#25D366] hover:bg-[#20b558] text-white rounded-full shadow-elegant hover:shadow-lifted transition-all duration-300 group-hover:scale-105">
        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full">
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </div>
        
        {/* Text (hidden on mobile, shown on larger screens) */}
        <div className="hidden sm:block pr-4 pl-2">
          <div className="text-sm font-semibold">WhatsApp</div>
          <div className="text-xs opacity-90">Contactez-nous</div>
        </div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
    </a>
  );
};

export default WhatsAppButton;