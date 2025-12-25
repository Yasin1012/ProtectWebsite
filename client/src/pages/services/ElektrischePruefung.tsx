import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Zap, 
  CheckCircle2, 
  FileCheck,
  Shield,
  Clock,
  ArrowRight,
  Tag
} from "lucide-react";

const pruefgeraete = [
  "Computer, Laptops, Monitore",
  "Drucker und Kopierer",
  "Kaffeemaschinen und Wasserkocher",
  "Verlängerungskabel und Mehrfachsteckdosen",
  "Elektrowerkzeuge",
  "Laborgeräte",
  "Medizinische Geräte",
  "Küchengeräte",
];

const ablauf = [
  {
    step: "1",
    title: "Bestandsaufnahme",
    description: "Erfassung aller prüfpflichtigen elektrischen Geräte in Ihrem Betrieb.",
  },
  {
    step: "2",
    title: "Terminvereinbarung",
    description: "Flexible Terminplanung, abgestimmt auf Ihren Betriebsablauf.",
  },
  {
    step: "3",
    title: "Durchführung der Prüfung",
    description: "Prüfung nach DGUV V3 / VDE 0701-0702 durch qualifizierte Elektrofachkräfte.",
  },
  {
    step: "4",
    title: "Dokumentation",
    description: "Erstellung eines rechtssicheren Prüfprotokolls für jedes geprüfte Gerät.",
  },
  {
    step: "5",
    title: "Kennzeichnung",
    description: "Anbringen von Prüfplaketten mit nächstem Prüftermin.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Haftungsabsicherung",
    description: "Erfüllung Ihrer gesetzlichen Prüfpflichten schützt vor Haftungsrisiken bei Unfällen.",
  },
  {
    icon: FileCheck,
    title: "Rechtssichere Dokumentation",
    description: "Detaillierte Prüfprotokolle für jedes geprüfte Gerät zur Vorlage bei Behörden.",
  },
  {
    icon: Tag,
    title: "Prüfplaketten",
    description: "Eindeutige Kennzeichnung aller geprüften Geräte mit dem nächsten Prüftermin.",
  },
  {
    icon: Clock,
    title: "Fristenmanagement",
    description: "Automatische Erinnerung an anstehende Prüftermine.",
  },
];

export default function ElektrischePruefung() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                DGUV V3 / VDE 0701-0702
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-elektrisch-title">
                Elektrische Geräteprüfung
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Prüfung ortsveränderlicher elektrischer Betriebsmittel nach DGUV 
                Vorschrift 3 und VDE 0701-0702. Unsere Elektrofachkräfte prüfen 
                Ihre Geräte vor Ort und dokumentieren alles rechtssicher.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/kontakt" data-testid="link-elektrisch-cta">
                  <Button size="lg" data-testid="button-elektrisch-cta">
                    Prüfung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg border bg-card p-8">
                <h3 className="mb-4 text-lg font-semibold">Gesetzliche Grundlage</h3>
                <p className="text-sm text-muted-foreground">
                  Nach DGUV Vorschrift 3 (ehemals BGV A3) müssen elektrische 
                  Betriebsmittel regelmäßig auf ihren ordnungsgemäßen Zustand 
                  geprüft werden. Die Prüffristen richten sich nach der 
                  Gefährdungsbeurteilung, in der Regel alle 6-24 Monate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Was wird geprüft?</h2>
              <p className="mb-6 text-muted-foreground">
                Alle ortsveränderlichen elektrischen Betriebsmittel, die mit Netzspannung 
                betrieben werden, unterliegen der Prüfpflicht:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {pruefgeraete.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">Ihre Vorteile</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">So läuft die Prüfung ab</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {ablauf.map((item, index) => (
              <Card key={index} className="text-center" data-testid={`card-ablauf-${index}`}>
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="E-Check für Ihr Unternehmen"
        description="Fordern Sie jetzt ein unverbindliches Angebot für die Prüfung Ihrer elektrischen Betriebsmittel an."
      />
    </Layout>
  );
}
