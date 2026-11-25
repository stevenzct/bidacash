export const site = {
  title: 'BidaCash | Personal loans from Luminous Lending Inc.',
  description:
    'Explore BidaCash personal loan terms, eligibility, company disclosures and customer support.',
  name: 'BidaCash',
  locale: 'en-PH',
};

export function getSiteOrigin() {
  const value = process.env.SITE_URL;
  if (!value) return undefined;

  const url = new URL(value);
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.pathname !== '/' ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      'SITE_URL must be a public HTTPS origin without a path, credentials, query, or fragment.',
    );
  }

  return new URL(url.origin);
}
