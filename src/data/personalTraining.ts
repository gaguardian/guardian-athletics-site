export type TrainingCoach = {
  name: string
  specialty: string
  quote: string
  strengths: string[]
}

export const trainingGoals = [
  'Strength & Power',
  'Olympic Lifting',
  'Gymnastics / Bodyweight',
  'Conditioning / Endurance',
  'Mobility & Movement',
  'General Fitness',
  'Sport-Specific',
  'Nutrition Coaching',
]

export const trainingLevels = [
  { value: 'Beginner', note: 'New to training' },
  { value: 'Intermediate', note: 'Consistent experience' },
  { value: 'Advanced', note: 'High-level experience' },
  { value: 'Competitive Athlete', note: 'I already compete in a sport' },
]

export const trainingFormats = [
  { value: 'In-Person at Guardian', note: 'Our Fort Collins facility' },
  { value: 'Virtual Coaching', note: 'Train from anywhere' },
  { value: 'Not Sure', note: 'Let’s figure it out together' },
]

export const trainingFrequency = [
  '1 Day / Week',
  '2 Days / Week',
  '3 Days / Week',
  '4+ Days / Week',
  'Flexible / Varies',
]

export const trainingAddOns = [
  'Nutrition Coaching',
  'Extra Programming Between Sessions',
  'Small Group (2–4)',
  '1-on-1 Focus',
  'Competition Prep',
  'Movement Assessment',
  'Recovery & Mobility Work',
  'No Add-Ons',
]

export const trainingCoaches: TrainingCoach[] = [
  { name: 'Taylor M.', specialty: 'Strength & Olympic Lifting', quote: 'I love helping people unlock strength they didn’t think they had.', strengths: ['Strength & Power', 'Olympic Lifting', 'Sport-Specific'] },
  { name: 'Alex R.', specialty: 'Gymnastics & Movement', quote: 'Better movement creates a better life.', strengths: ['Gymnastics / Bodyweight', 'Mobility & Movement', 'General Fitness'] },
  { name: 'Jordan K.', specialty: 'Conditioning & Endurance', quote: 'Discipline today. Freedom tomorrow.', strengths: ['Conditioning / Endurance', 'General Fitness', 'Sport-Specific'] },
  { name: 'Sam T.', specialty: 'General Fitness & Nutrition', quote: 'Stronger people make happier humans.', strengths: ['General Fitness', 'Nutrition Coaching', 'Mobility & Movement'] },
  { name: 'Chris D.', specialty: 'Sport-Specific Training', quote: 'Train for what you want to do better.', strengths: ['Sport-Specific', 'Strength & Power'] },
  { name: 'Jess K.', specialty: 'Nutrition & Lifestyle', quote: 'Consistency changes more than intensity ever will.', strengths: ['Nutrition Coaching', 'General Fitness'] },
  { name: 'Mike R.', specialty: 'Strength & Performance', quote: 'Build the base, then build the athlete.', strengths: ['Strength & Power', 'Olympic Lifting'] },
  { name: 'Dan L.', specialty: 'Competitive Athletics', quote: 'Preparation creates confidence.', strengths: ['Sport-Specific', 'Conditioning / Endurance', 'Strength & Power'] },
]
