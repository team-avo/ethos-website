# Ethos Website

Marketing website for Ethos — rebuilt from WordPress on Next.js + Tailwind with a design-system-first architecture.

## Stack

- **Next.js 15** (App Router, TypeScript, Turbopack)
- **Tailwind CSS 4** + design tokens
- **shadcn/ui** component primitives
- **ESLint + Prettier** with Husky pre-commit
- Deployed on **Vercel** (TBD)

## Getting started

```bash
npm install
npm run dev
```

Site runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Run production build locally |
| `npm run lint` | Lint all source files |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   └── (marketing)/        # Marketing route group
├── components/             # Reusable components (shadcn/ui lives here)
├── design-system/          # Tokens, typography, color scale, spacing
│   ├── tokens.ts
│   ├── colors.ts
│   └── typography.ts
├── lib/                    # Utilities, helpers
└── content/                # MDX/CMS content (if applicable)
```

## Design system

All visual decisions route through `src/design-system/`. Don't hardcode colors, fonts, or spacing inside components — reference tokens instead. This is the key difference from the old WordPress build.

## Deployment

Pushes to `main` auto-deploy to Vercel (once connected). Preview deploys on every PR.

## Contributing

- Branch from `main`
- Open a PR — no direct pushes to `main`
- Pre-commit hooks run lint + format automatically

## License

Proprietary — internal to Ethos / AdvertOut.
