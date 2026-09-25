import { useMemo, useState } from 'react'
import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { scheduleItems } from '../data/schedule'
import '../styles/schedule.css'

const dayOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function Schedule() {
  const [classFilter, setClassFilter] = useState('All Classes')
  const [coachFilter, setCoachFilter] = useState('All Coaches')
  const [timeFilter, setTimeFilter] = useState('All Times')
  const [view, setView] = useState<'week' | 'month'>('week')

  const filteredItems = useMemo(() => {
    return scheduleItems.filter((item) => {
      const classMatches =
        classFilter === 'All Classes' ||
        item.title === classFilter ||
        item.category === classFilter

      const coachMatches =
        coachFilter === 'All Coaches' || item.coach === coachFilter

      const hour = Number(item.time.split(':')[0])
      const isPM = item.time.includes('PM')
      const hour24 = isPM && hour !== 12 ? hour + 12 : !isPM && hour === 12 ? 0 : hour

      const timeMatches =
        timeFilter === 'All Times' ||
        (timeFilter === 'Morning' && hour24 < 12) ||
        (timeFilter === 'Afternoon' && hour24 >= 12 && hour24 < 17) ||
        (timeFilter === 'Evening' && hour24 >= 17)

      return classMatches && coachMatches && timeMatches
    })
  }, [classFilter, coachFilter, timeFilter])

  const grouped = dayOrder
    .map((day) => ({
      day,
      items: filteredItems.filter((item) => item.day === day),
    }))
    .filter((group) => group.items.length > 0)

  const clearFilters = () => {
    setClassFilter('All Classes')
    setCoachFilter('All Coaches')
    setTimeFilter('All Times')
  }

  return (
    <div className="site-shell schedule-page">
      <SiteHeader />

      <main>
        <section className="schedule-hero section-border">
          <div className="schedule-hero__copy">
            <p className="eyebrow">Class Schedule</p>
            <h1>
              Show up.
              <br />
              Put in the work.
              <br />
              <span>Be a different you.</span>
            </h1>

            <p className="schedule-hero__lede">
              Find a class, reserve your spot, and take the next step.
              <br />
              All fitness levels are welcome.
            </p>

            <a className="button button--primary" href="#weekly-schedule">
              Book Your First Class <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="schedule-hero__visual">
            <PlaceholderImage
              label="Schedule hero photo placeholder"
              className="schedule-hero__photo"
            />
          </div>
        </section>

        <section className="schedule-browser section-border" id="weekly-schedule">
          <div className="schedule-toolbar">
            <div className="schedule-range">
              <button type="button" aria-label="Previous week">←</button>
              <button type="button" aria-label="Next week">→</button>
              <strong>Sep 28 – Oct 4, 2026</strong>
            </div>

            <div className="schedule-view-toggle">
              <button type="button" className="schedule-today">Today</button>
              <button
                type="button"
                className={view === 'week' ? 'is-active' : ''}
                onClick={() => setView('week')}
              >
                Week
              </button>
              <button
                type="button"
                className={view === 'month' ? 'is-active' : ''}
                onClick={() => setView('month')}
              >
                Month
              </button>
            </div>
          </div>

          <div className="schedule-filters">
            <select value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
              <option>All Classes</option>
              <option>Strength & Conditioning</option>
              <option>Olympic Weightlifting</option>
              <option>Calisthenics & Skill</option>
              <option>Endurance & Engine</option>
              <option>Mobility & Recovery</option>
              <option>Guardian Community</option>
            </select>

            <select value={coachFilter} onChange={(e) => setCoachFilter(e.target.value)}>
              <option>All Coaches</option>
              <option>Coach Taylor</option>
              <option>Coach Alex</option>
              <option>Coach Jordan</option>
              <option>Coach Team</option>
            </select>

            <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
              <option>All Times</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <button type="button" className="schedule-clear" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>

          <div className="schedule-list">
            {grouped.length > 0 ? (
              grouped.map((group) => {
                const first = group.items[0]
                return (
                  <section className="schedule-day" key={group.day}>
                    <div className="schedule-day__label">
                      <strong>{group.day}</strong>
                      <span>{first.date}</span>
                    </div>

                    <div className="schedule-day__classes">
                      {group.items.map((item) => (
                        <article
                          className="schedule-row"
                          key={`${item.day}-${item.time}-${item.title}`}
                        >
                          <div className="schedule-row__time">{item.time}</div>

                          <div className="schedule-row__class">
                            <h2>{item.title}</h2>
                            <p>{item.category}</p>
                          </div>

                          <div className="schedule-row__coach">{item.coach}</div>

                          <div className="schedule-row__duration">
                            <span aria-hidden="true">◷</span> {item.duration}
                          </div>

                          <div className="schedule-row__price">{item.price}</div>

                          <button className="button button--primary button--small" type="button">
                            Reserve Spot
                          </button>
                        </article>
                      ))}
                    </div>
                  </section>
                )
              })
            ) : (
              <div className="schedule-empty">
                No classes match those filters.
              </div>
            )}
          </div>
        </section>

        <section className="schedule-cta section-border">
          <div className="schedule-cta__visual">
            <PlaceholderImage
              label="Barbell photo placeholder"
              className="schedule-cta__photo"
            />
            <div className="schedule-cta__script">Purpose. Discipline. Results.</div>
          </div>

          <div className="schedule-cta__copy">
            <p className="eyebrow">Your next class is a stronger you.</p>
            <h2>Show up. Start here.</h2>
            <p>
              The schedule above is placeholder content for now. Once the final
              class system is selected, this section can pull from the real
              booking source instead of hard-coded data.
            </p>
            <a className="button button--primary" href="#weekly-schedule">
              Book a Class <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
