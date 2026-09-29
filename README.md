# Halo Landing Page

The public launch page for Halo, a privacy-first personal safety app for
iPhone. The site introduces Halo's trusted-circle location sharing, check-ins,
SOS, saved places, journeys, privacy controls, and trail replay.

## Prerequisites

- Node.js `>=22.13.0`

## Local Development

```bash
npm install
npm run dev
npm run build
```

The project deploys as a standard Next.js application on Vercel. Vercel sets
the production URL automatically. Set `NEXT_PUBLIC_SITE_URL` to a custom domain
when one is connected so canonical and social-preview links use that domain.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: create the production site
- `npm run start`: serve a production build
- `npm run lint`: check the codebase
