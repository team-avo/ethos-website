import { business } from '@/data/business';

type SchemaType =
  | 'LocalBusiness'
  | 'WebSite'
  | 'BreadcrumbList'
  | 'Service'
  | 'Place'
  | 'Article';

type Breadcrumb = { name: string; url: string };

type Service = {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
};

type Article = {
  headline: string;
  description: string;
  author?: { type: 'Organization' | 'Person'; name: string };
  datePublished?: string;
  about?: string;
};

type Props = {
  types: SchemaType[];
  page: { url: string; title: string; description: string };
  breadcrumbs?: Breadcrumb[];
  service?: Service;
  article?: Article;
};

function localBusiness() {
  return {
    '@type': 'LocalBusiness',
    '@id': `${business.url}#org`,
    name: business.name,
    url: business.url,
    telephone: business.phone.e164,
    image: `${business.url}${business.heroImage.src}`,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
  };
}

function website(page: Props['page']) {
  return {
    '@type': 'WebSite',
    '@id': `${business.url}#website`,
    url: business.url,
    name: business.name,
    description: page.description,
    publisher: { '@id': `${business.url}#org` },
  };
}

function breadcrumbList(items: Breadcrumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

function serviceSchema(s: Service) {
  return {
    '@type': 'Service',
    name: s.name,
    description: s.description,
    serviceType: s.serviceType ?? 'Sober Living',
    areaServed: s.areaServed ?? 'Los Angeles',
    provider: { '@id': `${business.url}#org` },
  };
}

function articleSchema(a: Article, page: Props['page']) {
  return {
    '@type': 'Article',
    headline: a.headline,
    description: a.description,
    url: page.url,
    publisher: { '@id': `${business.url}#org` },
    ...(a.author && {
      author: { '@type': a.author.type, name: a.author.name },
    }),
    ...(a.datePublished && { datePublished: a.datePublished }),
    ...(a.about && { about: { '@type': 'Thing', name: a.about } }),
  };
}

function placeSchema() {
  return {
    '@type': 'Place',
    name: `${business.name} — ${business.address.locality}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
  };
}

export function SchemaOrg({ types, page, breadcrumbs, service, article }: Props) {
  const graph: Record<string, unknown>[] = [];
  if (types.includes('LocalBusiness')) graph.push(localBusiness());
  if (types.includes('WebSite')) graph.push(website(page));
  if (types.includes('BreadcrumbList') && breadcrumbs?.length)
    graph.push(breadcrumbList(breadcrumbs));
  if (types.includes('Service') && service) graph.push(serviceSchema(service));
  if (types.includes('Place')) graph.push(placeSchema());
  if (types.includes('Article') && article) graph.push(articleSchema(article, page));

  const payload = { '@context': 'https://schema.org', '@graph': graph };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
