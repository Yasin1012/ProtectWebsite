import { useRef, useState, useEffect, type RefObject } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Scale, Clock, FileCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Scale,
    title: "Gesetzeskonform",
    description: "Alle Leistungen entsprechen den aktuellen gesetzlichen Anforderungen und DGUV-Vorschriften.",
  },
  {
    icon: FileCheck,
    title: "Lückenlose Dokumentation",
    description: "Rechtssichere Dokumentation aller Prüfungen, Begehungen und Unterweisungen.",
  },
  {
    icon: Clock,
    title: "Zuverlässig & Termingerecht",
    description: "Pünktliche Durchführung aller vereinbarten Termine und schnelle Reaktionszeiten.",
  },
  {
    icon: CheckCircle2,
    title: "Qualifizierte Experten",
    description: "Unser Team besteht aus zertifizierten Fachkräften mit langjähriger Berufserfahrung.",
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

export function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(containerRef);

  return (
    <section className="py-12 md:py-16" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-trust-title">
            Warum Protect Arbeitssicherheit & Gesundheitsschutz?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Vertrauen Sie auf unsere Erfahrung und Kompetenz in der Arbeitssicherheit.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card data-testid={`card-trust-${index}`}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
