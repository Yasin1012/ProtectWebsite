import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import arbeitssicherheitImage from "@assets/image_1766689624846.png";
import arbeitsmittelImage from "@assets/image_1766689685291.png";
import fortbildungImage from "@assets/image_1766690223127.png";

const services = [
  {
    image: arbeitssicherheitImage,
    title: "Arbeitssicherheit",
    description: "Gesetzeskonforme Betreuung nach DGUV Vorschrift 2. Wir unterstützen Sie bei allen Fragen der Arbeitssicherheit.",
    href: "/leistungen/dguv-v2",
    keywords: "DGUV V2, Fachkraft für Arbeitssicherheit",
  },
  {
    image: arbeitsmittelImage,
    title: "Arbeitsmittelprüfung",
    description: "Regelmäßige Prüfung Ihrer Arbeitsmittel und Betriebseinrichtungen nach BetrSichV und DGUV Vorschriften.",
    href: "/leistungen/betriebsmittelpruefung",
    keywords: "BetrSichV, TRBS 1201",
  },
  {
    image: fortbildungImage,
    title: "Aus- und Fortbildungen",
    description: "Praxisnahe Schulungen für Ihre Mitarbeiter. Von Ersthelfer-Kursen bis zur Sicherheitsbeauftragten-Ausbildung.",
    href: "/leistungen/fortbildung",
    keywords: "Schulungen, Unterweisung",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-services-title">
            Unsere Leistungen
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Umfassende Lösungen für die Arbeitssicherheit und den Gesundheitsschutz in Ihrem Unternehmen.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group flex flex-col overflow-hidden transition-all hover-elevate"
              data-testid={`card-service-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-service-${index}`}
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {service.keywords}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <Link href={service.href} data-testid={`link-service-${index}`}>
                  <Button variant="ghost" className="w-full justify-between" data-testid={`button-service-${index}`}>
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/leistungen" data-testid="link-all-services">
            <Button size="lg" variant="outline" data-testid="button-all-services">
              Alle Leistungen ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
