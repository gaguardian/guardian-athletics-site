import { useState } from 'react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import {
  membershipBenefits,
  membershipPlans,
  membershipStories,
} from '../data/memberships'
import '../styles/memberships.css'

export default function Memberships() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <div className="site-shell memberships-page">
      <SiteHeader />

      <main>
        <section className="memberships-hero section-border">
          <div className="memberships-hero__copy">
            <p className="eyebrow">Memberships</p>

            <h1>
              More than training.
              <br />
              <span>A higher standard.</span>
            </h1>

            <p className="memberships-hero__lede">
              A Guardian membership gives you more than access to classes — it
              gives you a community, expert coaching, and a clear path to become
              a stronger, more disciplined version of yourself.
            </p>

            <a className="button button--primary" href="#membership-options">
              Find Your Membership <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="memberships-hero__visual">
            <PlaceholderImage
              label="Membership hero photo placeholder"
              className="memberships-hero__photo"
            />
          </div>
        </section>

        <section
          className="membership-options section-border"
          id="membership-options"
        >
          <div className="membership-options__heading">
            <div>
              <p className="eyebrow">Invest in yourself</p>
              <h2>Membership Options</h2>
            </div>

            <div className="billing-toggle" aria-label="Billing period">
              <button
                type="button"
                className={billing === 'monthly' ? 'is-active' : ''}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </button>
              <button
                type="button"
                className={billing === 'annual' ? 'is-active' : ''}
                onClick={() => setBilling('annual')}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="membership-grid">
            {membershipPlans.map((plan) => {
              const price =
                plan.fixedPrice ??
                (billing === 'monthly'
                  ? plan.monthlyPrice
                  : plan.annualPrice)

              const billingCopy =
                plan.fixedSubtext ??
                (plan.name === 'Monthly Membership' && billing === 'annual'
                  ? 'monthly equivalent with annual commitment'
                  : plan.billingLabel)

              return (
                <article
                  className={`membership-card ${
                    plan.featured ? 'membership-card--featured' : ''
                  }`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <div className="membership-card__ribbon">Most Popular</div>
                  )}

                  <div className="membership-card__content">
                    <p className="membership-card__tagline">{plan.tagline}</p>
                    <h3>{plan.name}</h3>

                    <div className="membership-card__price">
                      <strong>{price}</strong>
                      <span>{billingCopy}</span>
                    </div>

                    <ul>
                      {plan.benefits.map((benefit) => (
                        <li key={benefit}>
                          <span aria-hidden="true">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`button ${
                        plan.featured ? 'button--primary' : 'button--outline'
                      } membership-card__button`}
                      type="button"
                    >
                      {plan.buttonLabel}
                      {plan.featured && <span aria-hidden="true">→</span>}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="membership-benefits section-border">
          <div className="membership-benefits__visual">
            <PlaceholderImage
              label="Guardian gym equipment photo placeholder"
              className="membership-benefits__photo"
            />
          </div>

          <div className="membership-benefits__content">
            <p className="eyebrow">Members get more</p>
            <h2>Built around progress.</h2>

            <div className="membership-benefits__grid">
              {membershipBenefits.map((benefit) => (
                <article key={benefit.title}>
                  <div className="membership-benefit__icon" aria-hidden="true">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="membership-stories section-border">
          <div className="membership-stories__heading">
            <div>
              <p className="eyebrow">Real people. Real progress.</p>
              <h2>Why members stay.</h2>
            </div>

            <Link className="text-link" to="/#stories">
              More Stories →
            </Link>
          </div>

          <div className="membership-story-grid">
            {membershipStories.map((story, index) => (
              <article className="membership-story-card" key={story.name}>
                <PlaceholderImage
                  label={`Member portrait ${index + 1}`}
                  className="membership-story-card__photo"
                />

                <div className="membership-story-card__copy">
                  <blockquote>“{story.quote}”</blockquote>
                  <p className="membership-story-card__name">
                    — {story.name}
                  </p>
                  <p className="muted">{story.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="membership-cta section-border">
          <div className="membership-cta__visual">
            <PlaceholderImage
              label="Training barbell photo placeholder"
              className="membership-cta__photo"
            />
            <div className="membership-cta__script">
              Discipline builds freedom.
            </div>
          </div>

          <div className="membership-cta__copy">
            <p className="eyebrow">Ready to take the next step?</p>
            <h2>Choose your path.</h2>

            <p>
              Membership and payment actions are placeholders for now. We can
              connect these buttons to the final booking and payment system
              when we circle back through the site.
            </p>

            <div className="button-row">
              <a className="button button--primary" href="#membership-options">
                Join Today <span aria-hidden="true">→</span>
              </a>
              <Link className="button button--outline" to="/schedule">
                View Schedule
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
