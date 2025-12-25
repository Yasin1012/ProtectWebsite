import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  ShieldCheck, 
  Wrench, 
  GraduationCap, 
  Flame, 
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Sicherheitstechnische Betreuung",
    subtitle: "Gemäß DGUV Vorschrift 2",
    description: "Als Ihr externer Partner übernehmen wir die gesetzlich vorgeschriebene sicherheitstechnische Betreuung. Unsere Fachkräfte für Arbeitssicherheit unterstützen Sie bei allen Fragen rund um sichere Arbeitsplätze.",
    href: "/leistungen/dguv-v2",
    benefits: [
      "Erfüllung der gesetzlichen Pflichten",
      "Regelmäßige Arbeitsplatzbegehungen",
      "Gefährdungsbeurteilungen",
      "Beratung bei Neuanschaffungen",
    ],
  },
  {
    icon: Wrench,
    title: "Betriebsmittelprüfungen",
    subtitle: "Nach BetrSichV und DGUV",
    description: "Regelmäßige Prüfung Ihrer Arbeitsmittel und Betriebseinrichtungen durch qualifizierte Prüfer. Wir dokumentieren alles rechtssicher und sorgen für die Einhaltung aller Prüffristen.",
    href: "/leistungen/betriebsmittelpruefung",
    benefits: [
      "Leitern, Tritte, Regale",
      "Hebebühnen und Krane",
      "Druckbehälter",
      "Tore, Türen, Fenster",
    ],
  },
  {
    icon: GraduationCap,
    title: "Aus- und Fortbildungen",
    subtitle: "Praxisorientierte Schulungen",
    description: "Von der Ersthelfer-Ausbildung bis zur Schulung von Sicherheitsbeauftragten bieten wir praxisnahe Trainings, die Ihre Mitarbeiter fit für den Arbeitsalltag machen.",
    href: "/leistungen/fortbildung",
    benefits: [
      "Ersthelfer-Ausbildung",
      "Sicherheitsbeauftragte",
      "Unterweisungen nach §12 ArbSchG",
      "Brandschutzhelfer",
    ],
  },
  {
    icon: Flame,
    title: "Brandschutz",
    subtitle: "Prävention und Konzepte",
    description: "Ganzheitliche Brandschutzbetreuung von der Erstellung von Flucht- und Rettungsplänen bis zur Ausbildung Ihrer Brandschutzhelfer und regelmäßigen Unterweisungen.",
    href: "/leistungen/brandschutz",
    benefits: [
      "Brandschutzordnung",
      "Flucht- und Rettungspläne",
      "Brandschutzhelfer-Ausbildung",
      "Evakuierungsübungen",
    ],
  },
  {
    icon: Zap,
    title: "Elektrische Geräteprüfung",
    subtitle: "DGUV V3 / VDE 0701-0702",
    description: "Prüfung ortsveränderlicher elektrischer Betriebsmittel nach den aktuellen Normen. Wir dokumentieren alle Ergebnisse und kennzeichnen Ihre Geräte mit Prüfplaketten.",
    href: "/leistungen/elektrische-pruefung",
    benefits: [
      "Rechtssichere Dokumentation",
      "Prüfplaketten",
      "Flexible Terminierung",
      "Vor-Ort-Service",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-services-page-title">
              Unsere Leistungen
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Umfassende Lösungen für Arbeitssicherheit und Gesundheitsschutz. 
              Wir unterstützen Sie bei der Erfüllung aller gesetzlichen Anforderungen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden" data-testid={`card-service-detail-${index}`}>
                <div className="grid md:grid-cols-3">
                  <div className="bg-muted/30 p-6 md:p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="mb-1 text-2xl font-bold">{service.title}</h2>
                    <p className="text-sm font-medium text-primary">{service.subtitle}</p>
                  </div>
                  <div className="p-6 md:col-span-2 md:p-8">
                    <p className="mb-6 text-muted-foreground">{service.description}</p>
                    <div className="mb-6 grid gap-2 sm:grid-cols-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.href} data-testid={`link-service-detail-${index}`}>
                      <Button data-testid={`button-service-detail-${index}`}>
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Haben Sie Fragen zu unseren Leistungen?"
        description="Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch."
      />
    </Layout>
  );
}
