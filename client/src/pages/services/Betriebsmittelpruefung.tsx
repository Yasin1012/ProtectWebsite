import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Wrench, 
  CheckCircle2, 
  FileCheck, 
  Shield,
  ArrowRight,
  AlertTriangle,
  Calendar
} from "lucide-react";

const pruefungen = [
  {
    title: "Leitern und Tritte",
    description: "Prüfung nach DGUV Information 208-016",
    interval: "Jährlich",
  },
  {
    title: "Regale und Lagersysteme",
    description: "Prüfung nach DIN EN 15635",
    interval: "Jährlich",
  },
  {
    title: "Kraftbetriebene Tore",
    description: "Prüfung nach ASR A1.7",
    interval: "Jährlich",
  },
  {
    title: "Hebebühnen und Aufzüge",
    description: "Prüfung nach BetrSichV",
    interval: "Nach Vorgabe",
  },
  {
    title: "Druckbehälter",
    description: "Prüfung nach BetrSichV",
    interval: "Nach Vorgabe",
  },
  {
    title: "Anschlagmittel und Hebezeuge",
    description: "Prüfung nach DGUV Vorschrift 54",
    interval: "Jährlich",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Rechtssicherheit",
    description: "Erfüllen Sie Ihre gesetzlichen Prüfpflichten nach BetrSichV und DGUV Vorschriften.",
  },
  {
    icon: FileCheck,
    title: "Lückenlose Dokumentation",
    description: "Detaillierte Prüfprotokolle und Übersichten aller durchgeführten Prüfungen.",
  },
  {
    icon: Calendar,
    title: "Fristenmanagement",
    description: "Wir erinnern Sie rechtzeitig an anstehende Prüftermine.",
  },
  {
    icon: AlertTriangle,
    title: "Mängelbeseitigung",
    description: "Beratung und Unterstützung bei der Behebung festgestellter Mängel.",
  },
];

export default function Betriebsmittelpruefung() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Wrench className="h-4 w-4" />
                BetrSichV / DGUV
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-betriebsmittel-title">
                Betriebsmittelprüfungen
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Regelmäßige Prüfung Ihrer Arbeitsmittel und Betriebseinrichtungen durch 
                befähigte Personen. Wir sorgen für die Einhaltung aller gesetzlichen 
                Prüffristen und dokumentieren alles rechtssicher.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/kontakt" data-testid="link-betriebsmittel-cta">
                  <Button size="lg" data-testid="button-betriebsmittel-cta">
                    Angebot anfordern
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg border bg-card p-8">
                <h3 className="mb-4 text-lg font-semibold">Warum Prüfungen?</h3>
                <p className="text-sm text-muted-foreground">
                  Nach der Betriebssicherheitsverordnung (BetrSichV) müssen Arbeitsmittel 
                  regelmäßig durch befähigte Personen geprüft werden. Nur so kann die 
                  Sicherheit der Beschäftigten gewährleistet und die Haftung des 
                  Arbeitgebers abgesichert werden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Was wir prüfen</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pruefungen.map((item, index) => (
              <Card key={index} data-testid={`card-pruefung-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {item.interval}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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

      <CTASection 
        title="Prüftermine vereinbaren"
        description="Kontaktieren Sie uns für ein Angebot zur Prüfung Ihrer Arbeitsmittel."
      />
    </Layout>
  );
}
