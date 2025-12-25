import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";
import { Award, GraduationCap, Shield, Users } from "lucide-react";

const team = [
  {
    name: "Dr. Michael Weber",
    role: "Geschäftsführer",
    initials: "MW",
    qualifications: [
      "Diplom-Ingenieur",
      "Fachkraft für Arbeitssicherheit",
      "Brandschutzbeauftragter",
    ],
    description: "Über 20 Jahre Erfahrung in der Arbeitssicherheit. Spezialisiert auf Industriebetriebe und komplexe Gefährdungsbeurteilungen.",
  },
  {
    name: "Sandra Müller",
    role: "Leiterin Sicherheitstechnik",
    initials: "SM",
    qualifications: [
      "Sicherheitsingenieurin",
      "Fachkraft für Arbeitssicherheit",
      "Ausbilderin AdA",
    ],
    description: "Expertin für sicherheitstechnische Betreuung nach DGUV V2. Schwerpunkt: Handwerk und mittelständische Unternehmen.",
  },
  {
    name: "Thomas Schneider",
    role: "Prüfingenieur",
    initials: "TS",
    qualifications: [
      "Elektroingenieur",
      "Befähigte Person nach BetrSichV",
      "VDE-Prüfer",
    ],
    description: "Spezialist für elektrische Prüfungen nach DGUV V3. Langjährige Erfahrung in der Prüfung industrieller Anlagen.",
  },
  {
    name: "Julia Hartmann",
    role: "Brandschutzexpertin",
    initials: "JH",
    qualifications: [
      "Brandschutzbeauftragte",
      "Ausbilderin Brandschutzhelfer",
      "Evakuierungsbeauftragte",
    ],
    description: "Entwickelt Brandschutzkonzepte und schult Mitarbeiter. Erfahrung in Gesundheitswesen und Verwaltung.",
  },
  {
    name: "Markus Becker",
    role: "Schulungsleiter",
    initials: "MB",
    qualifications: [
      "Meister im Handwerk",
      "Ausbilder Erste Hilfe",
      "Sicherheitsbeauftragter",
    ],
    description: "Leitet unsere Schulungsabteilung. Praxisnahe Trainings mit hohem Wiedererkennungswert für die Teilnehmer.",
  },
  {
    name: "Lisa Richter",
    role: "Kundenbetreuung",
    initials: "LR",
    qualifications: [
      "Kauffrau für Büromanagement",
      "Fachkraft für Arbeitsschutz",
    ],
    description: "Ihr erster Ansprechpartner für Anfragen und Terminkoordination. Sorgt für reibungslose Abläufe.",
  },
];

const stats = [
  { icon: Shield, value: "15+", label: "Jahre Erfahrung" },
  { icon: Users, value: "6", label: "Experten im Team" },
  { icon: Award, value: "12+", label: "Zertifizierungen" },
  { icon: GraduationCap, value: "1000+", label: "Schulungen durchgeführt" },
];

export default function Team() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-team-title">
              Unser Team
            </h1>
            <p className="mb-12 text-lg text-muted-foreground">
              Erfahrene Experten für Ihre Arbeitssicherheit. Jedes Teammitglied 
              bringt spezifische Qualifikationen und jahrelange Praxiserfahrung mit.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center" data-testid={`stat-team-${index}`}>
                <CardContent className="p-6">
                  <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden" data-testid={`card-team-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary/10 text-lg font-semibold text-primary">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{member.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.qualifications.map((qual, qualIndex) => (
                      <Badge key={qualIndex} variant="secondary" className="text-xs">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Unsere Werte</h2>
            <p className="mb-8 text-muted-foreground">
              Was uns als Team auszeichnet und antreibt.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Kompetenz</h3>
                <p className="text-sm text-muted-foreground">
                  Regelmäßige Weiterbildungen halten unser Wissen auf dem neuesten Stand 
                  der Technik und Gesetzgebung.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Partnerschaft</h3>
                <p className="text-sm text-muted-foreground">
                  Wir verstehen uns als Teil Ihres Teams und arbeiten eng mit Ihren 
                  Verantwortlichen zusammen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Qualität</h3>
                <p className="text-sm text-muted-foreground">
                  Höchste Qualitätsstandards bei allen Leistungen sind für uns 
                  selbstverständlich.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
