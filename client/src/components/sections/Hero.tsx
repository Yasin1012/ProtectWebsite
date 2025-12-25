import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Shield, value: "15+", label: "Jahre Erfahrung" },
  { icon: Award, value: "500+", label: "Betreute Unternehmen" },
  { icon: Users, value: "10.000+", label: "Geschulte Mitarbeiter" },
  { icon: CheckCircle2, value: "100%", label: "Gesetzeskonform" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Zertifizierte Arbeitssicherheit
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl" data-testid="text-hero-title">
                Arbeitssicherheit für Ihr Unternehmen
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl" data-testid="text-hero-subtitle">
                Wir bieten professionelle sicherheitstechnische Betreuung nach DGUV V2, 
                Betriebsmittelprüfungen, Schulungen und Brandschutz für kleine und 
                mittelständische Unternehmen.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/kontakt" data-testid="link-hero-cta">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-cta">
                  Kostenlose Beratung anfragen
                </Button>
              </Link>
              <Link href="/leistungen" data-testid="link-hero-services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-hero-services">
                  Unsere Leistungen
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center rounded-lg border bg-card p-6 text-center transition-all hover-elevate"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <stat.icon className="mb-2 h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
