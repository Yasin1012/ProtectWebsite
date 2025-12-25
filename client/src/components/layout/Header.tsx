import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import protectLogo from "@assets/image_1766691843589.png";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Team", href: "/team" },
  { label: "Netzwerk", href: "/netzwerk" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <img src={protectLogo} alt="Protect GmbH" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" data-testid="nav-desktop">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>
              <Button
                variant={location === item.href ? "secondary" : "ghost"}
                size="sm"
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+4912345678900" className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="link-header-phone">
            <Phone className="h-4 w-4" />
            <span data-testid="text-header-phone">+49 123 456 789 00</span>
          </a>
          <Link href="/kontakt" data-testid="link-header-cta">
            <Button data-testid="button-cta-header">
              Beratung anfragen
            </Button>
          </Link>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center justify-between">
                <img src={protectLogo} alt="Protect GmbH" className="h-8 w-auto" />
              </div>
              <nav className="flex flex-col gap-2" data-testid="nav-mobile">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} data-testid={`link-mobile-${item.label.toLowerCase()}`}>
                    <Button
                      variant={location === item.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      data-testid={`button-mobile-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
              <div className="border-t pt-4">
                <a href="tel:+4912345678900" className="mb-4 flex items-center gap-2 text-sm text-muted-foreground" data-testid="link-mobile-phone">
                  <Phone className="h-4 w-4" />
                  <span data-testid="text-mobile-phone">+49 123 456 789 00</span>
                </a>
                <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-cta">
                  <Button className="w-full" data-testid="button-cta-mobile">
                    Beratung anfragen
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
