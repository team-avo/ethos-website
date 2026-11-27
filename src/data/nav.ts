/**
 * Site navigation — mirrors the live WordPress menus (handbook §3.3).
 *
 * Primary menu (WP "Primary", 4 dropdowns + Home/Blog/Contact). "Flagship
 * Program" is both a link and a dropdown parent. The mobile drawer and the
 * footer columns are derived from / defined alongside this one source.
 */

export type NavLink = { label: string; href: string };
export type NavGroup = {
  label: string;
  /** Optional: the group label itself links somewhere (e.g. Flagship Program). */
  href?: string;
  items: NavLink[];
};

export const primaryNav: Array<NavLink | NavGroup> = [
  { label: 'Home', href: '/' },
  {
    label: 'Recovery Community',
    items: [
      { label: 'Meet Our Team', href: '/meet-our-team/' },
      { label: 'Ethos Recovery Apartments', href: '/ethos-recovery-apartments/' },
      { label: 'Transitional Living', href: '/ethos-independent-living/' },
    ],
  },
  {
    label: 'Flagship Program',
    href: '/ethos-flagship-program/',
    items: [
      { label: 'The Ethos Difference', href: '/the-ethos-difference/' },
      { label: 'Mental Health Support', href: '/mental-health-support/' },
      { label: 'Substance Abuse Support', href: '/substance-abuse-support/' },
      { label: 'Outcomes', href: '/outcomes/' },
    ],
  },
  {
    label: 'Community Partners',
    items: [
      { label: 'Lifestyle Interventions', href: '/lifestyle-interventions/' },
      { label: 'Pulse TMS', href: '/pulse-tms/' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Sober Living Guide', href: '/sober-living-guide/' },
      { label: 'Long-Term Recovery', href: '/long-term-recovery-guide/' },
      { label: 'Interventions', href: '/interventions/' },
      { label: "A Parent's Guide To Addiction", href: '/a-parents-guide-to-addiction/' },
      { label: 'Adult Child Syndrome', href: '/post/adult-child-syndrome/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export function isGroup(item: NavLink | NavGroup): item is NavGroup {
  return 'items' in item;
}

export const footerColumns = [
  {
    heading: 'Recovery Community',
    links: [
      { label: 'Meet Our Team', href: '/meet-our-team/' },
      { label: 'Ethos Flagship Program', href: '/ethos-flagship-program/' },
      { label: 'Ethos Recovery Apartments', href: '/ethos-recovery-apartments/' },
      { label: 'Transitional Living', href: '/ethos-independent-living/' },
      { label: 'Outcomes', href: '/outcomes/' },
    ],
  },
  {
    heading: 'Community Partners',
    links: [
      { label: 'Lifestyle Interventions', href: '/lifestyle-interventions/' },
      { label: 'Pulse TMS', href: '/pulse-tms/' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        label: 'What It Is Like Living in a Sober House: A Complete Guide',
        href: '/sober-living-guide/',
      },
      { label: 'Long-Term Recovery', href: '/long-term-recovery-guide/' },
      { label: 'Interventions', href: '/interventions/' },
      { label: "A Parent's Guide To Addiction", href: '/a-parents-guide-to-addiction/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Get In Touch', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms and Conditions', href: '/terms-and-conditions/' },
    ],
  },
] as const;
