import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="mx-auto max-w-xl px-4 text-center">
          <p className="mb-2 text-8xl font-bold text-primary/20">404</p>
          <h1 className="mb-3 text-3xl font-bold tracking-tight">
            Seite nicht gefunden
          </h1>
          <p className="mb-8 text-muted-foreground">
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
            Bitte nutzen Sie die Navigation oder kehren Sie zur Startseite zurück.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button size="lg">
                <Home className="mr-2 h-4 w-4" />
                Zur Startseite
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/leistungen" className="hover:text-foreground hover:underline">
              Leistungen
            </Link>
            <Link href="/leistungen/fortbildung" className="hover:text-foreground hover:underline">
              Schulungen
            </Link>
            <Link href="/team" className="hover:text-foreground hover:underline">
              Team
            </Link>
            <Link href="/netzwerk" className="hover:text-foreground hover:underline">
              Netzwerk
            </Link>
            <Link href="/faq" className="hover:text-foreground hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
