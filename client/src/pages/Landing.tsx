import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";
import { 
  Shield, 
  CheckCircle2, 
  Phone, 
  Award, 
  Users, 
  FileCheck,
  Scale,
  Clock
} from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Gesetzliche Pflichten erfüllen",
    description: "Alle Leistungen entsprechen DGUV-Vorschriften und aktueller Gesetzgebung.",
  },
  {
    icon: FileCheck,
    title: "Rechtssichere Dokumentation",
    description: "Lückenlose Protokollierung aller Prüfungen und Beratungen.",
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description: "Kurzfristige Termine und schnelle Reaktionszeiten.",
  },
  {
    icon: Award,
    title: "Erfahrene Experten",
    description: "Qualifizierte Fachkräfte mit langjähriger Berufserfahrung.",
  },
];

const stats = [
  { value: "500+", label: "Betreute Unternehmen" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "100%", label: "Kundenzufriedenheit" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Protect</span>
          </div>
          <a href="tel:+4912345678900" className="flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+49 123 456 789 00</span>
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  Kostenlose Erstberatung
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl" data-testid="text-landing-title">
                  Professionelle Arbeitssicherheit für Ihr Unternehmen
                </h1>
                <p className="mb-8 text-lg text-muted-foreground">
                  Erfüllen Sie Ihre gesetzlichen Pflichten und schützen Sie Ihre 
                  Mitarbeiter. Wir bieten maßgeschneiderte Lösungen für 
                  Arbeitssicherheit und Gesundheitsschutz.
                </p>
                <div className="flex flex-wrap gap-8">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle>Jetzt Beratung anfragen</CardTitle>
                    <CardDescription>
                      Füllen Sie das Formular aus und erhalten Sie ein unverbindliches Angebot.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm compact />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold">Ihre Vorteile</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card key={index} data-testid={`card-landing-benefit-${index}`}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Starten Sie jetzt mit mehr Sicherheit
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
              Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir analysieren 
              Ihren Bedarf und erstellen ein individuelles Angebot.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:+4912345678900" data-testid="link-landing-call">
                <Button size="lg" variant="secondary" data-testid="button-landing-call">
                  <Phone className="mr-2 h-4 w-4" />
                  Jetzt anrufen
                </Button>
              </a>
              <Link href="/kontakt" data-testid="link-landing-more">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  data-testid="button-landing-more"
                >
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-card py-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">Protect Arbeitssicherheit & Gesundheitsschutz GmbH</span>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/impressum" className="hover:text-foreground" data-testid="link-landing-impressum">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-foreground" data-testid="link-landing-datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
