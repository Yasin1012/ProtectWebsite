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
  ClipboardCheck,
  Heart,
  HardHat
} from "lucide-react";
import arbeitssicherheitImage from "@assets/image_1766689624846.png";

const beratungsleistungen = [
  "Unterstützung bei der Erstellung und Überarbeitung der Gefährdungsbeurteilung inkl. Beurteilung der psychischen Belastungen am Arbeitsplatz und dem Mutterschutz",
  "Erstellen von Betriebsanweisungen, Arbeitsanweisungen, Gefahrstoffverzeichnissen und Explosionsschutzdokumenten",
  "Unterstützung bei allen Betreuungsleistungen (Regel-, Grund-, anlassbezogene- und betriebsspezifische Betreuung / Unternehmermodell) sowie bei Behördengängen und Kooperationen mit der BG",
  "Unterstützung während der Planung und Ausführung von Bauvorhaben durch einen Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo)",
];

const weitereThemen = [
  "CE-Konformitätserklärung (Verfahren)",
  "Begleitung von Audits (ISO 9001 & ISO 045001)",
  "Elektrotechnische Organisation",
];

const gesundheitsschutz = [
  "Gesundheitsprävention",
  "Stressmanagement",
  "Burnoutprävention / -beratung",
];

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

export default function DGUVV2() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <ShieldCheck className="h-4 w-4" />
                DGUV Vorschrift 2
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-dguv-title">
                Arbeitssicherheit
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Sicherheit am Arbeitsplatz ist kein Luxus, sondern Pflicht und eine Investition 
                in die Zukunft Ihres Unternehmens.
              </p>
              <p className="mb-6 text-muted-foreground">
                Das Arbeitssicherheitsgesetz und die DGUV Vorschrift 2 „Betriebsärzte und 
                Fachkräfte für Arbeitssicherheit" fordern die sicherheitstechnische Betreuung 
                der Unternehmen durch Fachkräfte für Arbeitssicherheit.
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
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={arbeitssicherheitImage} 
                  alt="Arbeitssicherheit Beratung" 
                  className="h-auto w-full object-cover"
                  data-testid="img-dguv-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-4 text-center text-3xl font-bold">Ihre Vorteile</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
            Profitieren Sie von unserer rechtssicheren Beratung für Ihr Unternehmen.
          </p>
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

      <section className="bg-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold">Unsere rechtskonforme Beratung umfasst:</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {beratungsleistungen.map((item, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`item-beratung-${index}`}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <HardHat className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Darüber hinaus unterstützen wir Sie zu:</h3>
                  </div>
                  <div className="mb-6 space-y-2">
                    {weitereThemen.map((item, index) => (
                      <div key={index} className="flex items-start gap-3" data-testid={`item-thema-${index}`}>
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Gesundheitsschutz über Partner:</h3>
                    </div>
                    <div className="space-y-2">
                      {gesundheitsschutz.map((item, index) => (
                        <div key={index} className="flex items-start gap-3" data-testid={`item-gesundheit-${index}`}>
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-6 text-3xl font-bold">Für wen ist diese Leistung?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {targetGroups.map((group, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border bg-card p-4" data-testid={`item-zielgruppe-${index}`}>
                <Building2 className="h-5 w-5 shrink-0 text-primary" />
                <span>{group}</span>
              </div>
            ))}
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
