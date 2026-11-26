/**
 * /outcomes/ page content — centralized so copy edits don't touch TSX.
 * Numbers verbatim from the live Petree Consulting 2023 evaluation.
 */

export const methodologySteps = [
  {
    index: '01',
    title: 'Third-party evaluation',
    body: 'Ethos partners with Petree Consulting to independently assess outcomes.',
  },
  {
    index: '02',
    title: 'Validated instruments',
    body: 'We use the Outcome Questionnaire (OQ45.2) for mental, relationships and social health, and the PHQ-9 for depression.',
  },
  {
    index: '03',
    title: 'Longitudinal measurement',
    body: 'Scores are taken at admission, during the program, and at 3, 6 and 12 months after discharge.',
  },
] as const;

export const methodologyNarrative =
  'Ethos Structured Sober Living is an all-male recovery community in West Los Angeles. Long-term sobriety is fostered by peer encouragement and expectations of accountability, camaraderie, and character development. House members eat and live as a family and meet regularly to support each other in their new ways of living.';

export const memberStats = [
  { value: '26', label: 'Average age on arrival' },
  { value: '165', label: 'Members hosted by spring 2023' },
  { value: '10', label: 'In program at time of evaluation' },
  { value: '66%', label: 'Depart after ≤25% of program', note: 'Avg stay 43 days' },
] as const;

export const memberStatsCaption =
  'Ethos is a program for males only, averaging 26 years old on arrival. By spring 2023, 165 members had come to the house, ten of whom were in program at that time. Not all house members stay engaged with Ethos for the recommended duration — two-thirds (66%) depart after having completed one-quarter, or less, of the program, staying an average of 43 days.';

export const postProgramCounts = [
  { value: '33', label: 'Respondents at 3 months' },
  { value: '26', label: 'Respondents at 6 months' },
  { value: '15', label: 'Respondents at 12 months' },
] as const;

export const postProgramCaption =
  'Three, six, and twelve months after departure, Ethos members are asked to report on their health, behavior, and relationships. This sub-sample may be biased toward those who stay in touch with the program.';

export type ChartBlock = {
  eyebrow: string;
  heading: string;
  scaleCaption?: string;
  body: string;
  chartSrc: string;
  chartAlt: string;
};

export const clinicalCharts: readonly ChartBlock[] = [
  {
    eyebrow: 'Clinical indicator',
    heading: 'Depression symptoms',
    scaleCaption: 'PHQ-9 · 10–14 moderate · 5–9 mild · <4 minimal',
    body: 'Depression symptoms are measured with the PHQ-9 (Personal Health Questionnaire – 9 Item Survey). The figure shows scores from when members started at Ethos, during the program, and after discharge. The blue line represents members who fully completed the program.',
    chartSrc: '/images/outcomes/depression-symptoms.png',
    chartAlt: 'Chart showing PHQ-9 depression scores decreasing over the course of the Ethos program',
  },
  {
    eyebrow: 'Clinical indicator',
    heading: 'Mental health symptoms',
    scaleCaption: 'Symptom Distress · ≥36 clinically problematic',
    body: 'The Symptom Distress scale of the OQ45.2 measures depression and anxiety. Scores of 36 or higher indicate clinically problematic symptoms. House members admit to treatment with scores in the clinically problematic range. As time from admission increases, mental-health symptoms are healthier — particularly for those who complete the program. Sustained gains are more pronounced for completers.',
    chartSrc: '/images/outcomes/mental-health.png',
    chartAlt: 'Chart of OQ45.2 symptom distress scores over time showing improvement for program completers',
  },
  {
    eyebrow: 'Clinical indicator',
    heading: 'Interpersonal relationships',
    scaleCaption: 'Interpersonal Relations · ≥15 clinically problematic',
    body: 'Scores on the Interpersonal Relations scale of the OQ45.2 of 15 or higher indicate clinically problematic symptoms. House members, on average, admit to treatment in the clinically problematic range. For those who complete the program, relationship health improves as they progress through the program and gains are sustained after departure.',
    chartSrc: '/images/outcomes/interpersonal-relationships.png',
    chartAlt: 'Chart of OQ45.2 interpersonal relationships scores improving through and after the Ethos program',
  },
  {
    eyebrow: 'Clinical indicator',
    heading: 'Social behavior',
    scaleCaption: 'Social Role · ≥12 clinically problematic',
    body: 'The Social Role scale of the OQ45.2 measures social functioning — respect for the law, ability to meet responsibilities. Scores of 12 or higher indicate clinically problematic symptoms. Those who complete Ethos generally present with healthy social functioning and sustain that health during and after the program.',
    chartSrc: '/images/outcomes/social-behavior.png',
    chartAlt: 'Chart of OQ45.2 social role scores showing sustained healthy social functioning after Ethos',
  },
] as const;

export const lifeOutcomeCharts: readonly ChartBlock[] = [
  {
    eyebrow: 'Life outcome',
    heading: 'Substance use',
    scaleCaption: 'Self-reported abstinence post-program',
    body: 'Members are asked about substance use at 3, 6 and 12 months post-program. Program completers consistently report sustained abstinence, while the remaining sample shows mixed outcomes.',
    chartSrc: '/images/outcomes/substance-use.jpg',
    chartAlt: 'Chart of self-reported substance use at 3, 6 and 12 months after leaving Ethos',
  },
  {
    eyebrow: 'Life outcome',
    heading: 'Family functioning',
    scaleCaption: 'Family-relationship self-report',
    body: 'Family functioning is one of the strongest signals of sustainable recovery. Ethos members report improved family relationships both during the program and across the post-program survey windows.',
    chartSrc: '/images/outcomes/family-functioning.png',
    chartAlt: 'Chart of self-reported family functioning scores improving post-program',
  },
  {
    eyebrow: 'Life outcome',
    heading: 'Employment',
    scaleCaption: 'Employment status self-report',
    body: 'Members are asked about employment status at each post-program survey. The majority of program completers report full-time employment within 12 months of leaving the program.',
    chartSrc: '/images/outcomes/employment.png',
    chartAlt: 'Chart of employment status at 3, 6 and 12 months post-program',
  },
  {
    eyebrow: 'Life outcome',
    heading: 'Educational goals',
    scaleCaption: 'Education-goal progress',
    body: 'Educational goal progress — whether completing a degree, certificate, or program-of-study — is measured at each post-program survey. Ethos members report continued progress on educational goals through 12 months post-program.',
    chartSrc: '/images/outcomes/education.png',
    chartAlt: 'Chart of educational goal progress at 3, 6 and 12 months post-program',
  },
  {
    eyebrow: 'Life outcome',
    heading: 'Satisfaction with life',
    scaleCaption: 'Life-satisfaction self-report',
    body: 'Life satisfaction is a holistic measure that correlates strongly with sustained recovery. Ethos members report meaningful and sustained gains in life satisfaction across every post-program window.',
    chartSrc: '/images/outcomes/satisfaction.png',
    chartAlt: 'Chart of life-satisfaction self-report improving across the post-program survey windows',
  },
] as const;

export const reports = [
  {
    year: 2023,
    title: 'Ethos Recovery 2023 Evaluation Report',
    href: '/reports/ethos-2023-evaluation.pdf',
    sizeLabel: 'PDF',
    byline: 'Petree Consulting',
  },
  {
    year: 2020,
    title: 'Ethos Recovery 2020 Evaluation Report',
    href: '/reports/ethos-2020-evaluation.pdf',
    sizeLabel: 'PDF · 1.2 MB',
    byline: 'Petree Consulting',
  },
] as const;
