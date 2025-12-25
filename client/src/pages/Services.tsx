import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import arbeitssicherheitImage from "@assets/image_1766689624846.png";
import arbeitsmittelImage from "@assets/image_1766689685291.png";
import fortbildungImage from "@assets/image_1766690223127.png";

const services = [
  {
    image: arbeitssicherheitImage,
    title: "Arbeitssicherheit",
    subtitle: "Gemäß DGUV Vorschrift 2",
    description: "Sicherheit am Arbeitsplatz ist kein Luxus, sondern Pflicht und eine Investition in die Zukunft Ihres Unternehmens. Als Ihr externer Partner übernehmen wir die gesetzlich vorgeschriebene sicherheitstechnische Betreuung.",
    href: "/leistungen/dguv-v2",
    benefits: [
      "Gefährdungsbeurteilungen",
      "Betriebsanweisungen",
      "Betreuungsleistungen nach DGUV V2",
      "SiGeKo bei Bauvorhaben",
    ],
  },
  {
    image: arbeitsmittelImage,
    title: "Arbeitsmittelprüfung",
    subtitle: "Nach BetrSichV und TRBS 1201",
    description: "Arbeitsmittel unterliegen gesetzlichen Prüfpflichten. Wir prüfen Ihre Arbeitsmittel durch befähigte Personen und dokumentieren alles rechtssicher.",
    href: "/leistungen/betriebsmittelpruefung",
    benefits: [
      "Leitern, Tritte, Regale",
      "Flurförderzeuge & Hubarbeitsbühnen",
      "Elektrische Betriebsmittel",
      "Altmaschinen-Bewertung",
    ],
  },
  {
    image: fortbildungImage,
    title: "Aus- und Fortbildungen",
    subtitle: "Praxisnah und rechtssicher",
    description: "Unsere Aus- und Weiterbildungen basieren auf aktuellen gesetzlichen Anforderungen und werden individuell auf Ihr Unternehmen abgestimmt.",
    href: "/leistungen/fortbildung",
    benefits: [
      "Flurförderzeuge & Krane",
      "Sicherheitsbeauftragte",
      "Wiederholungsschulungen",
      "Aktionstage & Spezialthemen",
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
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="h-full w-full object-cover"
                      data-testid={`img-service-detail-${index}`}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <p className="mb-1 text-sm font-medium text-primary">{service.subtitle}</p>
                    <h2 className="mb-4 text-2xl font-bold">{service.title}</h2>
                    <p className="mb-6 text-muted-foreground">{service.description}</p>
                    <div className="mb-6 grid gap-2 sm:grid-cols-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2" data-testid={`item-benefit-${index}-${benefitIndex}`}>
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
