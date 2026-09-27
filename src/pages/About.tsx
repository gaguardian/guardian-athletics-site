import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import '../styles/about.css'

const values = [
  {
    icon: '◎',
    title: 'People First',
    text: 'Real relationships. A supportive community.',
  },
  {
    icon: '△',
    title: 'Higher Standards',
    text: 'Discipline in everything we do.',
  },
  {
    icon: '↗',
    title: 'Progress Always',
    text: 'Small steps. Big results.',
  },
  {
    icon: '◇',
    title: 'A Clearer Path',
    text: 'Intentional coaching and real guidance to help you grow.',
  },
]

export default function About() {
  return (
    <div className="site-shell about-page">
      <SiteHeader />

      <main>
        <section className="about-hero section-border">
          <div className="about-hero__copy">
            <p className="eyebrow">About Guardian</p>

            <h1>
              People.
              <br />
              Purpose.
              <br />
              <span>Progress.</span>
            </h1>

            <p className="about-hero__lede">
              Guardian Athletics exists to help people become stronger — in body,
              mind, and life. We&apos;re more than a gym. We&apos;re a community
              built on hard work, real relationships, and a shared belief that
              higher standards lead to a better you.
            </p>

            <a className="button button--primary" href="#our-story">
              Our Story <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="about-hero__visual">
            <PlaceholderImage
              label="Guardian gym interior photo placeholder"
              className="about-hero__photo"
            />
          </div>
        </section>

        <section className="about-story section-border" id="our-story">
          <div className="about-story__copy">
            <p className="eyebrow">Built by athletes, for people like you.</p>
            <h2>Our Story</h2>

            <p>
              Guardian Athletics was founded with a simple idea: create a place
              where people could train with purpose, be supported by a community,
              and become stronger versions of themselves.
            </p>

            <p>
              What started as a small group of athletes and friends has grown
              into a community of everyday people, high performers, and
              competitive athletes — all committed to showing up, doing the work,
              and raising the standard together.
            </p>

            <p>Different backgrounds. Same purpose.</p>

            <button className="button button--outline" type="button">
              Our Journey <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="about-story__visual">
            <PlaceholderImage
              label="Guardian facility exterior photo placeholder"
              className="about-story__photo"
            />
          </div>
        </section>

        <section className="about-mission-values section-border">
          <div className="about-mission">
            <p className="eyebrow">Strength creates freedom.</p>
            <h2>Our Mission</h2>

            <p>
              To empower people to live stronger, healthier, and more purposeful
              lives through world-class coaching, a supportive community, and an
              unwavering commitment to higher standards.
            </p>

            <Link className="button button--primary" to="/coaches">
              Our Philosophy <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="about-values">
            <div className="about-values__heading">
              <p className="eyebrow">The standards we live by.</p>
              <h2>Our Values</h2>
            </div>

            <div className="about-values__grid">
              {values.map((value) => (
                <article key={value.title}>
                  <div className="about-value__icon" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-community section-border">
          <div className="about-community__visual">
            <PlaceholderImage
              label="Guardian community group photo placeholder"
              className="about-community__photo"
            />
          </div>

          <div className="about-community__copy">
            <p className="eyebrow">Our Community</p>

            <h2>
              More than
              <br />
              a gym.
            </h2>

            <p>
              At Guardian, you&apos;ll find people who challenge you, encourage
              you, and celebrate your wins — no matter how big or small. We&apos;re
              a community of doers, dreamers, and lifelong learners who believe
              in lifting each other up.
            </p>

            <Link className="button button--primary" to="/memberships">
              Become a Part of It <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="about-cta section-border">
          <div className="about-cta__statement">
            <span>Same people.</span>
            <strong>Higher standards.</strong>
          </div>

          <div className="about-cta__copy">
            <p className="eyebrow">Ready to experience Guardian?</p>
            <h2>See what makes our community different.</h2>
          </div>

          <Link className="button button--primary" to="/classes">
            Join a Class <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
