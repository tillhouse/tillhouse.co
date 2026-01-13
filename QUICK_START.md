# Quick Start Checklist - Tillhouse.co Build

## Pre-Flight Check ✅

Before starting with Cursor, complete these steps:

### 1. Find & Navigate to Your Repo
```bash
# Try these common paths (Windows):
cd Documents\GitHub\tillhouse.co
# or
cd Documents\tillhouse.co
# or
cd Projects\tillhouse.co

# Verify you're in the right place:
git status
# Should NOT show "fatal: not a git repository"
```

**✅ When this works, you're ready!**

---

### 2. Upload Build Files to Your Repo

Copy these three files to your repo directory:
- `CURSOR_BUILD_SPEC.md` (the complete specification)
- `CURSOR_PROMPTS.md` (prompts for each phase)
- `GIT_WORKFLOW.md` (git reference guide)

```bash
# Create a 'docs' folder in your repo (optional but organized):
mkdir docs
# Then move the files there, or keep them in root
```

---

### 3. Initial Commit (Optional)
Save the build docs before starting:
```bash
git add .
git commit -m "docs: Add Cursor build specification and workflow guides"
git push origin main
```

---

## Build Process

### Phase 1: Foundation (Estimated 1-2 hours)

**1. Open Cursor:**
- Open your tillhouse.co directory in Cursor
- Make sure you can see CURSOR_BUILD_SPEC.md in the sidebar

**2. Start Fresh:**
- You may need to initialize a Next.js project
- Option A: Let Cursor do it (paste Phase 1 prompt)
- Option B: Do it manually then let Cursor customize

**3. Paste the Phase 1 Prompt:**
- Open CURSOR_PROMPTS.md
- Copy the entire "Phase 1 - Foundation Setup" prompt
- Paste it into Cursor's chat
- Let Cursor work its magic

**4. Test Locally:**
```bash
npm run dev
```
- Open http://localhost:3000
- Should see basic site skeleton

**5. Save Your Progress:**
```bash
git add .
git commit -m "feat: Initial Next.js setup with navigation and basic structure"
git push origin main
```

---

### Phase 2: Core Pages (Estimated 2-4 hours)

**1. Paste Phase 2 Prompt:**
- Copy from CURSOR_PROMPTS.md
- Paste into Cursor
- Watch Cursor build your pages

**2. Review & Iterate:**
- Check each page: Home, Work, Services, About
- Ask Cursor for adjustments:
  - "Make the hero headline bigger"
  - "Add more spacing between sections"
  - "Change the accent color to forest green"

**3. Test Responsiveness:**
- Resize browser window
- Check mobile view (DevTools → Toggle device toolbar)

**4. Commit:**
```bash
git add .
git commit -m "feat: Build core pages with layouts and placeholder content"
git push origin main
```

---

### Phase 3: Content & Details (Estimated 3-5 hours)

**This is where you integrate YOUR content:**

**1. Gather Your Assets:**
- [ ] Marketing copy (DOCX)
- [ ] Professional headshots (JPG/PNG)
- [ ] Resume PDF
- [ ] Portfolio content from tillhouse.me

**2. Add Assets to Project:**
```bash
# Create directories if Cursor hasn't already:
mkdir -p public/images/headshots
mkdir -p public/images/projects
mkdir -p public/images/logos

# Copy your files there
# You can drag & drop in VS Code/Cursor
```

**3. Paste Phase 3 Prompt:**
- Let Cursor build the dynamic project pages
- Let Cursor create the AI Lab page
- Let Cursor build the contact form

**4. Replace Placeholder Content:**
Tell Cursor: "Here's my actual content for [section], please update the data file"

Example prompt:
```
"Update the projects.ts file with these real projects:

1. Ghostery - VP Product
   - Privacy-first browser extension with 10M+ users
   - Led product strategy, team of 8
   - [paste more details]

2. Pavilion Digital - Fractional VP Product
   - [paste details]

Please update with full descriptions, outcomes, and images."
```

**5. Test Everything:**
- Click through all pages
- Test all links
- Check image loading
- Test contact form

**6. Commit:**
```bash
git add .
git commit -m "content: Add real project data and professional assets"
git push origin main
```

---

### Phase 4: Polish (Estimated 2-3 hours)

**1. Paste Phase 4 Prompt:**
- Let Cursor add SEO meta tags
- Let Cursor optimize images
- Let Cursor add accessibility features

**2. Analytics Setup:**
- Sign up for Plausible Analytics
- Get your site ID
- Tell Cursor: "Add Plausible Analytics with site ID: tillhouse.co"

**3. Final Testing:**
- [ ] All pages load without errors
- [ ] Navigation works everywhere
- [ ] Mobile looks great
- [ ] Contact form submits
- [ ] Images are optimized
- [ ] No console errors

