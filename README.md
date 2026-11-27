# BidaCash

BidaCash is the public informational website for the online lending platform of Luminous Lending Inc. The homepage covers personal loan terms, eligibility, company information, compliance disclosures, and customer support. Next.js App Router renders the English (Philippines) site from React components, with TypeScript, Tailwind CSS v4, and Lucide icons.

## Local development

Use Node.js 24 LTS and the bundled npm. The checked-in lockfile pins the dependency versions used by `npm ci`.

```sh
node --version
npm ci
npm run dev
```

Open `http://localhost:3000`. The development server reloads when you edit files in `src/`. To use a different port, run `npm run dev -- --port 3001`.

Local development works with the default environment. To preview production metadata, create a root `.env.local` using [.env.example](.env.example) as a reference and restart the dev server.

```dotenv
SITE_URL=https://example.com
```

`SITE_URL` is the public HTTPS origin used for search and social metadata. A trailing slash is accepted. Use an origin without a subpath, credentials, query, or fragment. Local requests still go to `localhost`. Set the real origin before building a release.

## Project map

| Area                         | Source and responsibilities                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home route                   | [`src/app/page.tsx`](src/app/page.tsx) orders the sections and defines the skip link, canonical URL, and WebSite structured data.                             |
| Shared page shell            | [`src/app/layout.tsx`](src/app/layout.tsx) loads Inter, global CSS, the favicon, and shared page metadata.                                                    |
| Other routes                 | [`not-found.tsx`](src/app/not-found.tsx), [`robots.ts`](src/app/robots.ts), and [`sitemap.ts`](src/app/sitemap.ts) serve the 404, crawler rules, and sitemap. |
| Header and footer            | [`src/components/layout/`](src/components/layout/) contains navigation, mobile menu behavior, header measurement, and footer copy.                            |
| Homepage sections            | [`src/components/sections/`](src/components/sections/) contains the hero, products, about, compliance, and contact components.                                |
| Expandable content           | [`disclosure.tsx`](src/components/ui/disclosure.tsx) provides the shared native `details` and `summary` component.                                            |
| Theme and responsive layout  | [`src/app/globals.css`](src/app/globals.css) defines brand tokens, layout rules, and motion.                                                                  |
| Site identity and origin     | [`src/lib/site.ts`](src/lib/site.ts) holds the site title, description, name, locale, and `SITE_URL` validation.                                              |
| Published and source artwork | [`public/`](public/) contains served images and icons. [`assets/`](assets/) contains original artwork for future edits.                                       |

The page and section components render on the server. Client code in [`mobile-navigation.tsx`](src/components/layout/mobile-navigation.tsx) adds menu dismissal on link selection, Escape, focus leaving the menu, outside press, and a switch to desktop layout. Escape returns focus to the menu toggle. [`navigation-height.tsx`](src/components/layout/navigation-height.tsx) measures the sticky header with a `ResizeObserver` and updates `--navigation-height`, which controls both anchor scroll offsets and the open mobile menu position. CSS provides default header heights for the initial render and for visitors with JavaScript disabled.

## Updating site content

| Change                       | Where to edit                                                                                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hero heading or benefit list | Update the copy and `benefits` array in [`hero.tsx`](src/components/sections/hero.tsx).                                                                                                                                                                      |
| Loan terms or eligibility    | Update `loanFacts`, `loanFeatures`, and the relevant disclosure in [`products.tsx`](src/components/sections/products.tsx). Keep any repeated amounts, terms, and rates in sync. The `eligibility` array supplies the open-by-default “Who may apply?” panel. |
| Company description          | Update [`about.tsx`](src/components/sections/about.tsx). Review the company introduction in Compliance when changing business or registration details.                                                                                                       |
| Compliance notices           | Edit the `notices` array and introductory copy in [`compliance.tsx`](src/components/sections/compliance.tsx). Check the footer when registration numbers change.                                                                                             |
| Support and complaints       | Edit email, mobile number, address, hours, and complaint or escalation steps in [`contact.tsx`](src/components/sections/contact.tsx). Update the footer if the principal office changes.                                                                     |
| Corporate footer             | Edit the company name, registration and authority numbers, or principal office in [`site-footer.tsx`](src/components/layout/site-footer.tsx).                                                                                                                |
| Site title and social cards  | Update shared text in [`site.ts`](src/lib/site.ts) and the social image configuration in [`layout.tsx`](src/app/layout.tsx). Review the publisher in `page.tsx` if the company name changes.                                                                 |

