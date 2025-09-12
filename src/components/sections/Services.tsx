import { Camera, Users, Palette, Monitor, Calendar, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import studioImage from "@/assets/studio-portrait.jpg";
import eventImage from "@/assets/event-photography.jpg";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Photographie Studio",
      description: "Portraits professionnels, photos corporate et séances personnalisées dans notre studio équipé.",
      features: ["Éclairage professionnel", "Retouche incluse", "Multiple poses", "Livraison rapide"],
      image: studioImage,
      price: "À partir de 50€"
    },
    {
      icon: Users,
      title: "Photographie Évènementielle",
      description: "Immortalisation de vos événements : mariages, corporate, cérémonies et événements privés.",
      features: ["Couverture complète", "Photos haute résolution", "Livraison 48h", "Album personnalisé"],
      image: eventImage,
      price: "À partir de 200€"
    },
    {
      icon: Palette,
      title: "Création Digitale",
      description: "Conception graphique, retouche photo avancée et création de contenu visuel sur mesure.",
      features: ["Design personnalisé", "Formats multiples", "Révisions incluses", "Fichiers sources"],
      image: null,
      price: "À partir de 75€"
    },
    {
      icon: Monitor,
      title: "Conception Visuelle",
      description: "Identité visuelle, logos, supports marketing et communication digitale pour votre entreprise.",
      features: ["Charte graphique", "Logo & déclinaisons", "Supports print/web", "Accompagnement"],
      image: null,
      price: "À partir de 150€"
    },
    {
      icon: Calendar,
      title: "Réservation en Ligne",
      description: "Système de réservation simple et rapide pour planifier vos séances photos en quelques clics.",
      features: ["Planification facile", "Confirmation automatique", "Rappels SMS", "Flexibilité"],
      image: null,
      price: "Service gratuit"
    },
    {
      icon: BookOpen,
      title: "Cours en Ligne",
      description: "Formations en photographie, techniques d'éclairage et post-traitement pour tous niveaux.",
      features: ["Modules progressifs", "Exercices pratiques", "Support personnalisé", "Certificat"],
      image: null,
      price: "À partir de 99€"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-light/20 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <Camera className="h-4 w-4 text-gold" />
            <span className="text-gold font-semibold text-sm">Nos Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Excellence & Créativité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des services complets pour tous vos besoins en photographie et communication visuelle, 
            avec une approche professionnelle et créative.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lifted transition-all duration-300 border-0 bg-background">
              <CardHeader className="relative">
                {service.image && (
                  <div className="absolute -top-4 right-4 w-16 h-16 rounded-xl overflow-hidden shadow-elegant">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-gold rounded-lg shadow-gold">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary group-hover:text-gold transition-smooth">
                      {service.title}
                    </CardTitle>
                    <div className="text-gold font-semibold text-sm mt-1">
                      {service.price}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/80 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-gold-light/20 group-hover:text-gold transition-smooth"
                  asChild
                >
                  <a href="/contact" className="flex items-center justify-center space-x-2">
                    <span>Réserver maintenant</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-black rounded-2xl p-8 md:p-12 text-center shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé. 
              Notre équipe est là pour vous accompagner dans tous vos projets visuels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black font-semibold shadow-gold"
                asChild
              >
                <a href="/contact">Demander un devis</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+2250789511404">Appeler maintenant</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;