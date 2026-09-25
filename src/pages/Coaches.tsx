import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { coaches } from '../data/coaches'
import '../styles/coaches.css'

export default function Coaches() {
  return (
    <div className="site-shell coaches-page">
      <SiteHeader />

      <main>
        <section className="coaches-hero section-border">
          <div className="coaches-hero__copy">
            <p className="eyebrow">Our Coaches</p>

            <h1>
              Real people.
              <br />
              Real experience.
              <br />
              <span>A stronger you.</span>
            </h1>

            <p className="coaches-hero__lede">
              Our coaches are more than instructors — they&apos;re mentors,
              motivators, and teammates. Each brings a unique background, but
              they all share the same mission: to help you become a stronger,
              more disciplined version of yourself.
            </p>

            <a className="button button--primary" href="#meet-the-coaches">
              Meet Our Team <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="coaches-hero__visual">
            <PlaceholderImage
              label="Coaches hero photo placeholder"
              className="coaches-hero__photo"
            />
          </div>
        </section>

        <section
          className="coaches-directory section-border"
          id="meet-the-coaches"
        >
          <div className="coaches-directory__heading">
            <div>
              <p className="eyebrow">Different backgrounds. A shared purpose.</p>
              <h2>Meet the Coaches</h2>
            </div>
          </div>

          <div className="coaches-grid">
            {coaches.map((coach, index) => (
              <article className="coach-card" key={coach.name}>
                <PlaceholderImage
                  label={`${coach.name} portrait placeholder`}
                  className="coach-card__photo"
                />

                <div className="coach-card__body">
                  <h3>{coach.name}</h3>
                  <p className="coach-card__title">{coach.title}</p>

                  <p className="coach-card__description">{coach.description}</p>

                  <div className="coach-card__specialties">
                    <p>Specialties</p>

                    <ul>
                      {coach.specialties.map((specialty) => (
                        <li key={specialty}>
                          <span aria-hidden="true">›</span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="button button--outline coach-card__button" type="button">
                    View Bio
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="coaching-philosophy section-border">
          <div className="coaching-philosophy__visual">
            <PlaceholderImage
              label="Coach leading class photo placeholder"
              className="coaching-philosophy__photo"
            />
          </div>

          <div className="coaching-philosophy__copy">
            <p className="eyebrow">Our Coaching Philosophy</p>

            <h2>
              People first.
              <br />
              Progress always.
            </h2>

            <p>
              We coach with intention, lead with empathy, and hold high
              standards — because we&apos;ve seen what&apos;s possible when people
              are supported, challenged, and believed in.
            </p>

            <button className="button button--primary" type="button">
              Our Philosophy <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        <section className="coaches-cta section-border">
          <div className="coaches-cta__statement">
            <span>Same people.</span>
            <strong>Higher standards.</strong>
          </div>

          <div className="coaches-cta__copy">
            <h2>Ready to train with our team?</h2>
            <p>Find a class, meet a coach, and take the next step.</p>
          </div>

          <Link className="button button--primary" to="/schedule">
            View Class Schedule <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
