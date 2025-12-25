import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Zap, 
  CheckCircle2, 
  FileCheck,
  Shield,
  Clock,
  ArrowRight,
  Phone,
  MapPin,
  FileText,
  ClipboardCheck,
  Eye
} from "lucide-react";
import elektroImage from "@assets/yuriy-vertikov-bFjTqonnpK4-unsplash_1766690841497.jpg";

const gesetzlicheGrundlagen = [
  "§5 der Betriebssicherheitsverordnung (BetrSichV)",
  "DIN VDE 0701-0702 (Ortsveränderliche Geräte)",
  "DIN VDE 0105-100 (Ortsfeste Anlagen)",
  "TRBS 1201 & TRBS 1111 (Technische Regeln für Betriebssicherheit)",
];

const leistungen = [
  "Prüfung ortsveränderlicher Betriebsmittel",
  "Prüfung ortsfester elektrischer Anlagen und Maschinen",
  "Prüfung von Ladestationen / Wallboxen für Elektrofahrzeuge nach DIN VDE 0100-722",
  "Prüfung von Flurförderzeug-Ladeinfrastruktur",
  "Prüfung von RCDs und FI´s",
];

const vorteile = [
  "Alle Leistungen aus einer Hand: Beratung, Prüfung, Nachverfolgung",
  "Erfahrung: 20 Jahre Erfahrung im Bereich Prüfung von elektrischen Verbrauchern",
  "Zukunftssicher: modernste Prüfgeräte und eine digitale Dokumentation",
  "Keine versteckten Kosten: Transparente Angebote",
];

const ablauf = [
  {
    step: "1",
    title: "Erstkontakt",
    description: "Kontaktaufnahme per Telefon oder Kontaktformular, erstes Beratungsgespräch, Terminabstimmung zur Begehung",
    icon: Phone,
  },
  {
    step: "2",
    title: "Betriebsbegehung",
    description: "Erfassung der vorhandenen Prüflinge vor Ort, Abstimmung der Prüfanforderungen",
    icon: MapPin,
  },
  {
    step: "3",
    title: "Angebotserstellung",
    description: "Kalkulation auf Basis des tatsächlichen Aufwands, transparente Preisstruktur",
    icon: FileText,
  },
  {
    step: "4",
    title: "Durchführung der Prüfung",
    description: "Prüfung aller elektrischen Betriebsmittel und Verbraucher, Inventarisierung der geprüften Prüflinge",
    icon: ClipboardCheck,
  },
  {
    step: "5",
    title: "Auswertung der Prüfergebnisse",
    description: "Dokumentation der Prüfergebnisse, Festlegung des zukünftigen Prüfintervalls",
    icon: FileCheck,
  },
  {
    step: "6",
    title: "Livezugriff",
    description: "Zugriff auf Ihre Prüfberichte über das Protect-Kundenportal, Echtzeit-Einsicht in Gerätehistorie und Fristen",
    icon: Eye,
  },
];

export default function ElektrischePruefung() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                DGUV Vorschrift 3
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-elektrisch-title">
                Elektrische Geräteprüfung
              </h1>
              <p className="mb-6 text-muted-foreground">
                Elektrische Anlagen und Betriebsmittel zählen zu den größten 
                Gefährdungspotenzialen im Unternehmen. Deshalb schreibt der Gesetzgeber 
                regelmäßige Prüfungen vor – insbesondere nach der DGUV Vorschrift 3 
                sowie den Normen der DIN VDE.
              </p>
              <Link href="/kontakt" data-testid="link-elektrisch-cta">
                <Button size="lg" data-testid="button-elektrisch-cta">
                  Prüfung anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={elektroImage} 
                  alt="Elektrische Geräteprüfung" 
                  className="h-auto w-full object-cover"
                  data-testid="img-elektrisch-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Was ist die DGUV Vorschrift 3?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Die DGUV Vorschrift 3 verpflichtet Unternehmen, alle elektrischen 
                  Betriebsmittel und Anlagen regelmäßig auf ihren ordnungsgemäßen 
                  Zustand prüfen zu lassen. Grundlage dafür sind:
                </p>
                <div className="space-y-2">
                  {gesetzlicheGrundlagen.map((item, index) => (
                    <div key={index} className="flex items-start gap-2" data-testid={`item-grundlage-${index}`}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unsere Leistungen im Überblick</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leistungen.map((item, index) => (
                    <div key={index} className="flex items-start gap-2" data-testid={`item-leistung-elektro-${index}`}>
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

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-4 text-center text-3xl font-bold">Warum mit uns? Ihre Vorteile auf einen Blick</h2>
          <div className="mx-auto mb-12 max-w-3xl">
            <div className="grid gap-3 md:grid-cols-2">
              {vorteile.map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border bg-card p-4" data-testid={`item-vorteil-elektro-${index}`}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Vom Anruf bis zur Lösung</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ablauf.map((item, index) => (
              <Card key={index} data-testid={`card-ablauf-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="E-Check für Ihr Unternehmen"
        description="Fordern Sie jetzt ein unverbindliches Angebot für die Prüfung Ihrer elektrischen Betriebsmittel an."
      />
    </Layout>
  );
}
