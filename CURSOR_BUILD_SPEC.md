# Tillhouse.co - Cursor Build Specification

## Project Overview
**Website**: tillhouse.co (+ tillhouse.me redirect)  
**Purpose**: Professional website for Jeremy Tillman - fractional product executive  
**Target Audience**: Startup founders, CEOs, VCs (Seed–Series C)  
**Timeline**: Launch in 1-2 weeks  
**Primary Goal**: Drive qualified inbound for fractional engagements and full-time roles

---

## Tech Stack

### Core Framework
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** for styling
- **React 18+**

### Deployment & Infrastructure
- **Hosting**: Vercel
- **Domain**: tillhouse.co (already owned)
- **Repository**: GitHub (already initialized)
- **Analytics**: Plausible Analytics or Simple Analytics (privacy-first)

### Additional Tools
- **Forms**: Web3Forms or Formspree (for contact form)
- **Icons**: Lucide React or Heroicons
- **Fonts**: Inter (body) + system font fallback
- **Image Optimization**: Next.js Image component

---

## Site Architecture & Pages

### Navigation Structure
```
Home
├── Work (Portfolio)
│   └── [Individual Project Pages]
├── AI Lab
├── Services
├── About
└── Resume / Contact
```

---

## Detailed Page Specifications

### 1. Home Page (`/`)
**Purpose**: Orient, qualify, and route visitors in 60-90 seconds

**Above the Fold**:
- **Hero Headline**: "AI-native product leadership for startups building what's next"
- **Subheadline**: "Fractional and full-time product executive with deep experience in zero-to-one execution, startup incubation, and AI-driven product development"
- **Primary CTA Button**: "Work with me" → /services
- **Secondary CTA Button**: "View my work" → /work

**Sections (scroll order)**:
1. **Hero Section** (above the fold)
2. **What I Do** (3 cards):
   - Fractional Product Leadership
   - Advisory & Coaching  
   - Full-Time Executive Roles
3. **Proof Signals** (logo strip):
   - Ghostery, Pavilion, Innermap, Moonfoot, 25m
4. **Featured Work** (3-4 cards):
   - High-impact projects with images
   - Brief description + link to detail page
5. **CTA Section** (repeat conversion opportunity)

**Design Notes**:
- Desktop-first, mobile-responsive
- Clean, minimal aesthetic
- Muted color palette with high contrast
- Professional photography
- Subtle animations (fade-in on scroll)

---

### 2. Work Page (`/work`)
**Purpose**: Establish credibility through shipped products

**Layout**: Grid of project cards (2-3 columns on desktop, 1 on mobile)

**Per-Project Card**:
- Hero image/screenshot
- Project name
- Company name
- 1-2 sentence description
- Link to detail page

**Projects to Include**:
- Ghostery (portfolio overview)
- Pavilion Digital
- BODS
- Innermap.ai
- Moonfoot Labs (AuthMonster, Icarus Lens)
- Select 25m projects (public work only)

**Individual Project Pages** (`/work/[slug]`):
- Hero image
- Context: Product stage, company, timeline
- Role & scope: "What I did"
- Key decisions & outcomes
- Visual gallery (screenshots, mocks)
- Technologies used
- Results/metrics (if available)
- Next/Previous project navigation

---

### 3. AI Lab Page (`/ai-lab`)
**Purpose**: Demonstrate hands-on AI fluency through experiments

**Opening Copy**: "An open workbench of AI-native products, prototypes, and experiments"

**Layout**: Card grid similar to Work page

**Per-Project Card**:
- Screenshot/preview
- Project name
- Brief description (1 sentence)
- Tools used (badges: Claude, Cursor, Lovable, Replit, etc.)
- Status badge (Live, Prototype, Experiment)
- Links: Demo / GitHub / Artifact

**Content Types**:
- Vibecoded apps (Lovable, Replit)
- AI utilities built with Claude/Cursor
- Experimental prototypes
- Code snippets/tools

**Optional Feature**: Filter by tool/technology

---

### 4. Services Page (`/services`)
**Purpose**: Help potential clients self-qualify

**Layout**: 3 service cards with expandable details

**Services**:

1. **Fractional Product Leadership**
   - Who it's for: Early-stage startups, product gaps
   - When it makes sense: Need exec-level product without FT hire
   - Typical engagement: 2-3 days/week, 3-6 month commitments
   - What's included: Strategy, team leadership, execution

