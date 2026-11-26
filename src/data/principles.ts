export type Principle = {
  letter: 'R' | 'I' | 'S' | 'E' | 'UP';
  title: string;
  body: string;
};

export const principles: readonly Principle[] = [
  {
    letter: 'R',
    title: 'Resilience — Finding Strength in Challenges',
    body: 'Recovery from mental-health issues and substance abuse requires resilience. At Ethos, we help individuals build the strength and determination needed to overcome those challenges. Our community supports personal growth by transforming obstacles into opportunities, fostering lasting recovery.',
  },
  {
    letter: 'I',
    title: 'Inspiration — Community is Our Method',
    body: 'In recovery, inspiration from others can be a catalyst for change. At Ethos, "Community is Our Method" — individuals uplift and motivate one another throughout their recovery journey. By sharing experience and fostering an environment of positivity and hope, we create a culture that supports sustainable recovery from addiction.',
  },
  {
    letter: 'S',
    title: 'Sobriety — Commitment to a Holistic Lifestyle',
    body: 'Sobriety is not just abstaining from substances — it is a commitment to a holistic, healthy lifestyle that strengthens both mental and physical well-being. We focus on maintaining sobriety through health practices that encompass emotional and physical healing, ensuring long-term recovery.',
  },
  {
    letter: 'E',
    title: 'Exercise — Physical Wellness for Mental Strength',
    body: 'Exercise plays a vital role in improving both mental health and recovery. At Ethos, we integrate regular physical activity into the recovery process, promoting overall wellness that strengthens mind and body. Movement relieves stress, lifts mood, and builds mental resilience.',
  },
  {
    letter: 'UP',
    title: 'Upward Progress & Optimism',
    body: '"UP" is upward progress in recovery, especially during challenging times when giving up feels like an option. We teach residents to face their fears and persevere — whether dealing with mental-health disorders or addiction recovery. At Ethos, we celebrate each step forward and the optimism it builds.',
  },
] as const;
