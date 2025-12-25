# Design Guidelines: Arbeitssicherheit B2B Website

## Design Approach

**System Selected:** Material Design with professional B2B adaptations
**Rationale:** Trust-focused, information-dense professional services requiring clarity, credibility, and compliance over creative flair.

## Typography System

**Primary Font:** Inter or Source Sans Pro (Google Fonts)
- H1: 48px/56px, weight 700 (hero headlines)
- H2: 36px/44px, weight 600 (section headers)
- H3: 24px/32px, weight 600 (subsections)
- Body: 16px/24px, weight 400 (primary text)
- Small: 14px/20px, weight 400 (captions, legal)

**Secondary Font:** System UI for forms and UI elements

## Layout & Spacing

**Spacing Scale:** Tailwind units of 4, 6, 8, 12, 16, 24
- Section padding: py-16 md:py-24
- Component spacing: gap-8 to gap-12
- Content max-width: max-w-6xl
- Text max-width: max-w-3xl

**Grid System:** 
- Desktop: 3-column for services, 2-column for team
- Tablet: 2-column
- Mobile: Single column, full stack

## Core Components

**Navigation:** Fixed header with logo left, main nav center, CTA button right. Hamburger menu on mobile. Background: solid with subtle shadow.

**Hero Section (Startseite):** 
- 70vh height
- Two-column layout (60/40 split): Headline + value prop left, professional safety image right
- Primary CTA: "Beratung anfragen"
- Trust indicators below (years experience, certifications, client count)

**Service Cards:**
- Card-based grid layout with subtle borders
- Icon top-left (use Font Awesome safety/industrial icons)
- Title (H3), description, "Mehr erfahren" link
- Hover: subtle shadow lift

**Trust Elements:**
- Certification badges horizontal row
- Client logos grid (grayscale, 6-8 logos)
- Statistical highlights (3-4 metrics in card format)

**Forms (Kontakt & Landing):**
- Single column, full-width inputs
- Labels above fields
- Clear validation states
- Large submit button
- Privacy checkbox with DSGVO text link

**Team Cards:**
- Photo top, name/title below
- Qualifications list
- Professional headshot style
- 3-column desktop, 2-column tablet

**Footer:**
- 4-column layout: Services overview, Quick links, Contact info, Legal
- Newsletter signup optional
- Social media icons if applicable

## Service Pages Structure

Each service page (DGUV V2, Betriebsmittelprüfung, etc.):
- Hero: Service name + brief description (50vh)
- Overview section: What it is, why it matters
- Legal requirements section: DGUV/regulatory context in clear boxes
- Benefits section: 3-4 key advantages in cards
- Process section: Step-by-step (numbered list or timeline)
- CTA section: "Jetzt beraten lassen"

## Landing Page

- Minimal navigation (logo + phone only)
- Headline + subheadline (centered)
- 3-5 key benefits (icon + text, vertical stack)
- Social proof (testimonial or metric)
- Primary form (prominent, above fold)
- Trust badges
- Single-minded focus on conversion

## Images Strategy

**Hero Images:** Professional workplace safety scenes - workers with PPE, industrial settings, safety equipment. High-quality, authentic (not stock-looking).

**Service Pages:** Specific to service (testing equipment, training sessions, fire safety equipment)

**Team Page:** Professional headshots, consistent style/background

**Trust Section:** Certification logos, partner logos

## Visual Rhythm

- Alternating section backgrounds: white, light gray (neutral-50)
- Consistent section padding maintains vertical flow
- Card-based information architecture
- Clear visual hierarchy through size/weight, not color variety
- Generous whitespace for professional feel

## Mobile Considerations

- Hamburger navigation
- Stacked layouts (no side-by-side on mobile)
- Touch-friendly buttons (min 44px height)
- Simplified hero (text-focused, image secondary)
- Collapsible sections for legal/detailed content

## Accessibility & Performance

- Semantic HTML5 structure
- Alt text for all images
- Form labels always visible
- Focus states clearly visible
- Lazy loading for images
- Minimal animations (subtle fades only)