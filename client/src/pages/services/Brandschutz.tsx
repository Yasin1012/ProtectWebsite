import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Wrench,
  BookOpen
} from "lucide-react";
import brandschutzImage from "@assets/pexels-pixabay-69934_1766690620946.jpg";

const ausstattungTechnik = [
  "Handfeuerlöscher",
  "Fahrbare Löschgeräte",
  "Feuerlöscher-Wartungsservice nach DIN 14406",
];

const schulungenUnterweisungen = [
  "Brandschutzunterweisungen (rechtssicher & praxisnah)",
  "Ausbildung von Brandschutzhelfern nach ASR A2.2",
  "Ausbildung von Räumungs- und Evakuierungshelfern",
  "Feuerlöschtrainings mit realitätsnahen Übungsszenarien",
  "Durchführung und Auswertung von Evakuierungsübungen",
];

const dokumentationPlanung = [
  "Brandschutzordnungen nach DIN 14096",
  "Flucht- und Rettungspläne gemäß DIN 23601",
  "Feuerwehrpläne nach DIN 14095",
  "Gefährdungsbeurteilungen mit Fokus auf Brandrisiken",
  "Externer Brandschutzbeauftragter inkl. Betreuung und Nachweisführung",
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
                Ganzheitlicher Brandschutz für Ihr Unternehmen
              </h1>
              <p className="mb-6 text-muted-foreground">
                Brandschutz ist mehr als nur Pflicht – er ist ein zentraler Bestandteil 
                eines sicheren und verantwortungsvoll geführten Unternehmens. Die 
                gesetzlichen Anforderungen sind komplex und umfassen sowohl den 
                vorbeugenden als auch den abwehrenden Brandschutz. Hinzu kommen wichtige 
                Vorschriften der Versicherer und branchenspezifische Regelungen.
              </p>
              <p className="mb-6 text-muted-foreground">
                Damit Sie den Überblick behalten, stehen wir Ihnen als kompetenter 
                Partner mit umfassender Beratung und praxiserprobten Lösungen zur Seite.
              </p>
              <Link href="/kontakt" data-testid="link-brandschutz-cta">
                <Button size="lg" data-testid="button-brandschutz-cta">
                  Beratung anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={brandschutzImage} 
                  alt="Brandschutz" 
                  className="h-auto w-full object-cover"
                  data-testid="img-brandschutz-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Unsere Leistungen im Überblick</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <CardTitle>Ausstattung & Technik</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Wir beraten Sie bei der Auswahl, Anschaffung und Wartung von 
                  Brandschutzausrüstung – passend zu Ihrem Unternehmen und den 
                  geltenden Anforderungen:
                </p>
                <div className="space-y-2">
                  {ausstattungTechnik.map((item, index) => (
                    <div key={index} className="flex items-start gap-2" data-testid={`item-ausstattung-${index}`}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Schulungen & Unterweisungen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Gut geschulte Mitarbeitende sind im Ernstfall entscheidend. 
                  Unsere Schulungen sind praxisnah, gesetzeskonform und auf Ihre 
                  Branche abgestimmt:
                </p>
                <div className="space-y-2">
                  {schulungenUnterweisungen.map((item, index) => (
                    <div key={index} className="flex items-start gap-2" data-testid={`item-schulung-${index}`}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>Dokumentation & Planung</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Wir erstellen für Sie alle erforderlichen Unterlagen und übernehmen 
                  auf Wunsch die Funktion des externen Brandschutzbeauftragten:
                </p>
                <div className="space-y-2">
                  {dokumentationPlanung.map((item, index) => (
                    <div key={index} className="flex items-start gap-2" data-testid={`item-dokumentation-${index}`}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
        title="Brandschutzkonzept erstellen lassen"
        description="Wir analysieren Ihre betriebliche Situation und erstellen ein maßgeschneidertes Brandschutzkonzept."
      />
    </Layout>
  );
}
