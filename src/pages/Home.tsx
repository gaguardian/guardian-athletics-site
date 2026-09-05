import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

const classes = [
  { day: 'MON · 6:00 PM', title: 'Guardian Community', subtitle: 'Strength & Conditioning', price: '$20' },
  { day: 'WED · 6:00 PM', title: 'Olympic Weightlifting', subtitle: 'Technique & Training', price: '$20' },
  { day: 'SAT · 10:00 AM', title: 'Calisthenics & Skill', subtitle: 'Body Control Development', price: '$20' },
  { day: 'SUN · 10:00 AM', title: 'Endurance & Engine', subtitle: 'Conditioning Focus', price: '$20' },
]

const stories = [
  {
    name: 'Sara M.',
    meta: 'Community Athlete',
    quote: 'Guardian has completely changed my mindset and my confidence. I’m stronger mentally and physically than I’ve ever been.',
  },
  {
    name: 'Josh T.',
    meta: 'Member Since 2024',
    quote: 'The coaching, the people, the environment — it’s different here. You’re not just a number. You’re part of something bigger.',
  },
  {
    name: 'Emily R.',
    meta: 'Community Athlete',
    quote: 'I came for the workouts and stayed for the community. Guardian pushes me to be a better version of myself.',
  },
]

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />

      <main>
        <section className="hero section-border">
          <div className="hero-copy">
            <p className="eyebrow">Athletic excellence. Personal growth.</p>
            <h1>
              Train with purpose.
              <span>Join the standard.</span>
            </h1>
            <p className="hero-lede">
              More than a workout. A community built on discipline, hard work,
              and becoming the highest version of yourself.
            </p>

            <div className="button-row">
              <a className="button button--primary" href="#classes">
                Join a Class <span aria-hidden="true">→</span>
              </a>
              <a className="button button--outline" href="#story">
                Watch Video
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <PlaceholderImage label="Hero photo placeholder" className="hero-photo" />
            <button className="play-button" type="button" aria-label="Play story video">
              ▶
            </button>
            <p className="hero-video-label">Watch the full story</p>
          </div>
        </section>

        <section className="section section-border" id="classes">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Show up. Work. Belong.</p>
              <h2>Upcoming Classes</h2>
            </div>
            <a className="text-link" href="#classes">
              View full schedule →
            </a>
          </div>

          <div className="class-grid">
            {classes.map((item, index) => (
              <article className="class-card" key={item.title}>
                <PlaceholderImage label={`Class photo ${index + 1}`} className="class-photo" />
                <div className="class-card__body">
                  <p className="class-day">{item.day}</p>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.subtitle}</p>
                  <div className="class-meta">
                    <span>◷ 90 MIN</span>
                    <span>ALL LEVELS</span>
                  </div>
                  <div className="class-footer">
                    <strong>{item.price}</strong>
                    <a className="button button--primary button--small" href="#footer">
                      Reserve Your Spot
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-band section-border" id="story">
          <div className="story-image-wrap">
            <PlaceholderImage label="Gym / mountain lifestyle placeholder" className="story-photo" />
            <div className="story-script">A higher standard.</div>
          </div>

          <div className="story-copy">
            <p>
              Guardian Athletics exists to build stronger people — in the gym
              and in life. We train with purpose, hold ourselves to a higher
              standard, and create a community that refuses to be average.
            </p>
            <a className="button button--outline" href="#footer">
              Our Story <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="story-image-wrap story-image-wrap--right">
            <PlaceholderImage label="Athlete back photo placeholder" className="story-photo" />
          </div>
        </section>

        <section className="section section-border" id="stories">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Real people. Real progress.</p>
              <h2>Member Stories</h2>
            </div>
            <a className="text-link" href="#stories">
              See more stories →
            </a>
          </div>

          <div className="story-grid">
            {stories.map((story, index) => (
              <article className="testimonial-card" key={story.name}>
                <PlaceholderImage label={`Member portrait ${index + 1}`} className="testimonial-photo" />
                <div>
                  <blockquote>“{story.quote}”</blockquote>
                  <p className="testimonial-name">— {story.name}</p>
                  <p className="muted">{story.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta section-border">
          <div>
            <p className="eyebrow">Your first class is just a click away.</p>
            <h2>Ready to experience it?</h2>
          </div>

          <div className="button-row">
            <a className="button button--primary" href="#classes">
              Join a Class <span aria-hidden="true">→</span>
            </a>
            <a className="button button--outline" href="#classes">
              View Schedule
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
