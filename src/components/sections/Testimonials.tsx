import { Star, Quote, Camera, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Kouadio",
      role: "Propriétaire d'entreprise",
      content: "Service impeccable, photos de qualité ! L'équipe LYK Studio a parfaitement capturé l'essence de notre événement corporate. Le professionnalisme et la créativité sont au rendez-vous.",
      rating: 5,
      service: "Photographie Événementielle"
    },
    {
      name: "Jean-Baptiste Assi",
      role: "Particulier",
      content: "Excellente expérience pour mes photos de famille ! Le studio est magnifique et l'équipe très à l'écoute. Les photos sont splendides, nous recommandons vivement LYK Studio.",
      rating: 5,
      service: "Photographie Studio"
    },
    {
      name: "Fatou Traoré",
      role: "Organisatrice d'événements",
      content: "Collaboration parfaite sur plusieurs mariages ! Ponctualité, discrétion et résultats exceptionnels. LYK Studio comprend parfaitement nos besoins et livre toujours à temps.",
      rating: 5,
      service: "Mariage & Événements"
    },
    {
      name: "David Kouassi",
      role: "Directeur Marketing",
      content: "Prestation irréprochable pour notre campagne visuelle ! L'équipe créative de LYK Studio a su traduire notre vision en images percutantes. Un partenaire de confiance.",
      rating: 5,
      service: "Création Digitale"
    },
    {
      name: "Aminata Cissé",
      role: "Influenceuse",
      content: "Photos portrait extraordinaires ! L'attention aux détails et la qualité des retouches sont remarquables. Je recommande LYK Studio à tous mes contacts professionnels.",
      rating: 5,
      service: "Portrait Professionnel"
    },
    {
      name: "Philippe Yapo",
      role: "Chef d'entreprise",
      content: "Formation en ligne très enrichissante ! Les cours sont bien structurés et pratiques. J'ai pu améliorer considérablement mes compétences en photographie grâce à LYK Studio.",
      rating: 5,
      service: "Cours en Ligne"
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Note moyenne", icon: Star },
    { number: "500+", label: "Clients satisfaits", icon: Heart },
    { number: "98%", label: "Recommandations", icon: Camera }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-light/20 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <Star className="h-4 w-4 text-gold" />
            <span className="text-gold font-semibold text-sm">Témoignages</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'expérience de nos clients et leur satisfaction à travers 
            leurs témoignages authentiques.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-elegant bg-background text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-gradient-gold rounded-lg shadow-gold">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-elegant bg-background hover:shadow-lifted transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-gold opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gold font-medium">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-elegant bg-gradient-black text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Rejoignez nos clients satisfaits
              </h3>
              <p className="text-white/80 mb-6">
                Découvrez pourquoi plus de 500 clients nous font confiance pour leurs projets visuels. 
                Votre satisfaction est notre priorité absolue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-black font-semibold rounded-lg shadow-gold transition-smooth"
                >
                  Démarrer votre projet
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-smooth"
                >
                  Voir nos services
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;