import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroBg from "@assets/umit-yildirim-Ass0DusYDk4-unsplash_1766692412225.jpg";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = heroBg;
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section className="relative min-h-[500px] overflow-hidden bg-slate-900 md:min-h-[600px]">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center px-4 py-20 md:min-h-[600px] md:px-6 md:py-28 lg:py-36">
        <div className="flex w-full flex-col items-center text-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              Zertifizierte Arbeitssicherheit
            </div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl" data-testid="text-hero-title">
              Arbeitssicherheit für Ihr Unternehmen
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl" data-testid="text-hero-subtitle">
              Wir bieten professionelle sicherheitstechnische Betreuung nach DGUV V2, 
              Betriebsmittelprüfungen, Schulungen und Brandschutz für kleine und 
              mittelständische Unternehmen.
            </p>
          </motion.div>
          <motion.div 
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/kontakt" data-testid="link-hero-cta">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-cta">
                Kostenlose Beratung anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/leistungen" data-testid="link-hero-services">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto" 
                data-testid="button-hero-services"
              >
                Unsere Leistungen
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