The header links to `#products`, `#about`, `#compliance`, and `#contact`. The hero links to `#products` and `#eligibility`, the logo returns to `#top`, and the skip link targets `#main`. Preserve these IDs so existing links keep working. When adding a navigation item, update the shared list in [`site-header.tsx`](src/components/layout/site-header.tsx) so desktop and mobile show it.

Reuse the shared `Disclosure` for expandable notices. Its required props are `title` and children, with optional `icon`, `id`, and `initiallyOpen`. The native controls work with a keyboard and with JavaScript disabled.

## Styling and artwork

- Brand colors, container widths, and the font mapping live in `@theme` in [`globals.css`](src/app/globals.css). Use its `brand-*` color tokens for shared styles and keep section-specific responsive rules next to the corresponding CSS selectors.
- Desktop navigation starts at `64rem` (1024 px at the default font size). Contact details switch from stacked rows to three columns above 840 px. Loan fact cards switch to three columns at 851 px. The hero benefits also account for coarse-pointer devices, so check a touch viewport when changing the hero.
- Use `@/images/*` for static imports from `public/images/`. Public URLs begin with `/images/` or `/icons/`. When replacing a raster image used by `next/image`, check its aspect ratio, crop, and `sizes` value at the widths where it appears. The image optimizer is configured for WebP.
- The hero composite is [`hero-loan-approved.webp`](public/images/hero-loan-approved.webp). Its placement is coordinated with the inline wave in [`hero.tsx`](src/components/sections/hero.tsx) and the `.hero-picture` and `.hero-image` rules in `globals.css`. If the composition or transparent margins change, check alignment with the wave on desktop and mobile.
- The product portrait and coin animation are positioned independently. [`product-artwork.tsx`](src/components/sections/product-artwork.tsx) renders the wave and loads [`loan-guide-coins.svg`](public/images/loan-guide-coins.svg) as an unoptimized image. The SVG contains its own motion and respects the reduced-motion preference. The page also respects reduced motion for smooth scrolling and UI transitions.
- The email and mobile badge takes its shape from an alpha mask and its color from the shared support badge style in `contact.tsx`. The office and support-hours badges use Lucide icons. [`contact-channels.webp`](public/icons/contact-channels.webp)
- The local Inter font covers weights 400–720 and includes the Philippine peso sign. If you replace or regenerate the subset, verify the currency glyph, punctuation, and weights used in page copy. The font and its license are in [`src/app/fonts/`](src/app/fonts/).
- Header and product wordmarks use `public/images/bidacash-wordmark.svg`. The footer uses `public/images/bidacash-footer.png`, the 1200 × 630 social card uses `public/images/bidacash-social.webp`, and the favicon is `public/icons/bidacash.png`. Check each surface independently when updating the branding.

## Checks before release

| Command                | What it checks or runs                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `npm run lint`         | Runs ESLint with the Next.js Core Web Vitals and TypeScript configuration.                 |
| `npm run typecheck`    | Runs the TypeScript compiler with `--noEmit`.                                              |
| `npm run format:check` | Checks formatting for files covered by Prettier. See [`.prettierignore`](.prettierignore). |
| `npm run format`       | Applies Prettier formatting to all covered files.                                          |
| `npm run build`        | Builds and prerenders the app with production settings.                                    |
| `npm start`            | Serves the completed production build locally.                                             |

For a targeted formatting change, run `npx prettier --write path/to/file`. The current full formatting check also flags existing issues in `package.json` and `src/components/ui/disclosure.tsx`.

