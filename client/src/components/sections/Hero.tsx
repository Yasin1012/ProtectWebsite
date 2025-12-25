import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Zertifizierte Arbeitssicherheit
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl" data-testid="text-hero-title">
              Arbeitssicherheit für Ihr Unternehmen
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl" data-testid="text-hero-subtitle">
              Wir bieten professionelle sicherheitstechnische Betreuung nach DGUV V2, 
              Betriebsmittelprüfungen, Schulungen und Brandschutz für kleine und 
              mittelständische Unternehmen.
            </p>
          </motion.div>
          <motion.div 
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/kontakt" data-testid="link-hero-cta">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-cta">
                Kostenlose Beratung anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/leistungen" data-testid="link-hero-services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-hero-services">
                Unsere Leistungen
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
