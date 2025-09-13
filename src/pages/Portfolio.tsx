import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { X, ChevronLeft, ChevronRight, Camera, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import gallery images
import portraitWhite1 from "@/assets/gallery/portrait-white-1.jpg";
import artisticBlonde from "@/assets/gallery/artistic-blonde.jpg";
import portraitPink1 from "@/assets/gallery/portrait-pink-1.jpg";
import portraitBlackDress from "@/assets/gallery/portrait-black-dress.jpg";
import eventGroup from "@/assets/gallery/event-group.jpg";
import maternityRed from "@/assets/gallery/maternity-red.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: portraitWhite1,
      alt: "Portrait professionnel en blanc - LYK Studio",
      category: "Portrait Studio",
      description: "Élégance et raffinement dans un style classique"
    },
    {
      src: artisticBlonde,
      alt: "Portrait artistique avec éclairage dramatique - LYK Studio",
      category: "Portrait Artistique",
      description: "Jeu de lumières et créativité photographique"
    },
    {
      src: portraitPink1,
      alt: "Portrait moderne avec arrière-plan coloré - LYK Studio",
      category: "Portrait Studio",
      description: "Modernité et couleurs vibrantes"
    },
    {
      src: portraitBlackDress,
      alt: "Portrait glamour en robe noire - LYK Studio",
      category: "Portrait Glamour",
      description: "Sophistication et élégance intemporelle"
    },
    {
      src: eventGroup,
      alt: "Photographie d'événement groupe - LYK Studio",
      category: "Événementiel",
      description: "Moments précieux capturés avec authenticité"
    },
    {
      src: maternityRed,
      alt: "Photographie de maternité en rouge - LYK Studio",
      category: "Maternité",
      description: "Beauté de la maternité sublimée"
    }
  ];

  const categories = ["Tous", "Portrait Studio", "Portrait Artistique", "Portrait Glamour", "Événementiel", "Maternité"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredImages = selectedCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1);
    } else {
      setSelectedImage(currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-spotlight"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-8">
              <Camera className="h-5 w-5 text-gold" />
              <span className="text-gold font-semibold">Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Nos <span className="text-gold">Créations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre univers créatif à travers une sélection de nos plus belles réalisations, 
              où chaque image raconte une histoire unique.
            </p>

            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gold" />
                <span>50+ Projets</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-gold" />
                <span>Clients Satisfaits</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 transition-elegant ${
                    selectedCategory === category
                      ? "bg-gold hover:bg-gold-dark text-black shadow-gold"
                      : "border-gold/30 text-foreground hover:bg-gold-light/20 hover:text-gold"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/5] bg-muted rounded-2xl overflow-hidden cursor-pointer shadow-elegant hover:shadow-dramatic transition-dramatic"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-dramatic"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-elegant">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-1 text-xs font-semibold text-gold mb-3">
                        {image.category}
                      </div>
                      <p className="text-sm leading-relaxed">{image.description}</p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-fashion opacity-0 group-hover:opacity-100 transition-elegant"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à créer votre propre chef-d'œuvre ?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et donner vie à vos idées 
              avec la même passion et le même professionnalisme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black font-semibold shadow-gold px-8 py-4"
                asChild
              >
                <a href="/contact">Réserver une séance</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                asChild
              >
                <a href="tel:+2250789511404">Appeler maintenant</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-dramatic"
            />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="inline-block bg-gold/20 border border-gold/30 rounded-full px-3 py-1 text-xs font-semibold text-gold mb-2">
                {filteredImages[selectedImage].category}
              </div>
              <p className="text-sm">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      
      {/* Fixed UI Elements */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;