import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: "Comment réserver une séance photo ?",
      answer: "Vous pouvez réserver directement via notre formulaire de contact, par téléphone au 0789511404 ou par WhatsApp. Nous confirmons votre rendez-vous sous 24h avec tous les détails pratiques."
    },
    {
      question: "Proposez-vous des cours en ligne ?",
      answer: "Oui ! Nous proposons des formations complètes en photographie pour tous niveaux. Nos cours couvrent les techniques d'éclairage, la composition, le post-traitement et bien plus encore."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon le type de prestation : à partir de 50€ pour une séance studio, 200€ pour un événement, 75€ pour la création digitale. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "Dans quels délais livrez-vous les photos ?",
      answer: "Pour les séances studio : 48-72h. Pour les événements : 5-7 jours ouvrés. Les photos retouchées sont livrées via un lien de téléchargement sécurisé en haute définition."
    },
    {
      question: "Couvrez-vous des événements en dehors d'Abidjan ?",
      answer: "Oui, nous nous déplaçons dans toute la Côte d'Ivoire pour vos événements. Des frais de déplacement peuvent s'appliquer selon la distance. Contactez-nous pour plus d'informations."
    },
    {
      question: "Quelle est votre politique d'annulation ?",
      answer: "Annulation gratuite jusqu'à 48h avant la séance. Entre 24h et 48h : 50% du montant. Moins de 24h : 100% facturé. En cas de force majeure, nous reportons sans frais."
    },
    {
      question: "Fournissez-vous le matériel et l'éclairage ?",
      answer: "Absolument ! Notre studio est entièrement équipé avec un matériel professionnel : éclairages, fonds, accessoires. Pour les événements, nous apportons tout le matériel nécessaire."
    },
    {
      question: "Puis-je avoir les photos non retouchées ?",
      answer: "Nos tarifs incluent la retouche de base. Les photos brutes peuvent être fournies sur demande moyennant un supplément. Nous privilégions toujours la qualité finale de nos créations."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-light/20 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="h-4 w-4 text-gold" />
            <span className="text-gold font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services, 
            tarifs et processus de travail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-elegant bg-background overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left hover:bg-muted/30 transition-smooth focus:outline-none focus:bg-muted/50"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-primary pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(index) ? (
                          <Minus className="h-5 w-5 text-gold" />
                        ) : (
                          <Plus className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-border pt-4">
                        <p className="text-foreground/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <Card className="border-0 shadow-elegant bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Vous ne trouvez pas votre réponse ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Notre équipe est là pour répondre à toutes vos questions spécifiques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-black font-semibold rounded-lg shadow-gold transition-smooth"
                  >
                    Nous contacter
                  </a>
                  <a
                    href="tel:+2250789511404"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border hover:bg-muted/50 text-foreground rounded-lg transition-smooth"
                  >
                    Appeler maintenant
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;