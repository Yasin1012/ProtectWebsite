import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Building2, 
  Handshake, 
  Network as NetworkIcon,
  GraduationCap,
  Stethoscope,
  Scale,
  Shield,
  Users
} from "lucide-react";

const partners = [
  {
    icon: Stethoscope,
    category: "Arbeitsmedizin",
    title: "Betriebsärztliche Dienste",
    description: "Kooperation mit erfahrenen Arbeitsmedizinern für die komplette arbeitsmedizinische Betreuung Ihres Unternehmens.",
  },
  {
    icon: Scale,
    category: "Beratung",
    title: "Rechtsberatung Arbeitsrecht",
    description: "Enge Zusammenarbeit mit spezialisierten Rechtsanwälten für arbeitsrechtliche Fragestellungen.",
  },
  {
    icon: GraduationCap,
    category: "Bildung",
    title: "Bildungsträger & IHK",
    description: "Partnerschaft mit anerkannten Bildungsträgern für zertifizierte Aus- und Weiterbildungen.",
  },
  {
    icon: Shield,
    category: "Versicherung",
    title: "Berufsgenossenschaften",
    description: "Direkter Draht zu den Unfallversicherungsträgern für schnelle Abstimmungen.",
  },
  {
    icon: Building2,
    category: "Behörden",
    title: "Gewerbeaufsicht",
    description: "Gute Kontakte zu Aufsichtsbehörden für reibungslose Genehmigungsverfahren.",
  },
  {
    icon: Users,
    category: "Fachverbände",
    title: "Branchenverbände",
    description: "Mitgliedschaft in relevanten Fachverbänden für Wissensaustausch und Netzwerk.",
  },
];

const benefits = [
  {
    title: "Alles aus einer Hand",
    description: "Durch unser Netzwerk können wir Ihnen umfassende Lösungen bieten, auch über unsere Kernkompetenzen hinaus.",
  },
  {
    title: "Qualitätsgarantie",
    description: "Alle Partner sind sorgfältig ausgewählt und erfüllen unsere hohen Qualitätsstandards.",
  },
  {
    title: "Kurze Wege",
    description: "Direkte Kommunikation zwischen den Experten beschleunigt Prozesse und spart Zeit.",
  },
  {
    title: "Aktuelles Wissen",
    description: "Regelmäßiger Austausch im Netzwerk hält alle Beteiligten auf dem neuesten Stand.",
  },
];

export default function Network() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Handshake className="h-4 w-4" />
              Starke Partnerschaften
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-network-title">
              Unser Netzwerk
            </h1>
            <p className="text-lg text-muted-foreground">
              Gemeinsam mit unseren Partnern bieten wir Ihnen ganzheitliche Lösungen 
              für Arbeitssicherheit und Gesundheitsschutz. Profitieren Sie von unserem 
              gewachsenen Expertennetzwerk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Unsere Partner</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <Card key={index} data-testid={`card-partner-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <partner.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-primary">{partner.category}</p>
                      <h3 className="font-semibold">{partner.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
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
              <h2 className="mb-6 text-3xl font-bold">Vorteile unseres Netzwerks</h2>
              <p className="mb-8 text-muted-foreground">
                Unser Netzwerk ermöglicht es uns, Ihnen umfassende Dienstleistungen 
                anzubieten und komplexe Anforderungen effizient zu erfüllen.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="rounded-lg border bg-card p-4">
                    <h3 className="mb-1 font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardContent className="p-8 text-center">
                  <NetworkIcon className="mx-auto mb-4 h-16 w-16 text-primary" />
                  <h3 className="mb-4 text-2xl font-bold">Werden Sie Partner</h3>
                  <p className="mb-6 text-muted-foreground">
                    Sie sind Experte in einem komplementären Bereich und interessiert an 
                    einer Zusammenarbeit? Wir freuen uns auf Ihre Kontaktaufnahme.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Gemeinsam für mehr Sicherheit"
        description="Kontaktieren Sie uns für eine umfassende Beratung durch unser Expertennetzwerk."
      />
    </Layout>
  );
}
