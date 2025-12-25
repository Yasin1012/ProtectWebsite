import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 123 456 789 00",
    link: "tel:+4912345678900",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@asoplus.de",
    link: "mailto:info@asoplus.de",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Musterstraße 123\n12345 Musterstadt",
    link: null,
  },
  {
    icon: Clock,
    title: "Bürozeiten",
    content: "Mo–Fr: 8:00–17:00 Uhr",
    link: null,
  },
];

export default function Contact() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" data-testid="text-contact-title">
              Kontakt
            </h1>
            <p className="text-lg text-muted-foreground">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein unverbindliches 
              Angebot? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Anfrage senden</CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} data-testid={`card-contact-info-${index}`}>
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-sm text-muted-foreground">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Schnelle Antwort garantiert</h3>
                  <p className="text-sm text-primary-foreground/90">
                    Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
