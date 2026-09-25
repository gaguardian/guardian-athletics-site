export type MembershipPlan = {
  name: string
  tagline: string
  monthlyPrice?: string
  annualPrice?: string
  fixedPrice?: string
  fixedSubtext?: string
  billingLabel?: string
  featured?: boolean
  buttonLabel: string
  benefits: string[]
}

export const membershipPlans: MembershipPlan[] = [
  {
    name: 'Drop-In',
    tagline: 'Simple. Flexible.',
    fixedPrice: '$20',
    fixedSubtext: 'per class',
    buttonLabel: 'Book a Class',
    benefits: [
      'Access to any regularly scheduled class',
      'All fitness levels welcome',
      'Great for first-timers or occasional training',
    ],
  },
  {
    name: 'Class Pack',
    tagline: 'Train more. Save more.',
    fixedPrice: '$160',
    fixedSubtext: '10 classes ($16/class)',
    buttonLabel: 'Buy Class Pack',
    benefits: [
      'Use for any class',
      'No expiration placeholder',
      'Ideal for consistent training without a full commitment',
    ],
  },
  {
    name: 'Monthly Membership',
    tagline: 'Build momentum.',
    monthlyPrice: '$149',
    annualPrice: '$124',
    billingLabel: 'per month',
    featured: true,
    buttonLabel: 'Join Monthly',
    benefits: [
      'Unlimited access to regularly scheduled classes',
      'Priority booking',
      'Member-only events and specialty classes',
      'Be part of the Guardian community',
    ],
  },
  {
    name: 'Annual Membership',
    tagline: 'The highest standard.',
    monthlyPrice: '$1,490',
    annualPrice: '$1,490',
    billingLabel: 'per year',
    buttonLabel: 'Join Annual',
    benefits: [
      'Unlimited access to regularly scheduled classes',
      'Best value',
      'Priority booking',
      'Member-only events and specialty classes',
      'Full commitment to a stronger you',
    ],
  },
]

export const membershipBenefits = [
  {
    icon: '◎',
    title: 'A supportive community',
    text: 'Train with people who push you forward.',
  },
  {
    icon: 'Ⅰ',
    title: 'Expert coaching',
    text: 'Clear instruction, feedback, and accountability.',
  },
  {
    icon: '▣',
    title: 'Member-only events',
    text: 'Special sessions, workshops, and community events.',
  },
  {
    icon: '△',
    title: 'A clear path to progress',
    text: 'Structure designed to help you keep moving forward.',
  },
]

export const membershipStories = [
  {
    name: 'Sara M.',
    meta: 'Member Since 2023',
    quote:
      'Guardian has completely changed my mindset and my confidence. I’m stronger mentally and physically than I’ve ever been.',
  },
  {
    name: 'Josh T.',
    meta: 'Member Since 2024',
    quote:
      'The coaching, the people, the environment — it’s different here. You’re not just a number. You’re part of something bigger.',
  },
  {
    name: 'Emily R.',
    meta: 'Member Since 2023',
    quote:
      'I came for the workouts and stayed for the community. Guardian pushes me to be a better version of myself.',
  },
]
