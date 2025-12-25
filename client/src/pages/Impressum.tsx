import { Layout } from "@/components/layout/Layout";

export default function Impressum() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="mb-8 text-4xl font-bold" data-testid="text-impressum-title">Impressum</h1>
          
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-4">
              Protect Arbeitssicherheit & Gesundheitsschutz GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Vertreten durch</h2>
            <p className="mb-4">
              Geschäftsführer: Dr. Michael Weber
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
            <p className="mb-4">
              Telefon: +49 123 456 789 00<br />
              E-Mail: info@asoplus.de
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Registereintrag</h2>
            <p className="mb-4">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE123456789
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="mb-4">
              Berufsbezeichnung: Fachkraft für Arbeitssicherheit<br />
              Zuständige Kammer: Industrie- und Handelskammer Musterstadt<br />
              Verliehen in: Deutschland
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Berufshaftpflichtversicherung</h2>
            <p className="mb-4">
              Name und Sitz des Versicherers:<br />
              Muster Versicherung AG<br />
              Versicherungsstraße 1<br />
              12345 Versicherungsstadt
            </p>
            <p className="mb-4">
              Geltungsraum der Versicherung: Deutschland
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-4">
              Dr. Michael Weber<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) 
              bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p className="mb-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mb-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte 
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mb-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
              den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
              ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese 
              Inhalte umgehend entfernen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden 
              zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige 
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
              Gebrauch gestattet.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
