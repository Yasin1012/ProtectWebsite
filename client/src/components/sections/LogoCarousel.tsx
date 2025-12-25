import rosenbergerLogo from "@assets/image_1766691204727.png";
import windbielLogo from "@assets/image_1766691211460.png";
import metisLogo from "@assets/image_1766691215671.png";
import alpaLogo from "@assets/image_1766691221131.png";
import negeleLogo from "@assets/image_1766691226461.png";
import haagLogo from "@assets/image_1766691231583.png";
import d2Logo from "@assets/image_1766691235273.png";

const logos = [
  { src: rosenbergerLogo, alt: "Rosenberger" },
  { src: windbielLogo, alt: "Windbiel Verpackungen GmbH" },
  { src: metisLogo, alt: "Metis Trainings- und Beratungszentrum" },
  { src: alpaLogo, alt: "Alpa" },
  { src: negeleLogo, alt: "Negele" },
  { src: haagLogo, alt: "Fussboden Haag" },
  { src: d2Logo, alt: "D2 Living" },
];

export function LogoCarousel() {
  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground" data-testid="text-clients-title">
          Vertrauen von führenden Unternehmen
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="logo-carousel-track flex items-center gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex h-16 w-40 shrink-0 items-center justify-center"
              data-testid={`img-client-logo-${index}`}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-full max-w-full object-contain grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex h-16 w-40 shrink-0 items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-full max-w-full object-contain grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
