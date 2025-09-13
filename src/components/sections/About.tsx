import { Target, Users, Award, Heart, ArrowRight, Camera, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Créativité",
      description: "Nous apportons une vision artistique unique à chaque projet, alliant technique et inspiration."
    },
    {
      icon: Award,
      title: "Fiabilité",
      description: "Respect des délais, qualité constante et engagement total dans chaque mission que nous réalisons."
    },
    {
      icon: Heart,
      title: "Professionnalisme",
      description: "Une approche méthodique et rigoureuse pour des résultats qui dépassent vos attentes."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients satisfaits" },
    { number: "50+", label: "Événements couverts" },
    { number: "3 ans", label: "D'expérience" },
    { number: "100%", label: "Satisfaction client" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-light/20 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <Users className="h-4 w-4 text-gold" />
            <span className="text-gold font-semibold text-sm">À Propos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            LYK Studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une structure de communication créative qui excelle en photographie studio et évènementielle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Notre Mission
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Nous sommes une structure de communication qui excelle en photographie studio et évènementielle. 
                Notre passion pour l'image et notre expertise technique nous permettent de créer des visuels 
                d'exception qui racontent votre histoire.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Basés à Cocody, Abidjan, nous accompagnons particuliers et entreprises dans leurs projets 
                visuels avec une approche personnalisée et des résultats qui marquent les esprits.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary mb-4">Nos Valeurs</h4>
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-smooth">
                  <div className="p-2 bg-gradient-gold rounded-lg shadow-gold flex-shrink-0">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">{value.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-gold hover:bg-gold-dark text-black font-semibold shadow-gold group"
              asChild
            >
              <a href="#contact" className="flex items-center space-x-2">
                <span>Travaillons ensemble</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-black rounded-2xl p-8 text-center shadow-elegant">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  L'art de capturer l'instant
                </h3>
                <p className="text-white/80">
                  Chaque photo raconte une histoire unique
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-white/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold/30 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Excellence Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="text-gold font-semibold">Excellence & Innovation</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Pourquoi choisir LYK Studio ?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant bg-background">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Équipement Professionnel</h4>
                <p className="text-sm text-muted-foreground">
                  Matériel haut de gamme et techniques de pointe pour des résultats exceptionnels
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant bg-background">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Approche Personnalisée</h4>
                <p className="text-sm text-muted-foreground">
                  Chaque projet est unique, nous adaptons notre approche à vos besoins spécifiques
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant bg-background">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Passion & Engagement</h4>
                <p className="text-sm text-muted-foreground">
                  Notre passion pour l'image guide chaque décision pour votre satisfaction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;