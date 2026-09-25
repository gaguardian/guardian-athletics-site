export type Coach = {
  name: string
  title: string
  description: string
  specialties: string[]
}

export const coaches: Coach[] = [
  {
    name: 'Taylor M.',
    title: 'Head Coach',
    description:
      'Strength, discipline, and people. Taylor leads with a relentless commitment to helping others become the strongest version of themselves.',
    specialties: [
      'Strength & Conditioning',
      'Program Design',
      'Athlete Development',
    ],
  },
  {
    name: 'Alex R.',
    title: 'Strength Coach',
    description:
      'Alex brings energy, expertise, and a people-first approach to every class. Her coaching focuses on building confidence through consistent progress.',
    specialties: [
      'Olympic Lifting',
      'Functional Fitness',
      'Beginner Coaching',
    ],
  },
  {
    name: 'Jordan K.',
    title: 'Conditioning Coach',
    description:
      'Jordan’s passion is helping people push past limits. His sessions are challenging, intentional, and built to make you more capable — inside and outside the gym.',
    specialties: [
      'Engine / Endurance',
      'HIIT & MetCon',
      'Mobility & Recovery',
    ],
  },
  {
    name: 'Sam T.',
    title: 'Skill Coach',
    description:
      'Sam specializes in gymnastics, body control, and movement quality. She’s passionate about helping athletes of all levels move better, feel stronger, and stay consistent.',
    specialties: [
      'Gymnastics & Skill Work',
      'Movement Coaching',
      'Mobility',
    ],
  },
]
