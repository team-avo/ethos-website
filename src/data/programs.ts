export type Program = {
  index: 1 | 2 | 3;
  title: string;
  description: string;
  href: string;
};

export const programs: readonly Program[] = [
  {
    index: 1,
    title: 'Ethos Structured Recovery Community',
    description:
      'Our flagship program — intensive support anchored by accountability, 12-step integration, and a daily routine built for sustainable recovery.',
    href: '/ethos-flagship-program/',
  },
  {
    index: 2,
    title: 'Ethos Recovery Apartments',
    description:
      'A mid-level structured living community in Culver City. Independence paired with essential recovery services — drug testing, peer accountability, and continued case management.',
    href: '/ethos-recovery-apartments/',
  },
  {
    index: 3,
    title: 'Ethos Recovery Transitional Living',
    description:
      'For men ready for more autonomy. A community-based residence in West Adams supporting long-term recovery with private rooms and continued peer support.',
    href: '/ethos-independent-living/',
  },
] as const;

export const callouts = [
  {
    title: 'Ethos Flagship Program',
    body: 'Our Los Angeles recovery community provides a structured community for men in recovery.',
  },
  {
    title: 'Peer Support Philosophy',
    body: 'Peer support to help young men navigate education, work, and family integration to manifest clinically relevant outcomes.',
  },
  {
    title: 'Recovery Residences',
    body: 'Ethos Recovery provides three levels of support: Ethos Recovery Community, Ethos Recovery Apartments, and Ethos Recovery Transitional Living, each offering structure and community to support your recovery.',
  },
] as const;
