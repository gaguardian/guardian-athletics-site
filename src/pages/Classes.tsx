import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { guardianClasses } from '../data/classes'
import '../styles/classes.css'

const filters = ['All Classes','Strength & Conditioning','Weightlifting','Gymnastics & Skill','Endurance','Specialty']

export default function Classes() {
  return (
    <div className="site-shell classes-page">
      <SiteHeader />
      <main>
        <section className="classes-hero section-border">
          <div className="classes-hero__copy">
            <p className="eyebrow">Our Classes</p>
            <h1>Real training.<br />Real people.<br />Real progress.</h1>
            <p className="classes-hero__lede">Purpose-built classes designed to make you stronger, more capable, and part of something bigger.</p>
            <div className="classes-hero__tagline"><span />Show up. Work. Belong.</div>
          </div>
          <div className="classes-hero__visual">
            <PlaceholderImage label="Classes hero photo placeholder" className="classes-hero__photo" />
          </div>
        </section>

        <section className="class-browser section-border">
          <div className="class-filter-bar">
            {filters.map((filter, index) => (
              <button className={`class-filter ${index === 0 ? 'class-filter--active' : ''}`} type="button" key={filter}>{filter}</button>
            ))}
            <Link className="class-filter class-filter--schedule" to="/schedule">▣ View Schedule</Link>
          </div>

          <div className="classes-card-grid">
            {guardianClasses.map((item) => (
              <article className="classes-card" key={item.title}>
                <PlaceholderImage label={`${item.title} photo placeholder`} className="classes-card__photo" />
                <div className="classes-card__body">
                  <p className="classes-card__category">{item.category}</p>
                  <h2>{item.title}</h2>
                  <p className="classes-card__description">{item.description}</p>
                  <div className="classes-card__meta"><span>◷ {item.duration}</span><span>♙ {item.level}</span></div>
                  <div className="classes-card__footer">
                    <strong>{item.price}</strong>
                    <button className="button button--primary button--small" type="button">Learn More <span aria-hidden="true">→</span></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="classes-community section-border">
          <div className="classes-community__image">
            <PlaceholderImage label="Guardian community photo placeholder" className="classes-community__photo" />
          </div>
          <div className="classes-community__copy">
            <p className="eyebrow">More than a class</p>
            <h2>A community.<br />A standard.</h2>
            <p>Our classes are open to anyone willing to put in the work. You don&apos;t have to be an elite athlete — just someone who wants to get better. Here, you&apos;ll find expert coaching, a supportive community, and a higher standard.</p>
            <div className="button-row">
              <Link className="button button--primary" to="/schedule">Join a Class <span aria-hidden="true">→</span></Link>
              <Link className="button button--outline" to="/schedule">View Schedule</Link>
            </div>
          </div>
        </section>

        <section className="classes-final-cta section-border">
          <div className="classes-final-cta__image">
            <PlaceholderImage label="Training equipment photo placeholder" className="classes-final-cta__photo" />
          </div>
          <div className="classes-final-cta__copy">
            <div><h2>Ready to train?</h2><p>Your next class is just a click away.</p></div>
            <div className="button-row">
              <Link className="button button--primary" to="/schedule">View Schedule <span aria-hidden="true">→</span></Link>
              <Link className="button button--outline" to="/schedule">Join a Class</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
