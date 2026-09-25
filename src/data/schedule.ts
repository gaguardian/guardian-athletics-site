export type ScheduleItem = {
  day: string
  date: string
  time: string
  title: string
  category: string
  coach: string
  duration: string
  price: string
}

export const scheduleItems: ScheduleItem[] = [
  { day: 'Mon', date: 'Sep 28', time: '6:00 AM', title: 'Strength & Conditioning', category: 'Guardian Community', coach: 'Coach Taylor', duration: '60 min', price: '$20' },
  { day: 'Mon', date: 'Sep 28', time: '6:00 PM', title: 'Olympic Weightlifting', category: 'Technique & Training', coach: 'Coach Alex', duration: '90 min', price: '$20' },

  { day: 'Tue', date: 'Sep 29', time: '7:00 AM', title: 'Calisthenics & Skill', category: 'Body Control Development', coach: 'Coach Taylor', duration: '60 min', price: '$20' },
  { day: 'Tue', date: 'Sep 29', time: '6:00 PM', title: 'Endurance & Engine', category: 'Conditioning Focus', coach: 'Coach Jordan', duration: '60 min', price: '$20' },

  { day: 'Wed', date: 'Sep 30', time: '6:00 AM', title: 'Strength & Conditioning', category: 'Guardian Community', coach: 'Coach Taylor', duration: '60 min', price: '$20' },
  { day: 'Wed', date: 'Sep 30', time: '5:30 PM', title: 'Mobility & Recovery', category: 'Move Better', coach: 'Coach Alex', duration: '60 min', price: '$20' },

  { day: 'Thu', date: 'Oct 1', time: '7:00 AM', title: 'Olympic Weightlifting', category: 'Technique & Training', coach: 'Coach Alex', duration: '90 min', price: '$20' },
  { day: 'Thu', date: 'Oct 1', time: '6:00 PM', title: 'Calisthenics & Skill', category: 'Body Control Development', coach: 'Coach Taylor', duration: '60 min', price: '$20' },

  { day: 'Fri', date: 'Oct 2', time: '6:00 AM', title: 'Endurance & Engine', category: 'Conditioning Focus', coach: 'Coach Jordan', duration: '60 min', price: '$20' },
  { day: 'Fri', date: 'Oct 2', time: '6:00 PM', title: 'Strength & Conditioning', category: 'Guardian Community', coach: 'Coach Taylor', duration: '60 min', price: '$20' },

  { day: 'Sat', date: 'Oct 3', time: '9:00 AM', title: 'Guardian Community', category: 'Full-Body Workout', coach: 'Coach Team', duration: '60 min', price: '$20' },
  { day: 'Sat', date: 'Oct 3', time: '10:30 AM', title: 'Mobility & Recovery', category: 'Move Better', coach: 'Coach Alex', duration: '60 min', price: '$20' },

  { day: 'Sun', date: 'Oct 4', time: '10:00 AM', title: 'Endurance & Engine', category: 'Conditioning Focus', coach: 'Coach Jordan', duration: '60 min', price: '$20' },
]
