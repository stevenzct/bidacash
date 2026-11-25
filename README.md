# BidaCash

BidaCash is the informational website for the online lending platform of Luminous Lending Inc. It presents personal loan terms and eligibility, company information, compliance disclosures, and customer support. The Next.js app has one public content page. The original HTML, CSS, JavaScript, and source artwork are kept at the repository root as the design and copy reference.

## Technology

Next.js App Router and React render the site. The project uses strict TypeScript, Tailwind CSS v4, Lucide React, ESLint, Prettier, and npm. Next.js optimizes the local Inter font and serves responsive WebP images. Use Node.js 24 LTS for development and deployment.

The bundled Next.js lint configuration still uses plugins that declare support through ESLint 9, so the project uses ESLint 9 for the development checks.

## Local development

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Run the production build and checks with:

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm start
```

`npm run format` formats the application files. Prettier excludes the original source files and generated outputs.

## Architecture

| Location                             | Contents                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------ |
| `src/app/`                           | Home page, shared layout, metadata, CSS, custom 404, sitemap, and robots rules |
| `src/components/layout/`             | Sticky navigation, footer, and the header-height observer                      |
| `src/components/sections/`           | Hero, loan product and eligibility, about, compliance, and customer support    |
| `src/components/ui/disclosure.tsx`   | Shared native disclosure for loan details, compliance, and support             |
| `src/lib/site.ts`                    | Site title, description, language, and production origin validation            |
| `public/images/` and `public/icons/` | Published artwork, wordmark, social image, and favicon                         |

The sections render on the server. Native links and disclosures work with JavaScript disabled. The small client component observes the sticky header so in-page links land clear of it when the header changes height.

## Design and assets

Brand colors, page widths, and the font mapping are defined in `@theme` in `src/app/globals.css`. Tailwind utilities handle common layout and typography. The stylesheet contains the rules for the hero artwork, section waves, and design-specific responsive transitions. The coin animation is defined in its lazy-loaded SVG. The preferred reduced-motion setting disables coin animation and smooth scrolling.

The original artwork is under `assets/`. The production hero WebP combines the two clipped image layers and shadow from the original inline SVG. The wave remains a vector path. The wordmark and animated coin SVGs embed compressed WebP derivatives of the supplied artwork. The favicon and social image are derived from the supplied branding. The variable Inter font from `styles.css` keeps the characters used here, including the peso sign, the site's weight range of 400–720, and its optical sizing axis. Next.js preloads the 22 KB subset through `next/font/local`. The font license is in `src/app/fonts/OFL.txt`.

## Deployment

Import this repository into Vercel, select the Next.js preset, and use Node.js 24 with the default build command. Set `SITE_URL` in the production environment to the site's public HTTPS origin, such as `https://example.com`, before building. The origin supplies the canonical URL, social image URLs, website structured data, and the sitemap entry. Builds without it omit these origin-dependent values and return an empty sitemap.

For a self-hosted deployment, run `npm ci`, set `SITE_URL`, and run `npm run build` followed by `npm start`. The server handles Next.js image optimization.

The source lists support email and mobile details as “Pending confirmation.” Those entries are carried over verbatim.

## Verification

Playwright checked the production build in Chromium at widths of 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920 pixels. It compared the original copy, checked for horizontal overflow and clipped text, exercised navigation and all 13 disclosures, and checked for broken resources and browser errors. Original and migrated screenshots were compared at mobile, tablet, and desktop sizes. The skip link, 404, reduced motion, and navigation and disclosures with JavaScript disabled were also checked. Axe reported zero violations at 390 px and 1440 px with disclosures open and closed.

A build with a test origin verified the canonical URL, Open Graph and Twitter images, website structured data, robots file, and sitemap.

Lighthouse 13.6.0 measured the local production build. Mobile results are medians from three runs for each throttling method.

| Profile                              | Performance | Accessibility | Best practices | SEO |    LCP | CLS |
| ------------------------------------ | ----------: | ------------: | -------------: | --: | -----: | --: |
| Desktop                              |         100 |           100 |            100 | 100 | 0.64 s |   0 |
| Mobile, simulated throttling         |          94 |           100 |            100 | 100 | 3.02 s |   0 |
| Mobile, throttling applied in Chrome |          96 |           100 |            100 | 100 | 1.99 s |   0 |

The standard mobile simulation exceeded the 2.5-second LCP target. With throttling applied in Chrome, the three mobile LCP readings ranged from 1.97 to 2.19 seconds. Lighthouse reported a 346 KB mobile load, down from 463 KB in the previous build.

In three local mobile sessions with 4× CPU slowdown, Chrome Event Timing recorded a maximum of 48 ms across the tested navigation and disclosure interactions. Each session exercised 30 inputs. Field INP remains unmeasured.

## Migration file inventory

The migration added the files below. The original tracked files are preserved.

| Location                            | New files                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository root                     | `.env.example`, `.gitignore`, `.prettierignore`, `.prettierrc.json`, `README.md`, `eslint.config.mjs`, `next.config.ts`, `package.json`, `package-lock.json`, `postcss.config.mjs`, `tsconfig.json`                                                                                                                                |
| `src/app/`                          | `globals.css`, `layout.tsx`, `not-found.tsx`, `page.tsx`, `robots.ts`, `sitemap.ts`                                                                                                                                                                                                                                                |
| `src/app/fonts/`                    | `inter-variable.woff2`, `OFL.txt`                                                                                                                                                                                                                                                                                                  |
| `src/components/layout/`            | `navigation-height.tsx`, `site-footer.tsx`, `site-header.tsx`                                                                                                                                                                                                                                                                      |
| `src/components/sections/`          | `about.tsx`, `compliance.tsx`, `contact.tsx`, `hero.tsx`, `product-artwork.tsx`, `products.tsx`                                                                                                                                                                                                                                    |
| `src/components/ui/` and `src/lib/` | `disclosure.tsx`, `site.ts`                                                                                                                                                                                                                                                                                                        |
| `public/icons/`                     | `bidacash.png`, `check.svg`                                                                                                                                                                                                                                                                                                        |
| `public/images/`                    | `about-bidacash.webp`, `about-wave.svg`, `bidacash-footer.png`, `bidacash-social.webp`, `bidacash-wordmark.svg`, `compliance-review.webp`, `contact-support.webp`, `hero-loan-approved.webp`, `loan-calendar.webp`, `loan-guide-coins.svg`, `loan-interest.webp`, `loan-wallet.webp`, `product-presenter.webp`, `support-wave.svg` |
