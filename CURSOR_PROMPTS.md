# Cursor Master Prompt - Tillhouse.co Website

## Initial Build Command

Paste this into Cursor to start building:

---

**PROMPT START**

I need you to build a professional website for tillhouse.co based on the detailed specification in `CURSOR_BUILD_SPEC.md`.

This is a Next.js 14 + TypeScript + Tailwind CSS project for a fractional product executive's personal website.

**Phase 1 - Foundation Setup:**

1. Initialize a new Next.js 14 project with:
   - TypeScript
   - Tailwind CSS
   - App Router
   - ESLint
   - Use `create-next-app` with all these options pre-configured

2. Set up the basic file structure as specified in the spec:
   - Create all directories: `/app`, `/components`, `/data`, `/public/images`
   - Set up the root layout with navigation and footer
   - Create placeholder pages for all routes: home, work, ai-lab, services, about, resume

3. Configure Tailwind with a clean, professional design system:
   - Use Inter font from Google Fonts
   - Set up a color palette (navy blue accent: #1e3a8a)
   - Configure responsive breakpoints
   - Add custom spacing if needed

4. Create the core components:
   - `Nav.tsx` - Sticky navigation bar with logo and links
   - `Footer.tsx` - Simple footer with copyright and social links
   - `Button.tsx` - Reusable button component (primary/secondary variants)
   - `Section.tsx` - Reusable section wrapper with consistent padding

5. Make sure the site is:
   - Fully responsive (mobile-first)
   - Using semantic HTML
   - Following Next.js 14 best practices
   - Clean, minimal, professional aesthetic

**Key Requirements:**
- Desktop-first design, but fully mobile responsive
- Fast load times (use Next.js Image component)
- Clean URLs (no .html extensions)
- TypeScript throughout
- Tailwind for all styling (minimal custom CSS)

Please proceed with Phase 1 and let me know when you're done so we can move to Phase 2 (building the actual page content).

**PROMPT END**

---

## Phase 2 Prompt (Use After Phase 1 Complete)

**PROMPT START**

Great! Now let's build Phase 2 - Core Pages.

Based on `CURSOR_BUILD_SPEC.md`, please build out the following pages with full content and styling:

**1. Home Page (`/app/page.tsx`)**
- Hero section with headline, subheadline, and 2 CTA buttons
- "What I Do" section with 3 cards (Fractional, Advisory, Full-Time)
- Proof signals section (logo strip)
- Featured work section (3-4 project cards)
- Final CTA section

**2. Work Page (`/app/work/page.tsx`)**
- Grid layout of project cards (2-3 columns desktop, 1 mobile)
- Each card should have: image, title, company, description, link
- Use placeholder data for now (we'll replace later)

**3. Services Page (`/app/services/page.tsx`)**
- 3 service cards with expandable details
- Each service: title, who it's for, when it makes sense, typical engagement
- CTA at bottom to contact

**4. About Page (`/app/about/page.tsx`)**
- Personal introduction section
- Product philosophy section
- "Working with me" section
- Space for 2-3 headshot images

**Create placeholder data files:**
- `/data/projects.ts` - Array of project objects
- `/data/services.ts` - Array of service objects

**Design Requirements:**
- Follow the design system from Phase 1
- Ensure mobile responsiveness
- Use the Section component for consistent spacing
- Use the Button component for CTAs
- Clean, minimal aesthetic with good typography hierarchy

Let me know when Phase 2 is complete!

**PROMPT END**

---

## Phase 3 Prompt (Content Integration)

**PROMPT START**

Phase 3 - Let's integrate real content and build out dynamic project pages.

**1. Individual Project Pages (`/app/work/[slug]/page.tsx`)**
- Create dynamic route for project detail pages
- Layout should include:
  - Hero image
  - Context section
  - Role & scope
  - Key outcomes
  - Visual gallery
  - Technologies used
  - Next/Previous navigation

**2. Project Data Structure**
Expand `/data/projects.ts` with detailed project data including all fields needed for detail pages.

**3. AI Lab Page (`/app/ai-lab/page.tsx`)**
- Similar grid layout to Work page
- Each card: screenshot, title, description, tools, status badge, links
- Create `/data/aiLab.ts` for AI Lab projects

**4. Resume Page (`/app/resume/page.tsx`)**
- Section for interactive resume (iframe placeholder for now)
- Download PDF button
- Contact form component
- Direct contact info (email, LinkedIn)

**5. Contact Form Component (`/components/ContactForm.tsx`)**
- Form fields: Name, Email, Company (optional), Message
- Client-side validation
- Web3Forms integration (we'll add the key later)
- Success/error states
- Styled to match design system

Make sure all pages are fully responsive and follow the design system!

**PROMPT END**

---

## Phase 4 Prompt (Polish & SEO)

**PROMPT START**

Final phase - Let's polish and optimize for production!

**1. SEO Optimization**
- Add proper meta tags to all pages (in each page.tsx)
- Include Open Graph tags
- Twitter card tags
- Use Next.js Metadata API
- Create proper page titles and descriptions

**2. Image Optimization**
- Ensure all images use next/image component
- Add proper alt text
- Optimize image sizes

**3. Accessibility**
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements

**4. Performance**
- Lazy load images below the fold
- Optimize font loading
- Minimize JavaScript bundle size

**5. Final Polish**
- Hover states on all interactive elements
- Smooth scrolling
- Loading states where appropriate
- 404 page

**6. Analytics Setup**
- Add Plausible Analytics script to layout.tsx
- Track key events (CTA clicks, form submissions)

Please implement all of the above and we'll be ready to deploy!

**PROMPT END**

---

## Quick Iterative Prompts

Use these for specific adjustments as you go:

### Styling Adjustments
```
"Can you adjust the spacing on the home page hero section? 
Make the headline larger and add more vertical padding."
```

### Component Tweaks
```
"The navigation bar should be sticky at the top and have a 
subtle shadow when scrolling. Can you update Nav.tsx?"
```

### Responsive Issues
```
"The project cards are breaking on mobile. Can you make them 
full-width on screens under 768px?"
```

### Content Updates
```
"Can you update the services data to include [specific content]? 
Here's the new copy: [paste copy]"
```

### Color/Design Changes
```
"Let's try a different accent color - use forest green (#065f46) 
instead of navy blue throughout the site."
```

---

## Tips for Working with Cursor

1. **Be Specific**: The more specific your prompt, the better the output
2. **Iterate**: Don't expect perfection on first try - refine as needed
3. **Reference the Spec**: Always point Cursor to CURSOR_BUILD_SPEC.md
4. **Test Frequently**: Run the dev server and check your changes
5. **Ask Questions**: If something doesn't work, ask Cursor to explain
6. **Save Context**: Keep the chat going to maintain context
7. **Use Comments**: Ask Cursor to add comments for complex code

---

## Common Issues & Solutions

**Issue**: "Module not found" errors
**Solution**: Ask Cursor to check package.json and install dependencies

**Issue**: Tailwind classes not working
**Solution**: Ask Cursor to check tailwind.config.ts and globals.css

**Issue**: Images not loading
**Solution**: Verify images are in /public/images and paths are correct

**Issue**: Routing not working
**Solution**: Check that files are in correct /app directory structure

**Issue**: Build errors
**Solution**: Ask Cursor to explain the error and suggest a fix

---

## Testing Checklist (Before Launch)

- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Links open in correct target (internal vs external)
- [ ] Images load and are optimized
- [ ] Contact form submits successfully
- [ ] Mobile responsive (test on actual device)
- [ ] Cross-browser (Chrome, Safari, Firefox)
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Meta tags present on all pages
- [ ] Analytics tracking working

---

## Deployment Checklist

- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Configure tillhouse.co domain
- [ ] Add tillhouse.me redirect
- [ ] Test production build
- [ ] Verify SSL certificate
- [ ] Test analytics
- [ ] Announce launch! 🚀
