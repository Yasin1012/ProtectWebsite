import { Link } from "wouter";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import protectLogo from "@assets/image_1766691843589.png";

const services = [
  { label: "Arbeitssicherheit", href: "/leistungen/dguv-v2" },
  { label: "Arbeitsmittelprüfung", href: "/leistungen/betriebsmittelpruefung" },
  { label: "Aus- und Fortbildung", href: "/leistungen/fortbildung" },
  { label: "Brandschutz", href: "/leistungen/brandschutz" },
  { label: "Elektrische Prüfung", href: "/leistungen/elektrische-pruefung" },
];

const quickLinks = [
  { label: "Startseite", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Netzwerk", href: "/netzwerk" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img src={protectLogo} alt="Protect GmbH" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Ihr Partner für professionelle Arbeitssicherheit und Gesundheitsschutz.
              Seit über 20 Jahren Ihr Experte für sichere Arbeitsplätze.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Leistungen</h3>
            <nav className="flex flex-col gap-2">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid={`link-footer-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  data-testid={`link-footer-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Kontakt</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2" data-testid="text-footer-address">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Musterstraße 123<br />12345 Musterstadt</span>
              </div>
              <a href="tel:+4912345678900" className="flex items-center gap-2 transition-colors hover:text-foreground" data-testid="link-footer-phone">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+49 123 456 789 00</span>
              </a>
              <a href="mailto:info@asoplus.de" className="flex items-center gap-2 transition-colors hover:text-foreground" data-testid="link-footer-email">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@asoplus.de</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Protect Arbeitssicherheit & Gesundheitsschutz GmbH. Alle Rechte vorbehalten.
          </p>
          <nav className="flex flex-wrap items-center gap-4">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                data-testid={`link-footer-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          <span>by</span>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:text-foreground"
            data-testid="link-datafusion"
          >
            Datafusion-IT
          </a>
        </div>
      </div>
    </footer>
  );
}
