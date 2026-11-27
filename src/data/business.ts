/**
 * Source-of-truth business facts. Imported everywhere a page needs the address,
 * phone, email, or social accounts. Change once, propagate everywhere.
 */

export const business = {
  name: 'Ethos Recovery',
  legalName: 'Ethos Recovery, LLC',
  tagline: 'Sober Living Community in Los Angeles',
  description:
    'Structured sober living for men in Los Angeles. Three levels of support, from our Flagship Program to recovery apartments in Culver City.',
  url: 'https://www.ethosrecovery.com',
  phone: {
    display: '(323) 942-9996',
    tel: 'tel:+13239429996',
    e164: '+13239429996',
  },
  address: {
    street: '3914 Tuller Ave',
    locality: 'Culver City',
    region: 'CA',
    postalCode: '90230',
    country: 'US',
    mapHref:
      'https://maps.google.com/?q=3914+Tuller+Ave%2C+Culver+City%2C+CA+90230',
  },
  geo: {
    latitude: 33.98319,
    longitude: -118.39522,
  },
  heroImage: {
    src: '/images/hero-poster.jpg',
    width: 1921,
    height: 1184,
    alt: 'Men gathered in the Ethos Recovery community space',
  },
  logo: {
    src: '/images/ethos-logo.png',
    alt: 'Ethos Recovery',
    width: 180,
    height: 48,
  },
  vimeoHeroId: '1002119749',
  priceRange: '$$',
} as const;
