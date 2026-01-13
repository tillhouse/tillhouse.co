# Git Workflow Guide - Tillhouse.co

## Initial Setup (Do This First!)

### 1. Navigate to Your Repo
```bash
# Find your repo (try these paths):
cd Documents/GitHub/tillhouse.co
# or
cd Documents/tillhouse.co
# or wherever you created it

# Verify you're in the right place:
git status
# Should show "On branch main" or similar (not an error)
```

### 2. Check Current Status
```bash
# See what branch you're on and any changes
git status

# See your remote connection
git remote -v
# Should show your GitHub repo URL
```

### 3. Verify Connection to GitHub
```bash
# Make sure you're connected to the right repo
git remote -v
# Should output something like:
# origin  https://github.com/your-username/tillhouse.co.git (fetch)
# origin  https://github.com/your-username/tillhouse.co.git (push)
```

---

## Daily Workflow

### Starting Your Work Session

**1. Make sure you're on the main branch:**
```bash
git checkout main
```

**2. Pull latest changes (if any):**
```bash
git pull origin main
```

**3. Create a new branch for your work:**
```bash
# For adding a feature:
git checkout -b feature/home-page

# For fixing something:
git checkout -b fix/navigation-mobile

# For content updates:
git checkout -b content/add-projects
```

---

## Making Changes with Cursor

### 1. Let Cursor Do Its Thing
- Work in Cursor as normal
- Cursor will create/modify files
- Don't worry about git while Cursor is working

### 2. Check What Changed
After Cursor makes changes, check what's new:
```bash
git status
# Shows all modified/new files in red
```

### 3. Review Changes (Optional but Recommended)
```bash
git diff
# Shows exactly what changed in files
# Press 'q' to exit the diff view
```

---

## Saving Your Work (Committing)

### 1. Stage Your Changes
Add everything Cursor created/modified:
```bash
git add .
# The dot (.) means "add everything"
```

Or add specific files:
```bash
git add app/page.tsx components/Nav.tsx
```

### 2. Commit with a Good Message
```bash
git commit -m "feat: Add home page hero section"

# Other examples:
git commit -m "feat: Create navigation component"
git commit -m "fix: Correct mobile responsive layout"
git commit -m "content: Add project descriptions"
git commit -m "style: Update color scheme"
git commit -m "chore: Install dependencies"
```

**Commit Message Format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `content:` - Content updates
- `style:` - Visual/design changes
- `chore:` - Maintenance (dependencies, config)
- `docs:` - Documentation

### 3. Push to GitHub
```bash
# First time pushing this branch:
git push -u origin feature/home-page

# After that, just:
git push
```

---

## Merging to Main (Production)

### Option A: Direct Merge (Simple, for solo work)

**1. Switch to main branch:**
```bash
git checkout main
```

**2. Merge your feature branch:**
```bash
git merge feature/home-page
```

**3. Push to GitHub (triggers Vercel deploy):**
```bash
git push origin main
```

**4. Delete the feature branch (cleanup):**
```bash
git branch -d feature/home-page
```

---

### Option B: Pull Request (Recommended, more careful)

**1. Push your feature branch:**
```bash
git push -u origin feature/home-page
```

**2. Go to GitHub.com:**
- Navigate to your repo
- Click "Pull requests" tab
- Click "New pull request"
- Select your branch
- Review changes
- Click "Create pull request"

**3. Merge on GitHub:**
- Review the changes one more time
- Click "Merge pull request"
- Click "Confirm merge"
- Vercel will auto-deploy from main

**4. Update local main branch:**
```bash
git checkout main
git pull origin main
```

---

## Common Scenarios

### Scenario 1: Quick Fix on Main
```bash
# Switch to main
git checkout main

# Make quick changes in Cursor

# Add and commit
git add .
git commit -m "fix: Correct typo on home page"

# Push (triggers deploy)
git push origin main
```

### Scenario 2: Multiple Changes Over Days
```bash
# Day 1: Start work
git checkout -b feature/services-page
# Work in Cursor
git add .
git commit -m "feat: Start services page layout"
git push -u origin feature/services-page

# Day 2: Continue work
git checkout feature/services-page
# Work more in Cursor
git add .
git commit -m "feat: Add service cards"
git push

# Day 3: Finish and merge
git checkout feature/services-page
# Final changes in Cursor
git add .
git commit -m "feat: Complete services page"
git push

# Merge to main
git checkout main
git merge feature/services-page
git push origin main
```

### Scenario 3: Save Progress Without Deploying
```bash
# Create a dev branch
git checkout -b dev

# Work in Cursor

# Commit to dev
git add .
git commit -m "wip: Experimenting with layout"
git push -u origin dev

# This won't trigger production deploy
# Only pushing to 'main' deploys to production
```

---

## Checking Your Work

### See All Branches
```bash
git branch
# Shows all local branches
# * indicates current branch
```

### See Recent Commits
```bash
git log --oneline -10
# Shows last 10 commits
```

