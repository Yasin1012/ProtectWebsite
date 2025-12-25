import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  showContactInfo?: boolean;
}

export function CTASection({ 
  title = "Bereit für mehr Sicherheit?",
  description = "Kontaktieren Sie uns für eine unverbindliche Beratung. Wir analysieren Ihre Anforderungen und erstellen ein maßgeschneidertes Angebot.",
  showContactInfo = true
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl" data-testid="text-cta-title">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
          {description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/kontakt" data-testid="link-cta-contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto"
              data-testid="button-cta-contact"
            >
              Jetzt Beratung anfragen
            </Button>
          </Link>
          {showContactInfo && (
            <a href="tel:+4912345678900" data-testid="link-cta-phone">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                data-testid="button-cta-phone"
              >
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </Button>
            </a>
          )}
        </div>
        {showContactInfo && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-primary-foreground/80 sm:flex-row sm:gap-8">
            <a href="tel:+4912345678900" className="flex items-center gap-2 transition-colors hover:text-primary-foreground" data-testid="link-cta-phone-info">
              <Phone className="h-4 w-4" />
              <span data-testid="text-phone-number">+49 123 456 789 00</span>
            </a>
            <a href="mailto:info@safetyfirst.de" className="flex items-center gap-2 transition-colors hover:text-primary-foreground" data-testid="link-cta-email">
              <Mail className="h-4 w-4" />
              <span data-testid="text-email">info@safetyfirst.de</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
