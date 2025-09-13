import { Camera, MapPin, Phone, Mail, Clock, Facebook, Instagram, Play } from "lucide-react";
import { Link } from "react-router-dom";
import lykLogo from "@/assets/lyk-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Photographie Studio", href: "#services" },
    { name: "Photographie Événementielle", href: "#services" },
    { name: "Création Digitale", href: "#services" },
    { name: "Conception Visuelle", href: "#services" },
    { name: "Cours en Ligne", href: "#services" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/search/top?q=lyk%20studio", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Play, href: "https://www.tiktok.com/search?q=lyk%20studio&t=1757802691389", label: "TikTok" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-gold rounded-lg shadow-gold">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">LYK Studio</h3>
                <p className="text-white/70 text-sm">Photographie Professionnelle</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Structure de communication créative spécialisée en photographie studio et évènementielle. 
              Nous immortalisons vos plus beaux instants avec professionnalisme et créativité.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm">Cocody, Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="tel:+2250789511404" className="text-sm hover:text-gold transition-smooth">
                  0789511404
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <a href="mailto:yvesdonaldkonan@gmail.com" className="text-sm hover:text-gold transition-smooth">
                  yvesdonaldkonan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-sm">Toujours ouvert - 7j/7 sur demande</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-white/80 hover:text-gold transition-smooth text-sm block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-gold transition-smooth text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Price & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Suivez-nous</h4>
            
            {/* Price Range */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold mb-1">€€€</div>
                <p className="text-white/70 text-sm">Tarifs compétitifs</p>
                <p className="text-white/60 text-xs mt-1">Devis personnalisés</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-primary transition-smooth group"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block w-full text-center px-4 py-3 bg-gold hover:bg-gold-dark text-black font-semibold rounded-lg shadow-gold transition-smooth text-sm"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} LYK Studio. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold transition-smooth">
                Mentions légales
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-smooth">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-smooth">
                CGV
              </a>
            </div>

            <div className="text-white/40 text-xs">
              Made with ❤️ in Abidjan
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;