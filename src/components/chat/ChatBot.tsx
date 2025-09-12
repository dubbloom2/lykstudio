import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Phone, Calendar, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Knowledge base for LYK Studio
  const knowledgeBase = {
    services: {
      keywords: ["service", "photo", "studio", "événement", "création", "digitale", "cours", "formation"],
      response: "🎯 **Nos services chez LYK Studio :**\n\n📸 **Photographie Studio** (à partir de 50€)\n🎉 **Photographie Événementielle** (à partir de 200€)\n🎨 **Création Digitale** (à partir de 75€)\n💼 **Conception Visuelle** (à partir de 150€)\n📅 **Réservation en Ligne** (gratuit)\n📚 **Cours en Ligne** (à partir de 99€)",
      suggestions: ["Réserver une séance", "Voir les tarifs", "Contacter par WhatsApp"]
    },
    booking: {
      keywords: ["réserver", "réservation", "rendez-vous", "séance", "disponibilité"],
      response: "📅 **Pour réserver votre séance :**\n\n✅ Utilisez notre formulaire de contact\n📞 Appelez-nous au 0789511404\n💬 Contactez-nous par WhatsApp\n\nNous confirmons votre RDV sous 24h !",
      suggestions: ["Voir nos services", "Contacter par WhatsApp", "Nos coordonnées"]
    },
    pricing: {
      keywords: ["prix", "tarif", "coût", "combien", "€"],
      response: "💰 **Nos tarifs transparents :**\n\n📸 Studio : à partir de 50€\n🎉 Événements : à partir de 200€\n🎨 Création digitale : à partir de 75€\n💼 Conception visuelle : à partir de 150€\n📚 Cours en ligne : à partir de 99€\n\nDevis personnalisé gratuit !",
      suggestions: ["Demander un devis", "Réserver une séance", "Voir les services"]
    },
    contact: {
      keywords: ["contact", "téléphone", "email", "adresse", "où", "coordonnées"],
      response: "📍 **Nous contacter :**\n\n📍 Cocody, Abidjan, Côte d'Ivoire\n📞 0789511404\n📧 yvesdonaldkonan@gmail.com\n🕒 Toujours ouvert - 7j/7 sur demande",
      suggestions: ["Appeler maintenant", "Contacter par WhatsApp", "Réserver une séance"]
    },
    about: {
      keywords: ["qui", "équipe", "studio", "propos", "lyk", "à propos"],
      response: "🏢 **LYK Studio - Qui sommes-nous ?**\n\nStructure de communication créative spécialisée en photographie studio et événementielle. Nous excellons dans :\n\n✨ Créativité & innovation\n🎯 Fiabilité & ponctualité\n👔 Professionnalisme absolu\n\n500+ clients satisfaits !",
      suggestions: ["Voir nos services", "Nos témoignages", "Nous contacter"]
    },
    delivery: {
      keywords: ["délai", "livraison", "quand", "combien de temps", "rapidité"],
      response: "⚡ **Nos délais de livraison :**\n\n📸 Studio : 48-72h\n🎉 Événements : 5-7 jours\n🎨 Création digitale : 3-5 jours\n\nLivraison par lien sécurisé en HD !",
      suggestions: ["Réserver maintenant", "Voir les services", "Nous contacter"]
    }
  };

  const quickActions = [
    { 
      icon: Calendar, 
      text: "Réserver une séance",
      action: () => window.location.href = "#contact"
    },
    { 
      icon: Info, 
      text: "Voir nos services",
      action: () => window.location.href = "#services"
    },
    { 
      icon: Phone, 
      text: "Contacter par WhatsApp",
      action: () => window.open("https://wa.me/2250789511404?text=Bonjour%20LYK%20Studio%2C%20je%20viens%20du%20site%20web%20et%20j'aimerais%20avoir%20plus%20d'informations.", "_blank")
    }
  ];

  const welcomeMessage: Message = {
    id: "welcome",
    content: "👋 **Bienvenue chez LYK Studio !**\n\nVous avez une question sur nos services (photographie, événements, réservations) ? Je suis là pour vous aider ! 📸✨",
    isBot: true,
    timestamp: new Date(),
    suggestions: ["Nos services", "Réserver une séance", "Tarifs", "Contact"]
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findBestResponse = (input: string): { response: string; suggestions: string[] } => {
    const normalizedInput = input.toLowerCase();
    let bestMatch = { score: 0, response: "", suggestions: [] as string[] };

    Object.values(knowledgeBase).forEach(category => {
      const score = category.keywords.reduce((acc, keyword) => {
        return normalizedInput.includes(keyword) ? acc + 1 : acc;
      }, 0);

      if (score > bestMatch.score) {
        bestMatch = { score, response: category.response, suggestions: category.suggestions };
      }
    });

    if (bestMatch.score === 0) {
      return {
        response: "🤔 Je ne suis pas sûr de comprendre votre question.\n\n💡 **Je peux vous aider avec :**\n• Nos services de photographie\n• Les tarifs et réservations\n• Nos coordonnées\n• Les délais de livraison\n\nOu contactez-nous directement !",
        suggestions: ["Nos services", "Tarifs", "Contact", "Réserver"]
      };
    }

    return { response: bestMatch.response, suggestions: bestMatch.suggestions };
  };

  const handleSendMessage = (content?: string) => {
    const messageContent = content || inputValue.trim();
    if (!messageContent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageContent,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const { response, suggestions } = findBestResponse(messageContent);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isBot: true,
        timestamp: new Date(),
        suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gold hover:bg-gold-dark shadow-gold hover:shadow-lifted transition-all duration-300 group"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
      <Card className="border-0 shadow-lifted bg-background">
        <CardHeader className="bg-gradient-black text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Assistant LYK</CardTitle>
                <p className="text-xs text-white/80">En ligne maintenant</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot 
                    ? 'bg-muted text-foreground' 
                    : 'bg-gold text-primary'
                }`}>
                  <div className="flex items-start space-x-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot ? 'bg-gold' : 'bg-primary'
                    }`}>
                      {message.isBot ? (
                        <Bot className="h-3 w-3 text-primary" />
                      ) : (
                        <User className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm whitespace-pre-line">
                        {message.content}
                      </div>
                      {message.suggestions && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              onClick={() => handleSendMessage(suggestion)}
                              variant="outline"
                              size="sm"
                              className="text-xs h-6 px-2 border-gold/30 hover:bg-gold/10"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="border-t border-border p-3">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.action}
                  variant="ghost"
                  size="sm"
                  className="flex flex-col items-center space-y-1 h-auto py-2 hover:bg-gold/10 hover:text-gold"
                >
                  <action.icon className="h-4 w-4" />
                  <span className="text-xs text-center leading-tight">{action.text}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 border-border focus:border-gold focus:ring-gold"
              />
              <Button
                onClick={() => handleSendMessage()}
                className="bg-gold hover:bg-gold-dark text-primary shadow-gold"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatBot;