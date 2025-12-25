import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CTASection } from "@/components/sections/CTASection";
import { Award, GraduationCap, Shield, Users } from "lucide-react";

const team = [
  {
    name: "Bernhard Decker",
    role: "Geschäftsführer",
    initials: "BD",
  },
  {
    name: "André Decker",
    role: "Leitung Innendienst",
    initials: "AD",
  },
  {
    name: "Jacqueline Decker",
    role: "Innendienst",
    initials: "JD",
  },
  {
    name: "Jörg Marquardt",
    role: "Betriebsleiter Prüfdienst",
    initials: "JM",
  },
  {
    name: "Erik Bannier",
    role: "Innendienst",
    initials: "EB",
  },
  {
    name: "Lisa Wieczorek",
    role: "Innendienst",
    initials: "LW",
  },
];

const stats = [
  { icon: Shield, value: "15+", label: "Jahre Erfahrung" },
  { icon: Users, value: "6", label: "Experten im Team" },
  { icon: Award, value: "500+", label: "Zufriedene Kunden" },
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
              Kompetenz und Erfahrung für Ihre Arbeitssicherheit. 
              Unser engagiertes Team steht Ihnen mit Fachwissen und persönlicher Beratung zur Seite.
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
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Lernen Sie uns kennen</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Jedes Teammitglied bringt seine individuellen Stärken ein, um Ihnen den bestmöglichen Service zu bieten.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="group overflow-visible" data-testid={`card-team-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <Avatar className="h-24 w-24 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-primary text-xl font-semibold text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="mb-1 text-xl font-semibold" data-testid={`text-team-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium" data-testid={`text-team-role-${index}`}>
                    {member.role}
                  </p>
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
