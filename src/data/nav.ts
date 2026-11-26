/**
 * Primary site navigation.
 *
 * Desktop uses a condensed row with two dropdowns (Programs, Resources).
 * Mobile drawer uses the flat 17-item list the live site ships.
 */

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; items: NavLink[] };

export const desktopPrimary: Array<NavLink | NavGroup> = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs',
    items: [
      { label: 'Ethos Flagship Program', href: '/ethos-flagship-program/' },
      { label: 'Ethos Recovery Apartments', href: '/ethos-recovery-apartments/' },
      { label: 'Transitional Living', href: '/ethos-independent-living/' },
      { label: 'Meet Our Team', href: '/meet-our-team/' },
    ],
  },
  { label: 'Outcomes', href: '/outcomes/' },
  { label: 'The Ethos Difference', href: '/the-ethos-difference/' },
  {
    label: 'Resources',
    items: [
      { label: 'Sober Living Guide', href: '/sober-living-guide/' },
      { label: 'Long-Term Recovery', href: '/long-term-recovery-guide/' },
      { label: 'Interventions', href: '/interventions/' },
      { label: "A Parent's Guide To Addiction", href: '/a-parents-guide-to-addiction/' },
      { label: 'Adult Child Syndrome', href: '/post/adult-child-syndrome/' },
      { label: 'Mental Health Support', href: '/mental-health-support/' },
      { label: 'Substance Abuse Support', href: '/substance-abuse-support/' },
      { label: 'Lifestyle Interventions', href: '/lifestyle-interventions/' },
      { label: 'Pulse TMS', href: '/pulse-tms/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const mobileFlat: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Meet Our Team', href: '/meet-our-team/' },
  { label: 'Ethos Flagship Program', href: '/ethos-flagship-program/' },
  { label: 'Ethos Recovery Apartments', href: '/ethos-recovery-apartments/' },
  { label: 'Transitional Living', href: '/ethos-independent-living/' },
  { label: 'The Ethos Difference', href: '/the-ethos-difference/' },
  { label: 'Mental Health Support', href: '/mental-health-support/' },
  { label: 'Substance Abuse Support', href: '/substance-abuse-support/' },
  { label: 'Outcomes', href: '/outcomes/' },
  { label: 'Lifestyle Interventions', href: '/lifestyle-interventions/' },
  { label: 'Pulse TMS', href: '/pulse-tms/' },
  { label: 'Sober Living Guide', href: '/sober-living-guide/' },
  { label: 'Long-Term Recovery', href: '/long-term-recovery-guide/' },
  { label: 'Interventions', href: '/interventions/' },
  { label: "A Parent's Guide To Addiction", href: '/a-parents-guide-to-addiction/' },
  { label: 'Adult Child Syndrome', href: '/post/adult-child-syndrome/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerColumns = [
  {
    heading: 'Programs',
    links: [
      { label: 'Meet Our Team', href: '/meet-our-team/' },
      { label: 'Ethos Flagship Program', href: '/ethos-flagship-program/' },
      { label: 'Ethos Recovery Apartments', href: '/ethos-recovery-apartments/' },
      { label: 'Transitional Living', href: '/ethos-independent-living/' },
      { label: 'Outcomes', href: '/outcomes/' },
    ],
  },
  {
    heading: 'Partners',
    links: [
      { label: 'Lifestyle Interventions', href: '/lifestyle-interventions/' },
      { label: 'Pulse TMS', href: '/pulse-tms/' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        label: 'Sober Living: A Complete Guide',
        href: '/sober-living-guide/',
      },
      { label: 'Long-Term Recovery', href: '/long-term-recovery-guide/' },
      { label: 'Interventions', href: '/interventions/' },
      { label: "A Parent's Guide To Addiction", href: '/a-parents-guide-to-addiction/' },
      { label: 'Blog', href: '/blog/' },
    ],
  },
] as const;
