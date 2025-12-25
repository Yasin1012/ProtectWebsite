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
  BookOpen
} from "lucide-react";

const schulungen = [
  {
    title: "Ersthelfer-Ausbildung",
    description: "Ausbildung von Ersthelfern nach DGUV Vorschrift 1. Grundkurs und Auffrischung.",
    duration: "1 Tag",
    participants: "Max. 15 Teilnehmer",
  },
  {
    title: "Sicherheitsbeauftragte",
    description: "Qualifizierung von Sicherheitsbeauftragten nach §22 SGB VII.",
    duration: "2 Tage",
    participants: "Max. 20 Teilnehmer",
  },
  {
    title: "Brandschutzhelfer",
    description: "Ausbildung zum Brandschutzhelfer nach ASR A2.2 mit praktischer Übung.",
    duration: "0,5 Tage",
    participants: "Max. 12 Teilnehmer",
  },
  {
    title: "Unterweisungen nach §12 ArbSchG",
    description: "Individuelle Unterweisungen zu spezifischen Gefährdungen in Ihrem Betrieb.",
    duration: "Nach Bedarf",
    participants: "Flexibel",
  },
  {
    title: "Ladungssicherung",
    description: "Schulung zur korrekten Ladungssicherung nach VDI 2700.",
    duration: "1 Tag",
    participants: "Max. 15 Teilnehmer",
  },
  {
    title: "Gefahrstoffunterweisung",
    description: "Unterweisung im Umgang mit Gefahrstoffen nach GefStoffV.",
    duration: "0,5 Tage",
    participants: "Flexibel",
  },
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
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <GraduationCap className="h-4 w-4" />
              Schulungen & Training
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-fortbildung-title">
              Aus- und Fortbildungen
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Praxisnahe Schulungen für Ihre Mitarbeiter. Von der Ersthelfer-Ausbildung 
              bis zur Qualifizierung von Sicherheitsbeauftragten bieten wir Ihnen 
              bedarfsgerechte Trainings.
            </p>
            <Link href="/kontakt" data-testid="link-fortbildung-cta">
              <Button size="lg" data-testid="button-fortbildung-cta">
                Schulung anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Unser Schulungsangebot</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schulungen.map((item, index) => (
              <Card key={index} className="flex flex-col" data-testid={`card-schulung-${index}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs">
                      <Clock className="h-3 w-3" />
                      {item.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs">
                      <Users className="h-3 w-3" />
                      {item.participants}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Ihre Vorteile</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index}>
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-lg border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold">Gesetzliche Relevanz</h2>
            <p className="mb-4 text-muted-foreground">
              Die Unterweisung der Beschäftigten ist nach §12 Arbeitsschutzgesetz eine 
              Pflicht des Arbeitgebers. Sie muss vor Aufnahme der Tätigkeit und danach 
              regelmäßig, mindestens jedoch einmal jährlich, erfolgen.
            </p>
            <div className="space-y-2">
              {[
                "Unterweisungen müssen dokumentiert werden",
                "Bei neuen Gefährdungen ist eine Wiederholung erforderlich",
                "Die Unterweisung muss arbeitsplatzbezogen sein",
                "Sprachliche Verständlichkeit muss gewährleistet sein",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
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
