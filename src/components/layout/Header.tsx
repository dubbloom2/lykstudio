import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import lykLogo from "@/assets/lyk-logo-header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-105 transition-smooth">
              <img 
                src={lykLogo}
                alt="LYK Studio Logo"
                className="h-10 w-auto"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">LYK Studio</h1>
              <p className="text-xs text-muted-foreground">Photographie Professionnelle</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-gold transition-smooth font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+2250789511404" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Appeler</span>
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Réserver</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-border hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-gold transition-smooth font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+2250789511404" className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Appeler</span>
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/contact">Réserver une séance</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;