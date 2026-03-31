import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "wouter";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const kursTypen = [
  { value: "flurfoerderzeuge", label: "Flurförderzeuge (Theorie & Praxis)" },
  { value: "kranbediener", label: "Kranbediener (flurbediente Krane / LKW-Ladekrane)" },
  { value: "hubarbeitsbuehnen", label: "Hubarbeitsbühnen (DGUV Grundsatz 308-008)" },
  { value: "helfer-anschlaeger", label: "Helfer und Anschläger (Lastaufnahmemittel)" },
  { value: "eup", label: "Elektrotechnisch unterwiesene Person (EuP)" },
  { value: "sicherheitsbeauftragte", label: "Sicherheitsbeauftragte (DGUV Vorschrift 1)" },
  { value: "regalpruefer", label: "Regalprüfer (DIN EN 15635)" },
  { value: "leitern-tritte", label: "Leitern & Tritte (befähigte Person nach BetrSichV)" },
  { value: "brandschutzhelfer", label: "Brandschutzhelfer (ASR A2.2)" },
  { value: "ladungssicherung", label: "Ladungssicherung (Fahr- und Ladepersonal)" },
  { value: "sicherheitsunterweisung", label: "Jährliche Sicherheitsunterweisung" },
  { value: "gesundheitstag", label: "Gesundheitstag / Aktionstag" },
  { value: "individuell", label: "Individuelles Schulungskonzept" },
];

const durchfuehrungsorte = [
  { value: "vor-ort", label: "Vor Ort in unserem Betrieb" },
  { value: "online", label: "Online-Veranstaltung" },
  { value: "beides", label: "Beides möglich" },
];

const bookingSchema = z.object({
  kursTyp: z.string().min(1, "Bitte wählen Sie einen Kurstyp."),
  wunschtermin: z.string().min(1, "Bitte geben Sie einen Wunschtermin an."),
  teilnehmer: z.string().min(1, "Bitte geben Sie die Teilnehmerzahl an."),
  durchfuehrungsort: z.string().min(1, "Bitte wählen Sie einen Durchführungsort."),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  company: z.string().min(2, "Bitte geben Sie Ihr Unternehmen an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().optional(),
  message: z.string().optional(),
  verbindlich: z.boolean().refine((val) => val === true, {
    message: "Bitte bestätigen Sie die verbindliche Anmeldung.",
  }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu.",
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function CourseBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      kursTyp: "",
      wunschtermin: "",
      teilnehmer: "",
      durchfuehrungsort: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      verbindlich: false,
      privacy: false,
    },
  });

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simuliertes Absenden (Frontend-Only)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log("Buchungsanfrage:", data);
    }, 1000);
  };

  if (submitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-green-800">
            Anmeldung erfolgreich eingegangen!
          </h3>
          <p className="mb-4 text-green-700">
            Vielen Dank für Ihre verbindliche Anmeldung. Wir senden Ihnen in Kürze eine
            Auftragsbestätigung per E-Mail zu und melden uns zur weiteren Terminabsprache.
          </p>
          <p className="text-sm text-green-600">
            Bei Rückfragen erreichen Sie uns unter{" "}
            <a href="tel:+4971414881321" className="font-medium underline">
              07141 4881321
            </a>{" "}
            oder{" "}
            <a href="mailto:info@protect-as.de" className="font-medium underline">
              info@protect-as.de
            </a>
            .
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Kursdetails */}
        <div className="rounded-lg border bg-muted/30 p-4">
          <h3 className="mb-4 font-semibold text-foreground">Kursdetails</h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="kursTyp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kurstyp *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen Sie einen Kurs" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {kursTypen.map((kurs) => (
                        <SelectItem key={kurs.value} value={kurs.value}>
                          {kurs.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="wunschtermin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wunschtermin *</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teilnehmer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anzahl Teilnehmer *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="z. B. 10"
                        min={1}
                        max={200}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="durchfuehrungsort"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Durchführungsort *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen Sie einen Ort" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {durchfuehrungsorte.map((ort) => (
                        <SelectItem key={ort.value} value={ort.value}>
                          {ort.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Kontaktdaten */}
        <div className="rounded-lg border bg-muted/30 p-4">
          <h3 className="mb-4 font-semibold text-foreground">Ihre Kontaktdaten</h3>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vor- und Nachname *</FormLabel>
                    <FormControl>
                      <Input placeholder="Max Mustermann" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unternehmen *</FormLabel>
                    <FormControl>
                      <Input placeholder="Musterfirma GmbH" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail-Adresse *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="max@musterfirma.de" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+49 123 456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Anmerkungen / Besonderheiten</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Spezielle Anforderungen, Vorkenntnisse der Teilnehmer, Anfahrtsinformationen..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Verbindliche Anmeldung */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
          <h3 className="mb-3 font-semibold text-foreground">Verbindliche Anmeldung</h3>
          <div className="mb-4 rounded-md border border-primary/20 bg-background p-4 text-sm text-muted-foreground">
            <p className="mb-2 font-medium text-foreground">Auftragsbestätigung &amp; Anmeldebedingungen:</p>
            <p className="mb-2">
              Mit dem Absenden dieses Formulars melden ich/wir uns verbindlich für den gewählten
              Kurs an. Die Anmeldung wird nach Eingang durch Protect Arbeitssicherheit &amp;
              Gesundheitsschutz GmbH schriftlich per E-Mail bestätigt. Diese Bestätigung gilt
              als Auftragsbestätigung.
            </p>
            <p className="mb-2">
              Eine Stornierung ist bis 14 Tage vor Kursbeginn kostenfrei möglich. Bei
              späteren Absagen oder Nichterscheinen werden 50 % der Kursgebühr in Rechnung
              gestellt. Ersatzteilnehmer können jederzeit benannt werden.
            </p>
            <p>
              Die Rechnungsstellung erfolgt nach Durchführung der Schulung. Zahlungsziel:
              14 Tage nach Rechnungsdatum.
            </p>
          </div>

          <FormField
            control={form.control}
            name="verbindlich"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    Ich melde mich verbindlich für den gewählten Kurs an und akzeptiere die
                    oben genannten Anmeldebedingungen. *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        {/* Datenschutz */}
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal text-muted-foreground">
                  Ich habe die{" "}
                  <Link href="/datenschutz" className="text-primary underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung
                  dieser Anfrage zu. *
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Anmeldung wird verarbeitet...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Jetzt verbindlich anmelden
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          * Pflichtfelder. Nach dem Absenden erhalten Sie eine Auftragsbestätigung per E-Mail.
        </p>
      </form>
    </Form>
  );
}
