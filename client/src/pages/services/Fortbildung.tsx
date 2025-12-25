import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  GraduationCap, 
  CheckCircle2, 
  Users,
  Clock,
  Award,
  ArrowRight,
  BookOpen,
  MapPin,
  FileCheck,
  Shield,
  RefreshCw,
  Calendar
} from "lucide-react";
import fortbildungImage from "@assets/image_1766690223127.png";

const vorteile = [
  "Individuelle Inhalte, abgestimmt auf Ihre Arbeitsbereiche",
  "Erfahrene Referenten mit Fach- und Praxiserfahrung",
  "Teilnahmezertifikate für Ihre Dokumentation",
  "Flexibilität bei Ort, Zeit und Durchführung",
  "Rechtssicherheit durch aktuelle und normgerechte Schulungen",
];

const leistungsportfolio = [
  "Flurförderzeuge (Theorie & Praxis mit Abschlussprüfung)",
  "Kranbediener: flurbediente Krane, LKW-Ladekrane",
  "Hubarbeitsbühnen: mobile Arbeitsbühnen nach DGUV Grundsatz 308-008",
  "Helfer und Anschläger: Lastaufnahmemittel sicher anschlagen und transportieren",
  "Elektrotechnisch unterwiesene Person (EuP): für nicht elektrotechnisches Personal",
  "Sicherheitsbeauftragte: Schulung gemäß DGUV Vorschrift 1",
  "Regalprüfer: Ausbildung nach DIN EN 15635 zur befähigten Person",
  "Leitern & Tritte: Ausbildung zur befähigten Person für Prüfungen gemäß BetrSichV",
];

const wiederholungskurse = [
  "Jährliche Sicherheitsunterweisungen: aufgaben- und arbeitsplatzbezogen",
  "Ladungssicherung: für Fahr- und Ladepersonal",
  "Brandschutzhelfer: Auffrischung gemäß ASR A2.2",
  "Flurförderzeuge, Krane, Hubarbeitsbühnen: praxisnahe Wiederholung mit Fokus auf aktuelle Unfälle und Gefahren",
];

const aktionstage = [
  "Gesundheitstage: Ergonomie, Stressbewältigung, Bewegung am Arbeitsplatz",
  "Fachtag für Sicherheitsbeauftragte: aktuelle Entwicklungen, Erfahrungsaustausch, Aufbau von Kontakten und Netzwerken",
  "Individuelle Schulungskonzepte: speziell für Ihre Branche oder betriebliche Gefährdungssituation",
];

const benefits = [
  {
    icon: BookOpen,
    title: "Praxisorientiert",
    description: "Unsere Schulungen verbinden Theorie mit praktischen Übungen für maximalen Lernerfolg.",
  },
  {
    icon: Users,
    title: "Vor Ort oder Online",
    description: "Schulungen in Ihrem Betrieb oder als Online-Veranstaltung – ganz nach Ihrem Bedarf.",
  },
  {
    icon: Award,
    title: "Zertifizierte Trainer",
    description: "Erfahrene Referenten mit entsprechender Qualifikation und Praxiserfahrung.",
  },
  {
    icon: Clock,
    title: "Flexible Termine",
    description: "Schulungstermine, die sich an Ihrem Betriebsablauf orientieren.",
  },
];

export default function Fortbildung() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <GraduationCap className="h-4 w-4" />
                Schulungen & Training
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-fortbildung-title">
                Schulungskonzept
              </h1>
              <p className="mb-4 text-xl font-medium text-foreground">
                Praxisnah, rechtssicher und auf Ihr Unternehmen zugeschnitten.
              </p>
              <p className="mb-6 text-muted-foreground">
                Unsere Aus- und Weiterbildungen basieren auf den aktuellen gesetzlichen 
                Anforderungen und Regelwerken (z. B. DGUV Vorschriften, ArbSchG, BetrSichV) 
                und werden individuell auf die Bedürfnisse und Risiken Ihres Unternehmens 
                abgestimmt. So stellen wir sicher, dass Ihre Mitarbeitenden nicht nur 
                gesetzeskonform, sondern auch praxisnah und zielgerichtet geschult werden.
              </p>
              <Link href="/kontakt" data-testid="link-fortbildung-cta">
                <Button size="lg" data-testid="button-fortbildung-cta">
                  Schulung anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={fortbildungImage} 
                  alt="Schulung und Fortbildung" 
                  className="h-auto w-full object-cover"
                  data-testid="img-fortbildung-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Ihre Vorteile</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {vorteile.map((vorteil, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`item-vorteil-${index}`}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{vorteil}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Unser Leistungsportfolio</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {leistungsportfolio.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg border bg-card p-4" data-testid={`item-leistung-${index}`}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <CardTitle>Wiederholungs- & Auffrischungskurse</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {wiederholungskurse.map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`item-wiederholung-${index}`}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle>Aktionstage & Spezialthemen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {aktionstage.map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`item-aktionstag-${index}`}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection 
        title="Schulungstermine anfragen"
        description="Wir erstellen Ihnen ein individuelles Schulungskonzept für Ihr Unternehmen."
      />
    </Layout>
  );
}
