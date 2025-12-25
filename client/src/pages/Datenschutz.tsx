import { Layout } from "@/components/layout/Layout";

export default function Datenschutz() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="mb-8 text-4xl font-bold" data-testid="text-datenschutz-title">Datenschutzerklärung</h1>
          
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme 
              erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem 
              oder Uhrzeit des Seitenaufrufs).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hosting</h2>
            <p className="mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
              Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei 
              kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
              Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über 
              eine Website generiert werden, handeln.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-4">
              SafetyFirst GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Telefon: +49 123 456 789 00<br />
              E-Mail: info@safetyfirst.de
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen 
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="mb-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns 
              zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck 
              für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere 
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Ihre Rechte</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Recht auf Auskunft</h3>
            <p className="mb-4">
              Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Recht auf Berichtigung</h3>
            <p className="mb-4">
              Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung 
              unvollständiger personenbezogener Daten zu verlangen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Recht auf Löschung</h3>
            <p className="mb-4">
              Sie haben das Recht, unter den in Art. 17 DSGVO genannten Voraussetzungen die 
              Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Sie haben das Recht, unter den in Art. 18 DSGVO genannten Voraussetzungen die 
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in 
              Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten 
              in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Widerspruchsrecht</h3>
            <p className="mb-4">
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
              jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Beschwerderecht bei der Aufsichtsbehörde</h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
              einer Aufsichtsbehörde zu.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
