import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Wrench, 
  GraduationCap, 
  Flame, 
  Zap,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Sicherheitstechnische Betreuung",
    description: "Gesetzeskonforme Betreuung nach DGUV Vorschrift 2. Wir unterstützen Sie bei allen Fragen der Arbeitssicherheit.",
    href: "/leistungen/dguv-v2",
    keywords: "DGUV V2, Fachkraft für Arbeitssicherheit",
  },
  {
    icon: Wrench,
    title: "Betriebsmittelprüfungen",
    description: "Regelmäßige Prüfung Ihrer Arbeitsmittel und Betriebseinrichtungen nach BetrSichV und DGUV Vorschriften.",
    href: "/leistungen/betriebsmittelpruefung",
    keywords: "Arbeitsmittelprüfung, BetrSichV",
  },
  {
    icon: GraduationCap,
    title: "Aus- und Fortbildungen",
    description: "Praxisnahe Schulungen für Ihre Mitarbeiter. Von Ersthelfer-Kursen bis zur Sicherheitsbeauftragten-Ausbildung.",
    href: "/leistungen/fortbildung",
    keywords: "Schulungen, Unterweisung",
  },
  {
    icon: Flame,
    title: "Brandschutz",
    description: "Ganzheitliche Brandschutzkonzepte, Flucht- und Rettungspläne sowie regelmäßige Brandschutzunterweisungen.",
    href: "/leistungen/brandschutz",
    keywords: "Brandschutzbeauftragter, Feuerlöscher",
  },
  {
    icon: Zap,
    title: "Elektrische Geräteprüfung",
    description: "Prüfung ortsveränderlicher elektrischer Betriebsmittel nach DGUV V3 und VDE-Vorschriften.",
    href: "/leistungen/elektrische-pruefung",
    keywords: "DGUV V3, E-Check, VDE",
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
              className="group flex flex-col transition-all hover-elevate"
              data-testid={`card-service-${index}`}
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {service.keywords}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <p className="text-muted-foreground">{service.description}</p>
                <Link href={service.href}>
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
