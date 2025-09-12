import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      info: "Cocody, Abidjan",
      detail: "Côte d'Ivoire"
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "0789511404",
      detail: "Appel & WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      info: "yvesdonaldkonan@gmail.com",
      detail: "Réponse sous 24h"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      info: "Toujours ouvert",
      detail: "7j/7 sur demande"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-light/20 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <Mail className="h-4 w-4 text-gold" />
            <span className="text-gold font-semibold text-sm">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à donner vie à vos idées ? Contactez-nous pour un devis personnalisé 
            et découvrir comment nous pouvons vous aider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Informations de contact
            </h3>
            
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 shadow-elegant bg-background hover:shadow-lifted transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-gold rounded-lg shadow-gold flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-foreground font-medium">{item.info}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Price Range */}
            <Card className="border-0 shadow-elegant bg-gradient-black text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">Fourchette de prix</h4>
                <div className="text-2xl font-bold text-gold mb-2">€€€</div>
                <p className="text-white/80 text-sm">
                  Tarifs compétitifs et transparents
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-elegant bg-background">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 border-border focus:border-gold focus:ring-gold"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 border-border focus:border-gold focus:ring-gold"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px] border-border focus:border-gold focus:ring-gold"
                      placeholder="Décrivez votre projet, vos besoins et toute information utile..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold hover:bg-gold-dark text-black font-semibold shadow-gold flex-1 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href="tel:+2250789511404"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Appeler directement</span>
                      </a>
                    </Button>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground mb-1">Engagement qualité</p>
                        <p>
                          Nous nous engageons à vous répondre sous 24h et à vous fournir 
                          un devis détaillé adapté à vos besoins et votre budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;