### See What's Changed Since Last Commit
```bash
git status
# Shows modified files

git diff
# Shows exact changes
```

---

## Fixing Mistakes

### Undo Changes (Before Committing)
```bash
# Undo changes to a specific file:
git checkout -- app/page.tsx

# Undo ALL changes (be careful!):
git reset --hard
```

### Undo Last Commit (Before Pushing)
```bash
# Keep the changes, just undo the commit:
git reset --soft HEAD~1

# Undo the commit AND the changes:
git reset --hard HEAD~1
```

### Undo After Pushing (Advanced)
```bash
# Revert the last commit with a new commit:
git revert HEAD
git push origin main
```

---

## Best Practices

### ✅ DO:
- Commit often (after each logical change)
- Write clear commit messages
- Pull before starting new work
- Use branches for bigger changes
- Test locally before merging to main

### ❌ DON'T:
- Commit broken code to main
- Push sensitive info (API keys, passwords)
- Force push to main (`git push -f`)
- Work directly on main for big changes

---

## Quick Reference Commands

```bash
# Status & Info
git status                    # What's changed?
git log --oneline -5          # Recent commits
git branch                    # List branches

# Making Changes
git add .                     # Stage everything
git commit -m "message"       # Commit changes
git push                      # Push to GitHub

# Branching
git checkout -b new-branch    # Create & switch to branch
git checkout main             # Switch to main
git merge other-branch        # Merge branch into current

# Syncing
git pull origin main          # Get latest from GitHub
git push origin main          # Send to GitHub

# Cleanup
git branch -d old-branch      # Delete local branch
git push origin --delete old-branch  # Delete remote branch
```

---

## Typical Work Session Flow

```bash
# 1. Start
cd ~/Documents/GitHub/tillhouse.co
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/new-section

# 3. Work in Cursor
# (Cursor creates/modifies files)

# 4. Save progress
git add .
git commit -m "feat: Add new section"
git push -u origin feature/new-section

# 5. Continue working, repeat step 4 as needed

# 6. When done, merge to main
git checkout main
git merge feature/new-section
git push origin main

# 7. Cleanup
git branch -d feature/new-section

# 8. Vercel auto-deploys! 🚀
```

---

## Connecting to Vercel

### First Time Setup:

**1. Push your code to GitHub:**
```bash
git push origin main
```

**2. Go to Vercel.com:**
- Sign in with GitHub
- Click "New Project"
- Import your tillhouse.co repo
- Vercel auto-detects Next.js
- Click "Deploy"

**3. Configure domain:**
- In Vercel dashboard → Settings → Domains
- Add "tillhouse.co"
- Follow DNS instructions from Vercel
- Add "tillhouse.me" 
- Set up redirect: tillhouse.me → tillhouse.co

### After Setup:
- Every push to `main` = automatic deployment
- Pull requests get preview URLs
- Check deployment status in Vercel dashboard

---

## Environment Variables in Vercel

When you need to add secrets (like Web3Forms key):

**1. In Vercel Dashboard:**
- Go to Settings → Environment Variables
- Add key: `NEXT_PUBLIC_WEB3FORMS_KEY`
- Add value: `your_key_here`
- Save

**2. Redeploy (if needed):**
- Vercel → Deployments → Redeploy

---

## Troubleshooting

### "fatal: not a git repository"
**Problem:** You're not in the repo directory
**Solution:** 
```bash
cd ~/Documents/GitHub/tillhouse.co
git status  # Verify you're in the right place
```

### "Your branch is behind"
**Problem:** Someone else (or you on another machine) made changes
**Solution:**
```bash
git pull origin main
```

### "Merge conflict"
**Problem:** Same file changed in different ways
**Solution:**
1. Open the conflicted file in Cursor
2. Look for `<<<<<<` markers
3. Keep the version you want
4. Remove conflict markers
5. `git add .` and `git commit`

### "Permission denied"
**Problem:** Not authenticated with GitHub
**Solution:** Set up SSH key or use GitHub Desktop

### "Nothing to commit"
**Problem:** No changes made or already committed
**Solution:** This is fine! Just means you're up to date.

---

## Pro Tips

1. **Commit Early, Commit Often**
   - Don't wait until everything is perfect
   - Small commits are easier to understand and undo

2. **Use Descriptive Branch Names**
   - ✅ `feature/home-page-hero`
   - ❌ `stuff` or `test`

3. **Test Before Merging to Main**
   - Run `npm run build` locally
   - Check the site works
   - Then merge to main

4. **Keep Main Clean**
   - Main should always be deployable
   - Do experimental work on branches

5. **Pull Before Push**
   - Always `git pull` before you `git push`
   - Avoids conflicts

---

## Need Help?

**Git is confusing at first, but you'll get it!**

Common questions:
- "Where are my changes?" → Run `git status`
- "How do I undo that?" → See "Fixing Mistakes" section
- "Did I break it?" → You probably didn't, run `git status`
- "Can I see what I changed?" → Run `git diff`

**Remember:** Git is just saving versions of your files. You can always go back!
