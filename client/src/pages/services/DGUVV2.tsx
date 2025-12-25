import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Users, 
  Building2,
  ArrowRight,
  Scale,
  ClipboardCheck
} from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Gesetzliche Pflicht erfüllen",
    description: "Sie erfüllen Ihre Pflichten als Arbeitgeber nach dem Arbeitssicherheitsgesetz und der DGUV Vorschrift 2.",
  },
  {
    icon: ClipboardCheck,
    title: "Gefährdungen erkennen",
    description: "Wir identifizieren potenzielle Gefahren in Ihrem Betrieb und entwickeln wirksame Schutzmaßnahmen.",
  },
  {
    icon: FileText,
    title: "Rechtssichere Dokumentation",
    description: "Alle Begehungen, Beratungen und Maßnahmen werden lückenlos dokumentiert.",
  },
  {
    icon: Users,
    title: "Mitarbeiter schützen",
    description: "Reduzieren Sie Arbeitsunfälle und berufsbedingte Erkrankungen in Ihrem Unternehmen.",
  },
];

const targetGroups = [
  "Kleine und mittelständische Unternehmen",
  "Handwerksbetriebe aller Gewerke",
  "Industrieunternehmen",
  "Dienstleistungsunternehmen",
  "Öffentliche Einrichtungen",
  "Praxen und Pflegeeinrichtungen",
];

const serviceContent = [
  "Regelmäßige Arbeitsplatzbegehungen",
  "Erstellung und Aktualisierung von Gefährdungsbeurteilungen",
  "Beratung bei der Beschaffung von Arbeitsmitteln",
  "Unterstützung bei der Erstellung von Betriebsanweisungen",
  "Beratung zu persönlicher Schutzausrüstung (PSA)",
  "Teilnahme am Arbeitsschutzausschuss (ASA)",
  "Unfallanalyse und Präventionsberatung",
  "Beratung zu Arbeitsstättenverordnung",
];

export default function DGUVV2() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <ShieldCheck className="h-4 w-4" />
                DGUV Vorschrift 2
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-dguv-title">
                Sicherheitstechnische Betreuung
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Als Ihr externer Partner für Arbeitssicherheit übernehmen wir die gesetzlich 
                vorgeschriebene sicherheitstechnische Betreuung gemäß DGUV Vorschrift 2. 
                Unsere qualifizierten Fachkräfte unterstützen Sie kompetent und zuverlässig.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/kontakt" data-testid="link-dguv-cta">
                  <Button size="lg" data-testid="button-dguv-cta">
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/leistungen" data-testid="link-dguv-services">
                  <Button variant="outline" size="lg" data-testid="button-dguv-services">
                    Alle Leistungen
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg border bg-card p-8">
                <h3 className="mb-4 text-lg font-semibold">Gesetzliche Grundlage</h3>
                <p className="text-sm text-muted-foreground">
                  Nach dem Arbeitssicherheitsgesetz (ASiG) und der DGUV Vorschrift 2 ist 
                  jeder Arbeitgeber verpflichtet, Fachkräfte für Arbeitssicherheit und 
                  Betriebsärzte zu bestellen. Die Einsatzzeiten richten sich nach der 
                  Betriebsgröße und den vorhandenen Gefährdungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Ihre Vorteile</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index} data-testid={`card-benefit-${index}`}>
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

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Unsere Leistungen im Detail</h2>
              <div className="space-y-3">
                {serviceContent.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">Für wen ist diese Leistung?</h2>
              <div className="space-y-3">
                {targetGroups.map((group, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{group}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Sicherheitstechnische Betreuung anfragen"
        description="Wir erstellen Ihnen ein individuelles Angebot basierend auf Ihrer Betriebsgröße und Branche."
      />
    </Layout>
  );
}
