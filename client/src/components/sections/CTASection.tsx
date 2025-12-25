import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, ArrowRight } from "lucide-react";

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
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <CardContent className="p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl" data-testid="text-cta-title">
              {title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/kontakt" data-testid="link-cta-contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  data-testid="button-cta-contact"
                >
                  Jetzt Beratung anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {showContactInfo && (
                <a href="tel:+4912345678900" data-testid="link-cta-phone">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto"
                    data-testid="button-cta-phone"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Anrufen
                  </Button>
                </a>
              )}
            </div>
            {showContactInfo && (
              <div className="mt-8 flex flex-col items-center justify-center gap-4 text-muted-foreground sm:flex-row sm:gap-8">
                <a href="tel:+4912345678900" className="flex items-center gap-2 transition-colors hover:text-foreground" data-testid="link-cta-phone-info">
                  <Phone className="h-4 w-4" />
                  <span data-testid="text-phone-number">+49 123 456 789 00</span>
                </a>
                <a href="mailto:info@asoplus.de" className="flex items-center gap-2 transition-colors hover:text-foreground" data-testid="link-cta-email">
                  <Mail className="h-4 w-4" />
                  <span data-testid="text-email">info@asoplus.de</span>
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
