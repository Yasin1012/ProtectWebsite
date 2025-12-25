import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Flame, 
  CheckCircle2, 
  FileText,
  Users,
  Map,
  ShieldAlert,
  ArrowRight,
  AlertTriangle
} from "lucide-react";

const leistungen = [
  {
    icon: FileText,
    title: "Brandschutzordnung",
    description: "Erstellung und Aktualisierung der Brandschutzordnung Teil A, B und C für Ihr Unternehmen.",
  },
  {
    icon: Map,
    title: "Flucht- und Rettungspläne",
    description: "Erstellung normgerechter Flucht- und Rettungspläne nach DIN ISO 23601.",
  },
  {
    icon: Users,
    title: "Brandschutzhelfer-Ausbildung",
    description: "Ausbildung Ihrer Mitarbeiter zu Brandschutzhelfern nach ASR A2.2 mit praktischen Übungen.",
  },
  {
    icon: ShieldAlert,
    title: "Brandschutzunterweisungen",
    description: "Regelmäßige Unterweisungen aller Mitarbeiter zum Verhalten im Brandfall.",
  },
  {
    icon: AlertTriangle,
    title: "Evakuierungsübungen",
    description: "Planung und Durchführung von Räumungsübungen zur Überprüfung Ihrer Notfallkonzepte.",
  },
  {
    icon: Flame,
    title: "Brandschutzbegehungen",
    description: "Regelmäßige Kontrolle der Brandschutzeinrichtungen und Dokumentation.",
  },
];

const pflichten = [
  "Bestellung eines Brandschutzbeauftragten (je nach Betriebsgröße und -art)",
  "Ausbildung von mindestens 5% der Beschäftigten zu Brandschutzhelfern",
  "Erstellung einer Brandschutzordnung",
  "Regelmäßige Unterweisung aller Beschäftigten",
  "Freihaltung und Kennzeichnung von Flucht- und Rettungswegen",
  "Bereitstellung und Wartung von Feuerlöschern",
];

export default function Brandschutz() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Flame className="h-4 w-4" />
                Prävention & Konzepte
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-brandschutz-title">
                Brandschutz
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Ganzheitliche Brandschutzbetreuung für Ihr Unternehmen. Von der 
                Erstellung der Brandschutzordnung bis zur Ausbildung Ihrer 
                Brandschutzhelfer bieten wir Ihnen alle Leistungen aus einer Hand.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/kontakt" data-testid="link-brandschutz-cta">
                  <Button size="lg" data-testid="button-brandschutz-cta">
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg border bg-card p-8">
                <h3 className="mb-4 text-lg font-semibold">Warum Brandschutz?</h3>
                <p className="text-sm text-muted-foreground">
                  Betrieblicher Brandschutz ist nicht nur gesetzliche Pflicht, sondern 
                  schützt Ihre Mitarbeiter, Ihr Unternehmen und Ihre Werte. Ein Brand 
                  kann existenzbedrohend sein – Prävention ist der beste Schutz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Unsere Leistungen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leistungen.map((item, index) => (
              <Card key={index} data-testid={`card-brandschutz-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold">Gesetzliche Anforderungen</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Der Arbeitgeber hat nach verschiedenen Vorschriften Pflichten im Brandschutz 
              zu erfüllen. Wir unterstützen Sie bei der Umsetzung.
            </p>
            <div className="space-y-3">
              {pflichten.map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Brandschutzkonzept erstellen lassen"
        description="Wir analysieren Ihre betriebliche Situation und erstellen ein maßgeschneidertes Brandschutzkonzept."
      />
    </Layout>
  );
}
