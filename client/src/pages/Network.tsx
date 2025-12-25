import { useRef, useState, useEffect, type RefObject } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { Handshake, ExternalLink } from "lucide-react";
import smkLogo from "@assets/image_1766691647455.png";
import stiltzLogo from "@assets/image_1766691678628.png";
import arbeitsschutzUlmLogo from "@assets/image_1766691722179.png";
import simoneHoenleLogo from "@assets/image_1766691749659.png";

const partners = [
  {
    logo: smkLogo,
    name: "SmK - Sicherheit mit Konzept",
    description: "Die SmK ist eine Kooperation aus 4 selbstständigen Unternehmen (Labels)",
    link: "https://smk-online.eu",
  },
  {
    logo: stiltzLogo,
    name: "Benjamin Stiltz",
    description: "Meister im Elektrohandwerk, BDSH geprüfter Sachverständiger",
    link: "https://www.sv-benjamin-stiltz.de",
  },
  {
    logo: arbeitsschutzUlmLogo,
    name: "Florian Maier",
    description: "Fachkraft für Arbeitssicherheit, Sicherheits- und Gesundheitsschutz-Koordinator",
    link: "https://arbeitsschutz-ulm.de",
  },
  {
    logo: simoneHoenleLogo,
    name: "Simone Hönle",
    description: "Diplom Psychologin und Coach",
    link: null,
  },
];

function useIntersectionObserver(ref: RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

export default function Network() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(containerRef);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Handshake className="h-4 w-4" />
              Starke Partnerschaften
            </div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-network-title">
              Unser Netzwerk
            </h1>
            <p className="text-lg text-muted-foreground">
              Gemeinsam mit unseren Partnern bieten wir Ihnen ganzheitliche Lösungen 
              für Arbeitssicherheit und Gesundheitsschutz. Profitieren Sie von unserem 
              gewachsenen Expertennetzwerk.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12" ref={containerRef}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.h2 
            className="mb-8 text-center text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Unsere Partner
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover-elevate" data-testid={`card-partner-${index}`}>
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <div className="mb-6 flex h-24 w-full items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                        data-testid={`img-partner-${index}`}
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{partner.name}</h3>
                    <p className="mb-4 text-muted-foreground">{partner.description}</p>
                    {partner.link && (
                      <a 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-testid={`link-partner-${index}`}
                      >
                        <Button variant="outline" size="sm">
                          Website besuchen
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Gemeinsam für mehr Sicherheit"
        description="Kontaktieren Sie uns für eine umfassende Beratung durch unser Expertennetzwerk."
      />
    </Layout>
  );
}
