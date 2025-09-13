import { ArrowRight, Camera, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Studio de photographie professionnel LYK Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-gold" />
            <span className="text-gold font-semibold text-sm">Studio Professionnel</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nous immortalisons vos{" "}
            <span className="text-gold">plus beaux instants</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Avec créativité et professionnalisme, nous capturons l'essence de vos moments 
            les plus précieux en photographie studio et évènementielle.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-white/80">
              <Camera className="h-5 w-5 text-gold" />
              <span>Photographie Studio</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Star className="h-5 w-5 text-gold" />
              <span>Événements Premium</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Award className="h-5 w-5 text-gold" />
              <span>Qualité Professionnelle</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 text-lg shadow-gold hover:shadow-lifted transition-all duration-300 group"
              asChild
            >
              <a href="#contact" className="flex items-center space-x-2">
                <span>Réserver une séance</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 py-4 text-lg"
              asChild
            >
              <a href="#services">Découvrir nos services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;