import { useState } from 'react'
import type { FormEvent } from 'react'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import PlaceholderImage from '../components/PlaceholderImage'
import '../styles/contact.css'

const faqs = [
  {
    question: 'How do I get started?',
    answer:
      'Start by choosing a class from the schedule. Booking and onboarding details will be connected when the final registration system is selected.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Trial and introductory offers are still being finalized. This placeholder can be updated once the gym confirms the policy.',
  },
  {
    question: 'What classes do you offer?',
    answer:
      'Guardian plans to offer strength and conditioning, Olympic weightlifting, calisthenics and skill work, endurance, mobility, and specialty training.',
  },
  {
    question: 'Do I need to be competitive to join?',
    answer:
      'No. The site is designed around training for a range of experience levels, from first-time participants to experienced athletes.',
  },
  {
    question: 'What should I bring to my first class?',
    answer:
      'Comfortable training clothes, appropriate shoes, water, and anything specified by the coach or booking confirmation.',
  },
  {
    question: 'Can I drop in if I’m not a member?',
    answer:
      'The current membership mockup includes a drop-in option. Final pricing and booking rules can be connected later.',
  },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell contact-page">
      <SiteHeader />

      <main>
        <section className="contact-hero section-border">
          <div className="contact-hero__copy">
            <p className="eyebrow">Contact</p>

            <h1>
              Let&apos;s
              <br />
              <span>talk.</span>
            </h1>

            <p className="contact-hero__lede">
              Questions, coaching, memberships, or just want to connect — we&apos;d
              love to hear from you.
            </p>

            <a className="button button--primary" href="#contact-form">
              Send Us a Message <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="contact-hero__visual">
            <PlaceholderImage
              label="Guardian gym wall photo placeholder"
              className="contact-hero__photo"
            />
          </div>
        </section>

        <section className="contact-main section-border" id="contact-form">
          <div className="contact-form-panel">
            <div className="contact-section-heading">
              <p className="eyebrow">Real people. Real conversations.</p>
              <h2>Get in Touch</h2>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label>
                  <span>Name *</span>
                  <input type="text" name="name" placeholder="Name" required />
                </label>

                <label>
                  <span>Email *</span>
                  <input type="email" name="email" placeholder="Email" required />
                </label>
              </div>

              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="Phone (optional)" />
              </label>

              <label>
                <span>Subject *</span>
                <select name="subject" required defaultValue="">
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option>Classes</option>
                  <option>Memberships</option>
                  <option>Coaching</option>
                  <option>Drop-In</option>
                  <option>Partnerships</option>
                  <option>Media</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                <span>Message *</span>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Message"
                  required
                />
              </label>

              <button className="button button--primary" type="submit">
                Send Message <span aria-hidden="true">→</span>
              </button>

              {submitted && (
                <p className="contact-form__notice">
                  Form submission is working as a front-end placeholder. We&apos;ll
                  connect actual email delivery later.
                </p>
              )}
            </form>
          </div>

          <aside className="contact-details">
            <article>
              <div className="contact-details__icon" aria-hidden="true">⌖</div>
              <div>
                <h3>Our Location</h3>
                <p>
                  2020 S College Ave Suite 2C
                  <br />
                  Fort Collins, CO 80525
                </p>
              </div>
            </article>

            <article>
              <div className="contact-details__icon" aria-hidden="true">✉</div>
              <div>
                <h3>Email</h3>
                <p>
                  placeholder@guardian.com
                  <br />
                  We typically respond within 24 hours.
                </p>
              </div>
            </article>

            <article>
              <div className="contact-details__icon" aria-hidden="true">☎</div>
              <div>
                <h3>Phone</h3>
                <p>
                  (970) 555-0100
                  <br />
                  Call or text. We&apos;re happy to help.
                </p>
              </div>
            </article>

            <article>
              <div className="contact-details__icon" aria-hidden="true">◎</div>
              <div>
                <h3>Instagram</h3>
                <p>
                  @guardianathletics
                  <br />
                  Daily training, member stories, and updates.
                </p>
              </div>
            </article>

            <article>
              <div className="contact-details__icon" aria-hidden="true">f</div>
              <div>
                <h3>Facebook</h3>
                <p>
                  Guardian Athletics
                  <br />
                  Community updates and events.
                </p>
              </div>
            </article>

            <article>
              <div className="contact-details__icon" aria-hidden="true">…</div>
              <div>
                <h3>General Inquiries</h3>
                <p>Classes, memberships, drop-ins, partnerships, and media requests.</p>
              </div>
            </article>

            <button className="button button--outline contact-details__button" type="button">
              Visit Us on Maps <span aria-hidden="true">→</span>
            </button>
          </aside>
        </section>

        <section className="contact-quote-band section-border">
          <div className="contact-quote-band__visual">
            <PlaceholderImage
              label="Guardian training wall photo placeholder"
              className="contact-quote-band__photo"
            />
          </div>

          <blockquote>
            “People first.
            <br />
            Progress always.”
            <span>— Guardian Athletics</span>
          </blockquote>
        </section>

        <section className="contact-faq section-border">
          <div className="contact-faq__content">
            <div className="contact-section-heading">
              <p className="eyebrow">Quick answers. More progress.</p>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const open = openFaq === index

                return (
                  <article className={`faq-item ${open ? 'is-open' : ''}`} key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : index)}
                      aria-expanded={open}
                    >
                      <span>{faq.question}</span>
                      <span aria-hidden="true">{open ? '−' : '+'}</span>
                    </button>

                    {open && <p>{faq.answer}</p>}
                  </article>
                )
              })}
            </div>
          </div>

          <div className="contact-map">
            <PlaceholderImage
              label="Map placeholder — Fort Collins"
              className="contact-map__image"
            />
          </div>
        </section>

        <section className="contact-cta section-border">
          <div className="contact-cta__statement">
            <span>Same people.</span>
            <strong>Higher standards.</strong>
          </div>

          <div className="contact-cta__copy">
            <p className="eyebrow">Still have questions?</p>
            <h2>We&apos;re here to help.</h2>
            <p>Reach out anytime.</p>
          </div>

          <a className="button button--primary" href="#contact-form">
            Contact Us <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
