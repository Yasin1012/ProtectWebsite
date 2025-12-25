import { useRef, useState, useEffect, type RefObject } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Wrench, GraduationCap, Flame, Zap } from "lucide-react";
import arbeitssicherheitImage from "@assets/image_1766689624846.png";
import arbeitsmittelImage from "@assets/image_1766689685291.png";
import fortbildungImage from "@assets/image_1766690223127.png";
import brandschutzImage from "@assets/pexels-pixabay-69934_1766690620946.jpg";
import elektroImage from "@assets/yuriy-vertikov-bFjTqonnpK4-unsplash_1766690841497.jpg";

const services = [
  {
    image: arbeitssicherheitImage,
    icon: ShieldCheck,
    title: "Arbeitssicherheit",
    description: "Gesetzeskonforme Betreuung nach DGUV Vorschrift 2. Wir unterstützen Sie bei allen Fragen der Arbeitssicherheit.",
    href: "/leistungen/dguv-v2",
    keywords: "DGUV V2, Fachkraft für Arbeitssicherheit",
  },
  {
    image: arbeitsmittelImage,
    icon: Wrench,
    title: "Arbeitsmittelprüfung",
    description: "Regelmäßige Prüfung Ihrer Arbeitsmittel und Betriebseinrichtungen nach BetrSichV und DGUV Vorschriften.",
    href: "/leistungen/betriebsmittelpruefung",
    keywords: "BetrSichV, TRBS 1201",
  },
  {
    image: fortbildungImage,
    icon: GraduationCap,
    title: "Aus- und Fortbildungen",
    description: "Praxisnahe Schulungen für Ihre Mitarbeiter. Von Ersthelfer-Kursen bis zur Sicherheitsbeauftragten-Ausbildung.",
    href: "/leistungen/fortbildung",
    keywords: "Schulungen, Unterweisung",
  },
  {
    image: brandschutzImage,
    icon: Flame,
    title: "Brandschutz",
    description: "Ganzheitliche Brandschutzkonzepte, Flucht- und Rettungspläne sowie regelmäßige Brandschutzunterweisungen.",
    href: "/leistungen/brandschutz",
    keywords: "Brandschutzbeauftragter, Feuerlöscher",
  },
  {
    image: elektroImage,
    icon: Zap,
    title: "Elektrische Geräteprüfung",
    description: "Prüfung ortsveränderlicher elektrischer Betriebsmittel nach DGUV V3 und VDE-Vorschriften.",
    href: "/leistungen/elektrische-pruefung",
    keywords: "DGUV V3, E-Check, VDE",
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

export function ServicesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(containerRef);

  return (
    <section className="bg-muted/30 py-12 md:py-16" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-services-title">
            Unsere Leistungen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Umfassende Lösungen für die Arbeitssicherheit und den Gesundheitsschutz in Ihrem Unternehmen.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="group flex h-full flex-col overflow-hidden transition-all hover-elevate"
                data-testid={`card-service-${index}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-service-${index}`}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.keywords}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4">
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <Link href={service.href} data-testid={`link-service-${index}`}>
                    <Button variant="ghost" className="w-full justify-between" data-testid={`button-service-${index}`}>
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/leistungen" data-testid="link-all-services">
            <Button size="lg" variant="outline" data-testid="button-all-services">
              Alle Leistungen ansehen
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
