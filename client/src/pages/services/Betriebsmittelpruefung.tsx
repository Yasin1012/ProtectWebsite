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
  Calendar,
  ClipboardList,
  UserCheck
} from "lucide-react";
import arbeitsmittelImage from "@assets/image_1766689685291.png";

const pruefungen = [
  "Leitern und Tritte, fahrbare Arbeitsbühnen, Gerüste",
  "Regale, z. B. Fachboden- oder Palettenregale gemäß DIN EN 15635 und DGUV Information 208-061",
  "Zurr- und Anschlagmittel, z. B. Ketten, Seile, Gurte",
  "Kraftbetriebene Türen und Tore, z. B. Sektionaltore, Rolltore",
  "Flurförderzeuge (FFZ), insbesondere Gabelstapler und Hubwagen",
  "Hebehilfen und Lastaufnahmeeinrichtungen",
  "Ortsveränderliche elektrische Betriebsmittel (DGUV Vorschrift 3)",
  "Einschätzung und Bewertung von Altmaschinen (E-ALMA) nach BetrSichV",
];

const gefaehrdungsbeurteilung = [
  "Die Festlegung von Prüfarten (z.B. Erstprüfung, wiederkehrende Prüfung, außerordentliche Prüfung)",
  "Die Festlegung von Prüffristen",
  "Die Auswahl befähigter Personen",
  "Die lückenlose Dokumentation der durchgeführten Prüfungen",
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
                BetrSichV / TRBS 1201
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-betriebsmittel-title">
                Prüfung von Arbeitsmitteln
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Arbeitsmittel unterliegen gesetzlichen Prüfpflichten, die sich aus der 
                Betriebssicherheitsverordnung (BetrSichV) sowie den Technischen Regeln für 
                Betriebssicherheit (TRBS 1201) ergeben.
              </p>
              <p className="mb-6 text-muted-foreground">
                Arbeitgeber sind verpflichtet, alle Arbeitsmittel in regelmäßigen, angemessenen 
                Zeitabständen durch eine zur Prüfung befähigte Person überprüfen zu lassen. 
                Die Prüffristen richten sich dabei nach der Gefährdungsbeurteilung sowie nach Art, 
                Nutzungshäufigkeit und Beanspruchung der Arbeitsmittel.
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
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={arbeitsmittelImage} 
                  alt="Arbeitsmittelprüfung" 
                  className="h-auto w-full object-cover"
                  data-testid="img-betriebsmittel-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 rounded-lg border bg-card p-6">
            <p className="text-lg font-medium text-center">
              Die Prüfung dient der Sicherstellung, dass sich die Arbeitsmittel in einem 
              sicheren Zustand befinden und keine Gefährdung für Beschäftigte besteht.
            </p>
          </div>
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
              <div className="mb-4 flex items-center gap-2">
                <ClipboardList className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Gefährdungsbeurteilung und Dokumentation</h2>
              </div>
              <p className="mb-6 text-muted-foreground">
                Gemäß § 3 und § 10 der Betriebssicherheitsverordnung ist der Arbeitgeber verpflichtet, 
                im Rahmen der Gefährdungsbeurteilung alle erforderlichen Maßnahmen zur sicheren 
                Verwendung von Arbeitsmitteln zu ermitteln und die Ergebnisse zu dokumentieren.
              </p>
              <p className="mb-4 font-medium">Dies umfasst insbesondere:</p>
              <div className="space-y-3">
                {gefaehrdungsbeurteilung.map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`item-gefaehrdung-${index}`}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border bg-card p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Hinweis:</strong> Auch sogenannte „Altmaschinen" – Maschinen ohne CE-Kennzeichnung, 
                  die vor dem 01.01.1995 in Betrieb genommen wurden, unterliegen dieser Prüfungspflicht. 
                  Diese sind gemäß Betriebssicherheitsverordnung ebenso im Rahmen der Gefährdungsbeurteilung 
                  zu bewerten und sicherheitstechnisch zu beurteilen.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Wrench className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Unser Leistungsspektrum</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                Unser Leistungsspektrum umfasst unter anderem die Prüfung folgender Arbeitsmittel:
              </p>
              <div className="space-y-3">
                {pruefungen.map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`item-pruefung-${index}`}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Prüfung durch befähigte Personen</h3>
                </div>
                <p className="text-muted-foreground">
                  Unsere Prüfungen erfolgen ausschließlich durch befähigte Personen im Sinne 
                  der TRBS 1203. Diese verfügen über die notwendige Fachkenntnis, Berufserfahrung 
                  und Weiterbildung, um den sicheren Zustand von Arbeitsmitteln sachkundig zu beurteilen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Rechtssicherheit durch professionelle Prüfungen</h3>
                </div>
                <p className="text-muted-foreground">
                  Mit unseren Dienstleistungen erfüllen Sie nicht nur gesetzliche Pflichten, 
                  sondern sorgen auch für einen kontinuierlich sicheren Betrieb Ihrer Arbeitsmittel. 
                  Gerne unterstützen wir Sie auch bei der Erstellung oder Aktualisierung Ihrer 
                  Gefährdungsbeurteilung.
                </p>
              </CardContent>
            </Card>
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
