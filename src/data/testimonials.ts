export type Testimonial = {
  quote: string;
  author: string;
  stars: number;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "For me this review is simple. I tried everything for over 20 years of my life to regain control of an ongoing struggle within myself — it caused me to suffer silently, hurt loved ones, and ruin every opportunity and dream I had worked my whole life for. Today, after entering Ethos over a year and a half ago, I have found my true self and can enjoy life as it's meant to be. Along with a new community of friends and brothers who support my every move. Today I am sober after a three-decade struggle with addiction. Thank you Ethos and everyone who guided me to break through the barriers. Forever thankful.",
    author: 'Brandon R.',
    stars: 5,
  },
  {
    quote:
      'The Ethos sober living was a game changer for our son and our family. Our son went to several rehabs and sober living houses. The Ethos program not only had him sober for more than 90 days, but taught him the value of family, communication, and thinking outside of himself. He is a better person since graduating from the program. He is now a year and a half sober and excited about life. The Ethos program also helped me as a mom of an addict hold my boundaries. Tuc, our case manager, called once a week with any updates. Best program out there.',
    author: 'Clay F.',
    stars: 5,
  },
  {
    quote:
      'Ethos has truly changed my life for the better. I came into Ethos without direction for my future and minimal life skills. Thankfully, Ethos fostered my ability to maintain long-term sobriety and shaped my character into one that is able to withstand any challenges in life. Today I am an independent person with two years of recovery, a career that I love, healthy relationships, and most importantly the Ethos community, which continues to support my future in all my endeavors.',
    author: 'Tyler V.',
    stars: 5,
  },
] as const;