2. **Advisory & Coaching**
   - Who it's for: Product leaders, founders
   - When it makes sense: Specific challenge, sounding board
   - Typical engagement: Monthly retainer or project-based
   - What's included: 1:1 coaching, strategic input, async support

3. **Interim / Full-Time Roles**
   - Who it's for: Series A-C startups
   - When it makes sense: Building product org, scaling 0→1
   - Typical engagement: Head/VP Product, CPO
   - What's included: Full ownership of product, eng, design, growth

**CTA**: "Let's talk about your needs" → Contact form

**Design Note**: No pricing displayed (custom/inquiry-based)

---

### 5. About Page (`/about`)
**Purpose**: Humanize and build trust

**Content Structure**:
1. **Personal Introduction** (2-3 paragraphs)
   - Career narrative arc
   - Why product/AI
   - Current focus

2. **Product Philosophy** (3-4 principles)
   - How Jeremy thinks about building products
   - Leadership style
   - Team dynamics

3. **Working With Me** (practical info)
   - Communication style
   - Typical process
   - What to expect

4. **Personal Details** (humanizing)
   - Location
   - Interests outside work
   - Optional: Photo

**Visuals**: 2-3 professional headshots throughout page

---

### 6. Resume / Contact Page (`/resume`)
**Purpose**: Conversion hub + credential validation

**Sections**:

1. **Interactive Resume** (embedded):
   - Use existing Claude artifact (iframe or embed)
   - Option to view full-screen

2. **Download Resume**:
   - Link to PDF version (`/resume.pdf` in public folder)

3. **Contact Form**:
   - Name (required)
   - Email (required)
   - Company (optional)
   - Message (required)
   - Submit → Email notification

4. **Direct Contact**:
   - Email: [your email]
   - LinkedIn: [profile URL]
   - Optional: Calendly link

**Design Note**: Form should feel low-friction but professional

---

## Design System

### Typography
- **Headings**: System font stack or Inter (Bold/Semibold)
- **Body**: Inter (Regular/Medium)
- **Monospace**: For code snippets (JetBrains Mono or SF Mono)

**Scale**:
- H1: 3rem (48px)
- H2: 2.25rem (36px)
- H3: 1.5rem (24px)
- Body: 1rem (16px)

