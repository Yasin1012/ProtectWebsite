import { useRef, useState, useEffect, type RefObject } from "react";
import { motion } from "framer-motion";
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

function useIntersectionObserver(ref: RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

export default function Team() {
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamInView = useIntersectionObserver(teamRef);
  const valuesInView = useIntersectionObserver(valuesRef);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-team-title">
              Unser Team
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Kompetenz und Erfahrung für Ihre Arbeitssicherheit. 
              Unser engagiertes Team steht Ihnen mit Fachwissen und persönlicher Beratung zur Seite.
            </p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center" data-testid={`stat-team-${index}`}>
                  <CardContent className="p-6">
                    <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12" ref={teamRef}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-2 text-3xl font-bold">Lernen Sie uns kennen</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Jedes Teammitglied bringt seine individuellen Stärken ein, um Ihnen den bestmöglichen Service zu bieten.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-visible hover-elevate" data-testid={`card-team-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <Avatar className="h-20 w-20 ring-4 ring-primary/10">
                        <AvatarFallback className="bg-primary text-lg font-semibold text-primary-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold" data-testid={`text-team-name-${index}`}>
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium" data-testid={`text-team-role-${index}`}>
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-8 md:py-12" ref={valuesRef}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-2 text-3xl font-bold">Unsere Werte</h2>
            <p className="mb-8 text-muted-foreground">
              Was uns als Team auszeichnet und antreibt.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Shield, title: "Kompetenz", desc: "Regelmäßige Weiterbildungen halten unser Wissen auf dem neuesten Stand der Technik und Gesetzgebung." },
              { icon: Users, title: "Partnerschaft", desc: "Wir verstehen uns als Teil Ihres Teams und arbeiten eng mit Ihren Verantwortlichen zusammen." },
              { icon: Award, title: "Qualität", desc: "Höchste Qualitätsstandards bei allen Leistungen sind für uns selbstverständlich." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