After building, smoke-test the production server for the parts your change touches.

1. Open `/` at representative widths such as 320, 390, 768, and 1440 px. Check for horizontal overflow, awkward wrapping, and broken images. Try both sides of the 1024 px breakpoint for header or hero changes.
2. Use the skip link and header links with a keyboard. Check that the sticky header leaves the destination heading visible. On mobile, open the menu, choose a link, then reopen it and check Escape and focus return.
3. Open and close the relevant disclosures. Confirm that eligibility starts open and that support contact details, hours, and disclosures fit the contact row. For navigation or disclosure changes, also check native controls with JavaScript disabled and test with reduced motion enabled.
4. Open an unknown path and confirm the branded 404 page links back to the homepage. When changing assets or SEO settings, check that the browser loads the corresponding resources without errors.

## Deployment and SEO

**Vercel.** Import the repository with the Next.js framework preset, use Node.js 24, and set `SITE_URL` in the Production environment before building. Use the default Next.js build command.

**Self-hosting.** Install from the lockfile, set `SITE_URL`, then run `npm run build` and `npm start` with a Node.js runtime. The Next.js server handles image optimization. If a local dev server is already using port 3000, stop it or use `npm start -- --port 3001`.

Verify these URLs and tags after deploying or changing the public domain.

| Check           | Expected result with `SITE_URL` set                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Homepage source | Canonical link and Open Graph URL use the production origin. WebSite JSON-LD includes the same URL.                     |
| Social preview  | Open Graph and Twitter use the absolute URL of `/images/bidacash-social.webp`. The image returns a successful response. |
| `/robots.txt`   | Allows crawling and advertises the absolute sitemap URL.                                                                |
| `/sitemap.xml`  | Contains one entry for the homepage at the public origin.                                                               |

When `SITE_URL` is unset, the app omits canonical, absolute social images, and site JSON-LD. The sitemap is empty and `robots.txt` omits its sitemap line. The title, description, favicon, and homepage content still render.

## Removing the original HTML

The original standalone site consists of the root `index.html`, `styles.css`, `script-1.js`, and `script-2.js`. Next.js builds the homepage from `src/app/page.tsx` and serves its artwork from `public/`. A clean production build and local smoke test work without the original HTML, stylesheet, scripts, or root `assets/` folder.

Once all public deployments use the Next.js app, it is safe to delete the root `index.html`. Check any GitHub Pages configuration, static hosting, or shared file-based preview that might still publish or open the original file. An active standalone copy still needs the original HTML and its companion files until that deployment is migrated or retired.

The old stylesheet and scripts can be removed with the HTML when their standalone copy is retired. Drop the corresponding entries from `.prettierignore` if you remove those files. Keep `assets/` if future design work needs the source artwork. To inspect the original page after removal, run `git show 141036a:index.html`.

## Historical verification

During the Next.js migration, Playwright exercised the production site in Chromium from 320 to 1920 px, compared screenshots with the original, and checked navigation, disclosures, keyboard focus, overflow, and resource loading. Axe reported zero violations in the migration checks at 390 and 1440 px. The sitemap and sharing metadata were also checked with a test origin.

The migration's Lighthouse 13.6.0 results below predate later mobile layout and artwork changes. Mobile figures are medians of three runs and serve as a historical reference.

| Profile                           | Performance | Accessibility | Best practices | SEO |    LCP | CLS |
| --------------------------------- | ----------: | ------------: | -------------: | --: | -----: | --: |
| Desktop                           |         100 |           100 |            100 | 100 | 0.64 s |   0 |
| Mobile, simulated throttling      |          94 |           100 |            100 | 100 | 3.02 s |   0 |
| Mobile, Chrome-applied throttling |          96 |           100 |            100 | 100 | 1.99 s |   0 |

That migration measured a 346 KB mobile page load and a maximum interaction latency of 48 ms in three local mobile runs with 4× CPU slowdown. The interaction figure comes from lab tests of navigation and disclosures. Field INP remains unmeasured in the migration results.
