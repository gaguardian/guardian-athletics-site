export type GuardianClass = {
  title: string
  category: string
  description: string
  duration: string
  level: string
  price: string
}

export const guardianClasses: GuardianClass[] = [
  { title: 'Guardian Community', category: 'Strength & Conditioning', description: 'Full-body strength and conditioning. Work hard. Together.', duration: '90 min', level: 'All levels', price: '$20' },
  { title: 'Olympic Weightlifting', category: 'Weightlifting', description: 'Build technical skill, power and confidence under the bar.', duration: '90 min', level: 'All levels', price: '$20' },
  { title: 'Calisthenics & Skill', category: 'Gymnastics & Skill', description: 'Body control. Strength. Movement freedom.', duration: '90 min', level: 'All levels', price: '$20' },
  { title: 'Endurance & Engine', category: 'Endurance', description: 'Conditioning with purpose. Build the engine that lasts.', duration: '90 min', level: 'All levels', price: '$20' },
  { title: 'Strength & Power', category: 'Strength & Conditioning', description: 'Get stronger. Move better. Be more capable.', duration: '90 min', level: 'All levels', price: '$20' },
  { title: 'Gymnastics Fundamentals', category: 'Gymnastics & Skill', description: 'Build the basics. Unlock your potential.', duration: '90 min', level: 'All levels', price: '$20' },
  { title: 'Mobility & Recovery', category: 'Specialty', description: 'Move better. Feel better. Perform longer.', duration: '60 min', level: 'All levels', price: '$20' },
  { title: 'Specialty Courses', category: 'Specialty', description: 'Focused training for specific goals. See current offerings.', duration: 'Varies', level: 'All levels', price: 'Varies' },
]
