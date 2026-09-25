import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-brand">
        <img src="/GuardianLogo.png" alt="Guardian Athletics" />
        <p>Athletic excellence. Personal growth.</p>
        <p className="gold-copy">Purpose. Discipline. Results.</p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <Link to="/">Home</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/memberships">Memberships</Link>
        <Link to="/coaches">Coaches</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="footer-meta">
        <p>Fort Collins, Colorado</p>
        <p>Train with purpose.</p>
        <p className="muted">placeholder@guardian.com</p>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Guardian Athletics. All rights reserved.</span>
      </div>
    </footer>
  )
}