**4. Run Lighthouse:**
- Chrome DevTools → Lighthouse tab
- Run audit
- Should score 90+ on all metrics

**5. Final Commit:**
```bash
git add .
git commit -m "feat: Add SEO, analytics, and final polish"
git push origin main
```

---

### Phase 5: Deploy (Estimated 30 min - 1 hour)

**1. Push to GitHub:**
```bash
git checkout main
git push origin main
```

**2. Connect to Vercel:**
- Go to vercel.com
- Sign in with GitHub
- Click "New Project"
- Import tillhouse.co repository
- Click "Deploy"
- Wait 2-3 minutes

**3. Configure Domain:**
- Vercel Dashboard → Settings → Domains
- Add "tillhouse.co"
- Follow DNS instructions (update nameservers at your domain registrar)
- Add "tillhouse.me"
- Set redirect: tillhouse.me → tillhouse.co

**4. Wait for DNS:**
- DNS propagation takes 5 minutes to 48 hours
- Usually it's about 15-30 minutes
- Check status in Vercel dashboard

**5. Test Production Site:**
- Visit tillhouse.co
- Test on mobile device
- Share with a friend for feedback

---

## Post-Launch

### Week 1 Tasks:
- [ ] Monitor analytics
- [ ] Test contact form (send yourself a test)
- [ ] Check for any broken links
- [ ] Get feedback from 3-5 people
- [ ] Make minor adjustments

### Optional Enhancements:
- [ ] Add Google Search Console
- [ ] Set up custom 404 page
- [ ] Add more AI Lab projects
- [ ] Create case study deep-dives
- [ ] Add video introduction

---

## Troubleshooting Common Issues

### Cursor isn't responding well:
- Make sure CURSOR_BUILD_SPEC.md is in your project
- Reference it explicitly: "Based on CURSOR_BUILD_SPEC.md, please..."
- Be more specific in your prompts
- Break large requests into smaller ones

### Build errors:
- Ask Cursor: "I'm getting this error: [paste error]. Can you fix it?"
- Check Node.js version (should be 18+)
- Try: `rm -rf node_modules package-lock.json && npm install`

### Git issues:
- Refer to GIT_WORKFLOW.md
- Most common: not in the repo directory
- Solution: `cd` to your repo first

### Vercel deployment fails:
- Check build logs in Vercel dashboard
- Usually it's a missing dependency or build error
- Fix locally, commit, push again

### Domain not working:
- DNS takes time (up to 48 hours, usually 30 min)
- Double-check nameservers at your registrar
- Check Vercel domain settings

---

## Timeline Estimation

**Realistic Schedule (Part-Time):**
- Day 1: Phase 1 Foundation (1-2 hours)
- Day 2-3: Phase 2 Core Pages (2-4 hours)
- Day 4-6: Phase 3 Content Integration (3-5 hours)
- Day 7: Phase 4 Polish (2-3 hours)
- Day 8: Phase 5 Deploy (1 hour)
- Day 9-10: Testing & adjustments

**Total**: 9-15 hours of active work over 10-14 days

**Aggressive Schedule (Full-Time):**
- Day 1: Phases 1-2 (4-6 hours)
- Day 2: Phase 3 (4-6 hours)
- Day 3: Phases 4-5 + Deploy (3-4 hours)
- Day 4: Testing & polish

**Total**: 11-16 hours over 3-4 days

---

## Success Criteria

You're ready to launch when:
- [ ] All pages are complete and content-accurate
- [ ] Site is fully responsive (test on phone)
- [ ] Contact form works (you received a test submission)
- [ ] All images load properly
- [ ] Navigation works on all pages
- [ ] No console errors in browser
- [ ] Lighthouse score > 90
- [ ] Domain is connected and working
- [ ] Analytics are tracking
- [ ] You're proud to share it!

---

## Next Steps Right Now

1. **Navigate to your repo** (follow instructions at top)
2. **Copy these build docs** into your repo
3. **Open Cursor** in your repo directory
4. **Paste Phase 1 prompt** from CURSOR_PROMPTS.md
5. **Watch the magic happen** ✨

---

## Questions? Stuck?

**Most common issues:**
1. Not in the repo directory → Navigate with `cd`
2. Cursor not understanding → Reference CURSOR_BUILD_SPEC.md explicitly
3. Build errors → Ask Cursor to explain and fix
4. Git confusion → Check GIT_WORKFLOW.md

**Remember:** This is an iterative process. Don't expect perfection on the first try. Cursor is your pair programmer - keep asking it to refine and improve!

---

## Final Encouragement

You've got this! 🚀

This build is totally doable in 1-2 weeks. The key is to:
- Follow the phases in order
- Test frequently as you go
- Don't overthink it - iterate and improve
- Have fun with it!

Good luck, and congrats on building your new site!
