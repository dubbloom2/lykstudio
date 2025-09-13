import { ArrowRight, Camera, Award, Star, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitWhite1 from "@/assets/gallery/portrait-white-1.jpg";
import artisticBlonde from "@/assets/gallery/artistic-blonde.jpg";
import lykLogo from "@/assets/lyk-logo-new.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {/* Main Hero Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={portraitWhite1} 
            alt="Portrait professionnel LYK Studio - Excellence en photographie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        

        {/* Cinematic Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-fashion"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-overlay"></div>
      </div>

      {/* Logo Central - Premium Positioning */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-black/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-6 shadow-dramatic">
          <img 
            src={lykLogo}
            alt="LYK Studio Logo - Photographie Professionnelle"
            className="w-40 h-auto filter brightness-0 invert"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl">
          {/* Luxury Badge */}
          <div className="inline-flex items-center space-x-3 bg-black/30 backdrop-blur-md border border-gold/40 rounded-full px-6 py-3 mb-8 shadow-glow">
            <Sparkles className="h-5 w-5 text-gold animate-pulse" />
            <span className="text-gold font-bold text-sm tracking-wider uppercase">Studio Luxe</span>
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading - Fashion Magazine Style */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
            <span className="block">Immortalisez</span>
            <span className="block text-gold italic">vos plus beaux</span>
            <span className="block">instants</span>
          </h1>

          {/* Subtitle - Editorial Style */}
          <div className="max-w-3xl mb-12">
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed font-light">
              Studio de photographie d'exception à Abidjan, nous capturons l'essence 
              de votre beauté avec une approche artistique et professionnelle.
            </p>
            
            <div className="h-px bg-gradient-to-r from-gold via-gold/50 to-transparent w-32 mb-6"></div>
            
            <p className="text-lg text-white/70 font-light italic">
              "Chaque image raconte une histoire unique, chaque portrait révèle une âme."
            </p>
          </div>

          {/* Fashion Features */}
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="flex items-center space-x-3 text-white/80">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <Camera className="h-4 w-4 text-black" />
              </div>
              <span className="font-medium">Studio Professionnel</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 text-black" />
              </div>
              <span className="font-medium">Événements Premium</span>
            </div>
            <div className="flex items-center space-x-3 text-white/80">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-black" />
              </div>
              <span className="font-medium">Excellence Artistique</span>
            </div>
          </div>

          {/* CTA Buttons - Luxury Style */}
          <div className="flex flex-col lg:flex-row gap-6">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-black font-bold px-10 py-6 text-lg shadow-dramatic hover:shadow-glow transition-dramatic group border-2 border-gold"
              asChild
            >
              <a href="/contact" className="flex items-center space-x-3">
                <span>Réserver une séance</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-dramatic" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-md px-10 py-6 text-lg transition-dramatic group"
              asChild
            >
              <a href="/portfolio" className="flex items-center space-x-3">
                <Play className="h-5 w-5 group-hover:scale-110 transition-dramatic" />
                <span>Découvrir le Portfolio</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fashion Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
          <div className="w-6 h-10 border-2 border-gold/60 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
            <div className="w-1 h-3 bg-gold/80 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-gold/60 text-xs uppercase tracking-wider font-medium">Découvrir</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-32 bg-gradient-to-b from-gold to-transparent opacity-60"></div>
      <div className="absolute bottom-1/4 right-8 w-1 h-32 bg-gradient-to-t from-gold to-transparent opacity-60"></div>
    </section>
  );
};

export default Hero;