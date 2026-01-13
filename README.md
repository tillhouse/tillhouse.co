# Tillhouse.co

Professional website for Jeremy Tillman - AI-native product leadership for startups.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: Web3Forms
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tillhouse/tillhouse.co.git
   cd tillhouse.co
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Web3Forms API key to `.env.local`

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
tillhouse.co/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── work/               # Portfolio pages
│   ├── ai-lab/             # AI experiments showcase
│   ├── services/           # Services & contact
│   ├── about/              # About page
│   └── resume/             # Resume & contact
├── components/             # Reusable React components
├── data/                   # Static data (projects, services)
├── public/                 # Static assets
│   ├── images/             # Project images, headshots
│   └── resume.pdf          # Downloadable resume
└── ...config files
```

## Deployment

This site is deployed on Vercel. Push to `main` branch to trigger automatic deployment.

### Environment Variables

Add these in Vercel dashboard → Settings → Environment Variables:

- `NEXT_PUBLIC_WEB3FORMS_KEY` - Your Web3Forms access key
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Your Plausible domain (optional)

## License

© Jeremy Tillman. All rights reserved.

