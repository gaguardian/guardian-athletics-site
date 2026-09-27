import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import {
  trainingAddOns,
  trainingCoaches,
  trainingFormats,
  trainingFrequency,
  trainingGoals,
  trainingLevels,
} from '../data/personalTraining'
import '../styles/personal-training.css'

export default function PersonalTraining() {
  const [goals, setGoals] = useState<string[]>([])
  const [level, setLevel] = useState('Competitive Athlete')
  const [format, setFormat] = useState('In-Person at Guardian')
  const [frequency, setFrequency] = useState('Flexible / Varies')
  const [addOns, setAddOns] = useState<string[]>([])

  const rankedCoaches = useMemo(() => {
    return trainingCoaches
      .map((coach) => ({
        ...coach,
        score: goals.reduce((total, goal) => total + (coach.strengths.includes(goal) ? 1 : 0), 0),
      }))
      .sort((a, b) => b.score - a.score)
  }, [goals])

  const toggleItem = (value: string, current: string[], setter: (items: string[]) => void) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value])
  }

  return (
    <div className="site-shell personal-training-page">
      <SiteHeader />

      <main>
        <section className="pt-hero section-border">
          <div className="pt-hero__copy">
            <p className="eyebrow">Personal Training</p>
            <h1>Built<br />around you.</h1>
            <p className="pt-hero__lede">
              Your goals. Your sport. Your schedule. Your coach. Personal training at Guardian is fully customizable — so you can focus on what matters most to you.
            </p>
            <a className="button button--primary" href="#build-your-plan">Create Your Plan <span aria-hidden="true">→</span></a>
            <div className="pt-hero__tagline"><span />Same people. Higher standards.</div>
          </div>

          <div className="pt-hero__visual">
            <PlaceholderImage label="Personal training hero photo placeholder" className="pt-hero__photo" />
          </div>
        </section>

        <section className="pt-plan section-border" id="build-your-plan">
          <div className="pt-section-heading">
            <h2>Build Your Training Plan</h2><span /><p>Answer a few questions and find the right coach.</p>
          </div>

          <div className="pt-builder-layout">
            <div className="pt-builder">
              <fieldset className="pt-builder-card">
                <legend>1. What do you want to work on?</legend>
                <div className="pt-check-list">
                  {trainingGoals.map((goal) => (
                    <label key={goal}>
                      <input type="checkbox" checked={goals.includes(goal)} onChange={() => toggleItem(goal, goals, setGoals)} />
                      <span>{goal}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="pt-builder-card">
                <legend>2. What&apos;s your current level?</legend>
                <div className="pt-radio-list">
                  {trainingLevels.map((item) => (
                    <label key={item.value}>
                      <input type="radio" name="training-level" checked={level === item.value} onChange={() => setLevel(item.value)} />
                      <span><strong>{item.value}</strong><small>{item.note}</small></span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="pt-builder-card">
                <legend>3. How do you want to train?</legend>
                <div className="pt-radio-list">
                  {trainingFormats.map((item) => (
                    <label key={item.value}>
                      <input type="radio" name="training-format" checked={format === item.value} onChange={() => setFormat(item.value)} />
                      <span><strong>{item.value}</strong><small>{item.note}</small></span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="pt-builder-card">
                <legend>4. How often?</legend>
                <div className="pt-radio-list">
                  {trainingFrequency.map((item) => (
                    <label key={item}>
                      <input type="radio" name="training-frequency" checked={frequency === item} onChange={() => setFrequency(item)} />
                      <span><strong>{item}</strong></span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="pt-builder-card pt-builder-card--addons">
                <legend>5. Add-ons (optional)</legend>
                <div className="pt-addons-grid">
                  {trainingAddOns.map((item) => (
                    <label key={item}>
                      <input type="checkbox" checked={addOns.includes(item)} onChange={() => toggleItem(item, addOns, setAddOns)} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <a className="button button--primary pt-show-coaches" href="#available-coaches">
                Show Me My Coaches <span aria-hidden="true">→</span>
              </a>
            </div>

            <aside className="pt-matches" id="available-coaches">
              <div className="pt-matches__heading">
                <h3>Available Coaches</h3><span>{trainingCoaches.length} Coaches</span>
              </div>

              <div className="pt-match-list">
                {rankedCoaches.map((coach, index) => {
                  const strongMatch = goals.length === 0 ? index < 4 : coach.score > 0
                  return (
                    <article className="pt-match-row" key={coach.name}>
                      <PlaceholderImage label={coach.name} className="pt-match-row__photo" />
                      <div><strong>{coach.name}</strong><span>{coach.specialty}</span></div>
                      <div className={`pt-match-status ${strongMatch ? 'is-match' : 'is-limited'}`}>
                        <span />{strongMatch ? 'Matches Your Criteria' : 'Limited Match'}
                      </div>
                      <Link to="/coaches" aria-label={`View ${coach.name}`}>→</Link>
                    </article>
                  )
                })}
              </div>

              <p className="pt-matches__note">
                All of our coaches are highly qualified. Not seeing the perfect match? You can still choose any coach that feels like the right fit.
              </p>
            </aside>
          </div>
        </section>

        <section className="pt-coaches section-border">
          <div className="pt-section-heading">
            <h2>Meet Our Coaches</h2><span /><p>Different expertise. A shared purpose.</p><Link to="/coaches">View All Coaches →</Link>
          </div>

          <div className="pt-coach-grid">
            {trainingCoaches.slice(0, 4).map((coach) => (
              <article className="pt-coach-card" key={coach.name}>
                <PlaceholderImage label={`${coach.name} portrait placeholder`} className="pt-coach-card__photo" />
                <div className="pt-coach-card__copy">
                  <h3>{coach.name}</h3>
                  <p className="pt-coach-card__specialty">{coach.specialty}</p>
                  <blockquote>“{coach.quote}”</blockquote>
                  <Link className="button button--outline" to="/coaches">View Profile <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-benefits section-border">
          <div className="pt-benefits__intro">
            <h2>More Than a Workout</h2>
            <p>Personal training is an investment in a stronger, healthier, more capable you. Whatever your goals, we&apos;re here to help you get there — on your terms.</p>
          </div>
          <article><h3>Built for You</h3><p>A plan that fits your goals, schedule, and life.</p></article>
          <article><h3>Real Accountability</h3><p>Consistent support from people who care.</p></article>
          <article><h3>Lasting Results</h3><p>More than short-term gains — a stronger, healthier you.</p></article>
        </section>

        <section className="pt-final-cta section-border">
          <div className="pt-final-cta__visual">
            <PlaceholderImage label="Personal training chalk hands photo placeholder" className="pt-final-cta__photo" />
            <div className="pt-final-cta__script">Your goals are worth it.</div>
          </div>

          <div className="pt-final-cta__copy">
            <p className="eyebrow">Take the first step</p>
            <h2>Ready to start your journey?</h2>
            <p>Build your plan. Find your coach. Become a stronger you.</p>
            <Link className="button button--primary" to="/contact">Get Started <span aria-hidden="true">→</span></Link>
          </div>

          <div className="pt-final-cta__visual pt-final-cta__visual--right">
            <PlaceholderImage label="Guardian training wall photo placeholder" className="pt-final-cta__photo" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
