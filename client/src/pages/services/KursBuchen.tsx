import { Layout } from "@/components/layout/Layout";
import { CourseBookingForm } from "@/components/forms/CourseBookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  GraduationCap,
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  FileCheck,
  Users,
} from "lucide-react";

const hinweise = [
  {
    icon: CheckCircle2,
    title: "Auftragsbestätigung",
    text: "Sie erhalten nach Eingang Ihrer Anmeldung eine schriftliche Bestätigung per E-Mail.",
  },
  {
    icon: Clock,
    title: "Flexible Terminplanung",
    text: "Wir stimmen den genauen Schulungstermin individuell mit Ihnen ab.",
  },
  {
    icon: FileCheck,
    title: "Teilnahmezertifikate",
    text: "Alle Teilnehmer erhalten nach der Schulung ein offizielles Teilnahmezertifikat.",
  },
  {
    icon: Users,
    title: "Vor Ort oder Online",
    text: "Wir kommen in Ihren Betrieb oder führen die Schulung als Online-Veranstaltung durch.",
  },
];

export default function KursBuchen() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Link
            href="/leistungen/fortbildung"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zu Schulungen &amp; Fortbildungen
          </Link>

          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <GraduationCap className="h-4 w-4" />
            Verbindliche Kursanmeldung
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            Schulung anmelden
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Melden Sie sich und Ihre Mitarbeitenden verbindlich für eine unserer
            Schulungen an. Wir bestätigen Ihre Buchung und koordinieren alle weiteren
            Details direkt mit Ihnen.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Formular */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <CourseBookingForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">Was passiert nach der Anmeldung?</h3>
                  <div className="space-y-4">
                    {hinweise.map((hinweis, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <hinweis.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="mb-0.5 text-sm font-medium">{hinweis.title}</p>
                          <p className="text-sm text-muted-foreground">{hinweis.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold">Haben Sie Fragen?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Wir beraten Sie gerne persönlich zu unseren Schulungsangeboten.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+4971414881321"
                      className="flex items-center gap-3 rounded-md border bg-background p-3 text-sm transition-colors hover:bg-muted"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">Telefonisch</p>
                        <p className="text-muted-foreground">07141 4881321</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@protect-as.de"
                      className="flex items-center gap-3 rounded-md border bg-background p-3 text-sm transition-colors hover:bg-muted"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-medium">Per E-Mail</p>
                        <p className="text-muted-foreground">info@protect-as.de</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-sm">Bürozeiten</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Montag – Donnerstag</span>
                      <span className="font-medium text-foreground">08:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freitag</span>
                      <span className="font-medium text-foreground">08:00 – 14:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
