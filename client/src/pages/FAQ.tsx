import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "wouter";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Allgemeine Fragen",
    items: [
      {
        question: "Was macht Protect Arbeitssicherheit & Gesundheitsschutz GmbH?",
        answer:
          "Wir sind ein spezialisiertes Unternehmen für betrieblichen Arbeitsschutz. Unser Leistungsangebot umfasst die sicherheitstechnische Betreuung nach DGUV Vorschrift 2, Betriebsmittel- und Geräteprüfungen, Aus- und Fortbildungen, sowie Brandschutzberatung. Wir begleiten Unternehmen dabei, ihre gesetzlichen Pflichten zu erfüllen und eine sichere Arbeitsumgebung zu schaffen.",
      },
      {
        question: "Für welche Unternehmen sind Ihre Leistungen geeignet?",
        answer:
          "Unsere Leistungen richten sich an Unternehmen jeder Größe – vom kleinen Handwerksbetrieb bis zum mittelständischen Industrieunternehmen. Jeder Arbeitgeber in Deutschland ist gesetzlich verpflichtet, den Arbeitsschutz zu gewährleisten. Wir passen unser Angebot individuell an die Branche und den Betrieb an.",
      },
      {
        question: "In welchem Gebiet sind Sie tätig?",
        answer:
          "Wir sind primär in der Region Stuttgart und Baden-Württemberg tätig. Für größere Projekte und Schulungen sind wir auch deutschlandweit verfügbar. Sprechen Sie uns einfach an – wir finden gemeinsam eine Lösung.",
      },
      {
        question: "Wie kann ich ein erstes Beratungsgespräch vereinbaren?",
        answer:
          "Sie können uns telefonisch unter 07141 4881321 erreichen, per E-Mail an info@protect-as.de schreiben oder das Kontaktformular auf unserer Website nutzen. Wir melden uns in der Regel innerhalb eines Werktages bei Ihnen.",
      },
    ],
  },
  {
    title: "DGUV Vorschrift 2 – Sicherheitstechnische Betreuung",
    items: [
      {
        question: "Was ist die DGUV Vorschrift 2 und warum ist sie wichtig?",
        answer:
          "Die DGUV Vorschrift 2 verpflichtet jeden Arbeitgeber, Betriebsärzte und Fachkräfte für Arbeitssicherheit (SiFa) zu bestellen. Diese beraten und unterstützen den Betrieb bei allen Fragen rund um Sicherheit und Gesundheitsschutz. Verstöße können zu Bußgeldern und im Schadensfall zu Haftungsrisiken führen.",
      },
      {
        question: "Welche Einsatzzeiten sind vorgeschrieben?",
        answer:
          "Die vorgeschriebenen Einsatzzeiten hängen von der Betriebsgröße, der Branche und dem Gefährdungspotenzial ab. In der Regelbetreuung gelten je nach Betreuungsmodell Grundbetreuung und anlassbezogene Betreuung. Wir ermitteln den genauen Bedarf für Ihren Betrieb und stellen die normgerechte Betreuung sicher.",
      },
      {
        question: "Können wir als kleines Unternehmen die Unternehmerbetreuung nutzen?",
        answer:
          "Ja, Betriebe mit bis zu 10 Beschäftigten in bestimmten Branchen können die alternative bedarfsorientierte Betreuung (Unternehmermodell) nutzen. Hierfür muss der Unternehmer eine spezielle Ausbildung absolvieren. Wir informieren Sie gerne über die Voraussetzungen und begleiten Sie durch das Verfahren.",
      },
    ],
  },
  {
    title: "Schulungen & Fortbildungen",
    items: [
      {
        question: "Welche Schulungen bieten Sie an?",
        answer:
          "Wir bieten ein breites Spektrum an: Flurförderzeuge, Kran- und Hebezeugbedienung, Hubarbeitsbühnen, Sicherheitsbeauftragten-Schulungen, Regalprüfer-Ausbildung, EuP-Schulungen, Brandschutzhelfer, Ladungssicherung, Leitern & Tritte sowie individuelle Sicherheitsunterweisungen und Gesundheitstage.",
      },
      {
        question: "Kommen Sie auch zu uns in den Betrieb?",
        answer:
          "Ja, wir führen Schulungen bevorzugt direkt bei Ihnen vor Ort durch. So können wir die realen Arbeitsbedingungen einbeziehen und die Inhalte praxisnah auf Ihr Unternehmen abstimmen. Auf Wunsch bieten wir auch Online-Schulungen an.",
      },
      {
        question: "Wie viele Teilnehmer können an einer Schulung teilnehmen?",
        answer:
          "Das ist je nach Kurstyp unterschiedlich. Theoretische Unterweisungen können in größeren Gruppen stattfinden, während praktische Prüfungen (z. B. Flurförderzeuge) in kleineren Gruppen durchgeführt werden, um die Qualität zu gewährleisten. Sprechen Sie uns an – wir finden eine passende Lösung für Ihre Teilnehmerzahl.",
      },
      {
        question: "Erhalten die Teilnehmer ein Zertifikat?",
        answer:
          "Ja, alle Teilnehmer erhalten nach erfolgreichem Abschluss der Schulung ein offizielles Teilnahmezertifikat. Dieses dient als Nachweis der rechtssicheren Unterweisung und ist für Ihre Dokumentationspflichten wichtig.",
      },
      {
        question: "Wie lange im Voraus muss ich eine Schulung buchen?",
        answer:
          "Wir empfehlen eine Vorlaufzeit von 2–4 Wochen. In dringenden Fällen versuchen wir, auch kurzfristige Termine zu ermöglichen. Kontaktieren Sie uns einfach – wir finden gemeinsam einen passenden Termin.",
      },
      {
        question: "Wie läuft die Stornierung einer Buchung ab?",
        answer:
          "Eine Stornierung ist bis 14 Tage vor Kursbeginn kostenfrei möglich. Bei späteren Absagen oder Nichterscheinen werden 50 % der Kursgebühr in Rechnung gestellt. Ersatzteilnehmer können jederzeit ohne Mehrkosten benannt werden.",
      },
    ],
  },
  {
    title: "Betriebsmittel- & Geräteprüfungen",
    items: [
      {
        question: "Welche Geräte und Arbeitsmittel müssen geprüft werden?",
        answer:
          "Grundsätzlich müssen alle Arbeitsmittel vor der ersten Inbetriebnahme und regelmäßig wiederkehrend geprüft werden. Dazu gehören elektrische Betriebsmittel (DGUV Vorschrift 3), Leitern, Regale, Flurförderzeuge, Hebe- und Lastaufnahmeeinrichtungen und viele mehr. Wir erstellen eine individuelle Prüfliste für Ihren Betrieb.",
      },
      {
        question: "In welchen Abständen sind Prüfungen vorgeschrieben?",
        answer:
          "Die Prüfintervalle variieren je nach Art des Arbeitsmittels, Hersteller­vorgabe, Nutzungshäufigkeit und Gefährdungsbeurteilung. Elektrische Geräte werden i. d. R. jährlich geprüft. Wir unterstützen Sie dabei, rechtssichere Prüfintervalle festzulegen und die Dokumentation zu führen.",
      },
      {
        question: "Erhalten wir eine Dokumentation der Prüfergebnisse?",
        answer:
          "Ja, nach jeder Prüfung erhalten Sie eine vollständige Dokumentation aller geprüften Geräte mit Prüfergebnis, Prüfdatum und Prüfer. Diese Unterlagen sind für die gesetzliche Nachweispflicht zwingend erforderlich.",
      },
    ],
  },
  {
    title: "Brandschutz",
    items: [
      {
        question: "Welche Brandschutzpflichten hat mein Unternehmen?",
        answer:
          "Arbeitgeber sind verpflichtet, Brandschutzmaßnahmen in der Gefährdungsbeurteilung zu berücksichtigen, Brandschutzhelfer zu benennen und zu schulen (mind. 5 % der Belegschaft), Fluchtwege freizuhalten, Feuerlöscher bereitzustellen und regelmäßige Brandschutzunterweisungen durchzuführen.",
      },
      {
        question: "Wie viele Brandschutzhelfer brauche ich?",
        answer:
          "Gemäß ASR A2.2 sind in der Regel 5 % der Beschäftigten als Brandschutzhelfer auszubilden. Abhängig von der Brandgefährdung und den Arbeitsstättenverhältnissen kann ein höherer Anteil erforderlich sein. Wir ermitteln den genauen Bedarf für Ihr Unternehmen.",
      },
    ],
  },
];

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-4 text-left"
      >
        <span className="font-medium">{item.question}</span>
        <ChevronDown
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-muted-foreground">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <HelpCircle className="h-4 w-4" />
            Häufige Fragen
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Fragen &amp; Antworten
          </h1>
          <p className="text-lg text-muted-foreground">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere
            Leistungen. Nicht dabei? Kontaktieren Sie uns direkt.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="space-y-10">
            {faqData.map((category) => (
              <div key={category.title}>
                <h2 className="mb-4 text-xl font-bold text-foreground border-b pb-2">
                  {category.title}
                </h2>
                <div className="divide-y rounded-lg border bg-card px-4">
                  {category.items.map((item, index) => {
                    const key = `${category.title}-${index}`;
                    return (
                      <FAQAccordionItem
                        key={key}
                        item={item}
                        isOpen={!!openItems[key]}
                        onToggle={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
            <h3 className="mb-2 text-lg font-semibold">Ihre Frage ist nicht dabei?</h3>
            <p className="mb-4 text-muted-foreground">
              Kontaktieren Sie uns direkt – wir beantworten Ihre Fragen gerne persönlich.
            </p>
            <Link href="/kontakt">
              <span className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