### Color Palette
**Base**:
- Background: White (#FFFFFF)
- Text: Near-black (#1a1a1a)
- Gray: #6b7280

**Accent** (choose one):
- Option 1: Deep navy (#1e3a8a)
- Option 2: Forest green (#065f46)
- Option 3: Charcoal (#374151)

**Usage**:
- Primary CTA buttons: Accent color
- Links: Accent color with underline on hover
- Hover states: 10% darker accent

### Spacing
Use Tailwind's spacing scale (4px base unit)
- Section padding: py-16 or py-24
- Container max-width: max-w-6xl
- Card gap: gap-8

### Components

**Navigation Bar**:
- Fixed top or sticky
- Logo/Name left
- Nav links right
- Hamburger menu on mobile
- Height: 64px

**Footer**:
- Copyright
- Social links (LinkedIn, GitHub, Email)
- Quick links to main pages
- Simple, minimal design

**Button Styles**:
- Primary: Solid accent color, white text, rounded-md
- Secondary: Outline, accent border, hover fill
- Sizes: sm, md, lg

**Card Component**:
- White background (or subtle gray)
- Border: 1px solid gray-200
- Rounded corners (rounded-lg)
- Hover: subtle shadow lift
- Padding: p-6

---

## Content Management

### Data Structure
Store content in TypeScript files for easy updates:

**File**: `/data/projects.ts`
```typescript
export const projects = [
  {
    slug: 'ghostery',
    title: 'Ghostery',
    company: 'Ghostery',
    description: 'Privacy-first browser extension...',
    role: 'VP Product',
    image: '/images/projects/ghostery.png',
    technologies: ['React', 'TypeScript', 'Chrome APIs'],
    link: 'https://ghostery.com',
    featured: true,
    content: {
      context: '...',
      role: '...',
      outcomes: ['...'],
      visuals: ['...']
    }
  },
  // ... more projects
];
```

**File**: `/data/aiLab.ts`
```typescript
export const aiLabProjects = [
  {
    slug: 'auth-monster',
    title: 'AuthMonster',
    description: '...',
    tools: ['Lovable', 'Claude'],
    status: 'Live',
    demoUrl: '...',
    githubUrl: '...',
    image: '...'
  },
  // ... more experiments
];
```

**File**: `/data/services.ts`
```typescript
export const services = [
  {
    title: 'Fractional Product Leadership',
    icon: '...',
    whoFor: '...',
    whenItMakesSense: '...',
    engagement: '...',
    included: ['...']
  },
  // ... more services
];
```

---

## File Structure

```
tillhouse.co/
├── app/
│   ├── layout.tsx                 # Root layout (nav, footer)
│   ├── page.tsx                   # Home page
│   ├── work/
│   │   ├── page.tsx               # Work grid
│   │   └── [slug]/
│   │       └── page.tsx           # Individual project pages
│   ├── ai-lab/
│   │   └── page.tsx               # AI Lab showcase
│   ├── services/
│   │   └── page.tsx               # Services/offerings
│   ├── about/
│   │   └── page.tsx               # About page
│   ├── resume/
│   │   └── page.tsx               # Resume + contact
│   └── globals.css                # Global styles + Tailwind
├── components/
│   ├── Nav.tsx                    # Navigation bar
│   ├── Footer.tsx                 # Site footer
│   ├── ProjectCard.tsx            # Reusable project card
│   ├── ServiceCard.tsx            # Service offering card
│   ├── ContactForm.tsx            # Contact form component
│   ├── Button.tsx                 # Reusable button component
│   └── Section.tsx                # Reusable section wrapper
├── data/
│   ├── projects.ts                # Project data
│   ├── aiLab.ts                   # AI Lab experiments
│   └── services.ts                # Service offerings
├── public/
│   ├── images/
│   │   ├── headshots/             # Professional photos
│   │   ├── projects/              # Project screenshots
│   │   └── logos/                 # Company logos
│   ├── resume.pdf                 # Downloadable resume
│   └── favicon.ico                # Site favicon
├── lib/
│   └── utils.ts                   # Helper functions
├── tailwind.config.ts             # Tailwind configuration
├── next.config.js                 # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## Implementation Phases

### Phase 1: Foundation (Day 1)
**Goal**: Get basic structure running

- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up basic routing structure
- [ ] Create root layout with navigation
- [ ] Deploy to Vercel (connect GitHub)
- [ ] Configure tillhouse.co domain

**Deliverable**: Live skeleton site

---

### Phase 2: Core Pages (Days 2-3)
**Goal**: Build main content pages

- [ ] Home page (all sections)
- [ ] Work page (grid layout)
- [ ] About page
- [ ] Services page
- [ ] Basic responsive design

**Deliverable**: 80% complete site structure

---

### Phase 3: Content Integration (Days 3-4)
**Goal**: Add real content and assets

- [ ] Import marketing copy (from DOCX)
- [ ] Add professional headshots
- [ ] Pull portfolio items from tillhouse.me
- [ ] Create project detail pages
- [ ] Add PDF resume
- [ ] Integrate interactive resume

**Deliverable**: Content-complete site

---

### Phase 4: AI Lab & Dynamic Features (Days 4-5)
**Goal**: Showcase AI work and add interactivity

- [ ] AI Lab page layout
- [ ] Add AI Lab projects
- [ ] Contact form (Web3Forms integration)
- [ ] Form validation and submission

**Deliverable**: Full feature set complete

---

### Phase 5: Polish & Launch (Days 5-7)
**Goal**: Production-ready site

- [ ] SEO optimization (meta tags, OG images)
- [ ] Performance optimization (images, fonts)
- [ ] Analytics integration (Plausible)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness check
- [ ] Accessibility review (WCAG)
- [ ] Final content review
- [ ] Setup tillhouse.me → tillhouse.co redirect

**Deliverable**: Production launch

---

## SEO Requirements

### Meta Tags (All Pages)
- Title: Unique per page, 50-60 characters
- Description: Unique per page, 150-160 characters
- OG tags (image, title, description)
- Twitter card tags

### Homepage Meta Example
```html
<title>Jeremy Tillman | AI-Native Product Leadership</title>
<meta name="description" content="Fractional and full-time product executive helping startups build, ship, and scale AI-native products." />
```

### URL Structure
- Clean URLs (no .html)
- Lowercase, hyphenated slugs
- `/work/project-name` not `/work?id=123`

### Performance Targets
- Lighthouse score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

---

## Analytics & Tracking

**Tool**: Plausible Analytics (privacy-first, GDPR-compliant)

**Events to Track**:
- Page views (automatic)
- CTA clicks ("Work with me", "View my work")
- Contact form submissions
- Resume downloads
- External link clicks (AI Lab projects)

**Implementation**: Add Plausible script to `layout.tsx`

---

## Future Enhancements (Post-Launch)

**Not in V1, but consider later**:
- Blog/writing section
- Case study deep-dives with metrics
- Video introductions
- Client testimonials
- Newsletter signup
- Dark mode toggle

---

## Success Criteria

### Qualitative
- Site clearly communicates Jeremy's value proposition
- Easy to navigate and find relevant info
- Professional, modern aesthetic
- Loads fast on all devices
- Mobile experience is excellent

### Quantitative
- Launch within 2 weeks ✅
- Lighthouse score > 90
- All pages responsive
- Contact form working
- Domain properly configured

### Business Outcomes (Post-Launch)
- Qualified inbound inquiries increase
- Recruiters/founders reference site content
- Reduced need for resume walkthroughs
- Improved signal-to-noise in outreach

---

## Key Principles for Cursor

When building this site, prioritize:

1. **Simplicity**: Clean code, minimal dependencies
2. **Speed**: Fast load times, optimized images
3. **Maintainability**: Easy to update content without code changes
4. **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
5. **Responsiveness**: Mobile-first approach
6. **SEO**: Proper meta tags, semantic structure
7. **Consistency**: Design system followed throughout

---

## Existing Assets to Integrate

1. **Marketing Copy**: Available in DOCX format
2. **Photos**: High-res and web-res headshots ready
3. **Resume**: PDF version + Claude artifact (interactive)
4. **Portfolio**: Content from tillhouse.me to migrate

---

## Contact Form Specification

**Provider**: Web3Forms (free, no backend needed)

**Fields**:
- Name (text, required)
- Email (email, required)
- Company (text, optional)
- Message (textarea, required, min 20 chars)
- Submit button

**Validation**:
- Client-side validation (required fields, email format)
- Error messages below fields
- Success message after submission
- Clear form after successful submit

**Styling**:
- Match site design system
- Clear labels above inputs
- Placeholder text for guidance
- Focus states on inputs
- Disabled state while submitting

**Setup**: Register at web3forms.com, get access key, add to env variables

---

## Domain Configuration

**Primary Domain**: tillhouse.co  
**Secondary Domain**: tillhouse.me (redirect to tillhouse.co)

**Vercel Setup**:
1. Add tillhouse.co to Vercel project
2. Configure DNS (provided by Vercel)
3. Enable automatic HTTPS
4. Add tillhouse.me domain
5. Set up 301 redirect: tillhouse.me → tillhouse.co

---

## Environment Variables

Create `.env.local` file:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=tillhouse.co
```

Add `.env.local` to `.gitignore` (should be default)

---

## Git Workflow

**Branching Strategy**:
- `main` branch → production (Vercel auto-deploys)
- `dev` branch → development/testing
- Feature branches for major changes

**Commit Convention**:
- `feat: Add home page hero section`
- `fix: Correct mobile nav behavior`
- `content: Update project descriptions`
- `style: Adjust spacing on services page`

**Deployment**:
- Push to `main` → auto-deploy to production
- Preview deployments on PRs

---

## Cursor-Specific Instructions

**When generating code**:
1. Use TypeScript throughout
2. Use Tailwind classes (no custom CSS unless necessary)
3. Create reusable components
4. Follow Next.js 14 App Router conventions
5. Optimize images with next/image
6. Use semantic HTML (header, nav, main, section, article)
7. Add comments for complex logic
8. Ensure responsive design (test at 320px, 768px, 1280px)

**Component Structure**:
```typescript
// Always export default for page components
export default function PageName() {
  return (
    <main className="...">
      {/* Page content */}
    </main>
  );
}

// Use named exports for reusable components
export function ComponentName({ prop1, prop2 }: Props) {
  return (
    <div className="...">
      {/* Component content */}
    </div>
  );
}
```

**Data Fetching**:
- Use static data from `/data/*.ts` files
- No external API calls needed for V1
- Keep data co-located with components when possible

---

## End of Specification

This document serves as the complete blueprint for building tillhouse.co. Refer to it throughout development to ensure consistency and completeness.
