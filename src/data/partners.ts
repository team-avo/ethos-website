export type Partner = {
  name: string;
  blurb: string;
  href: string;
  logoSrc: string;
  logoAlt: string;
};

export const partners: readonly Partner[] = [
  {
    name: 'Lifestyle Interventions',
    blurb:
      'A comprehensive suite of concierge case management and mentoring services tailored to support mental health, recovery, and life transitions.',
    href: '/lifestyle-interventions/',
    logoSrc: '/images/partners/lifestyle-interventions.png',
    logoAlt: 'Lifestyle Interventions',
  },
  {
    name: 'Pulse TMS',
    blurb:
      'Pulse TMS partners with Ethos Recovery to provide cutting-edge transcranial magnetic stimulation and medication management as an additional resource for residents.',
    href: '/pulse-tms/',
    logoSrc: '/images/partners/pulse-tms.png',
    logoAlt: 'Pulse TMS',
  },
] as const;
