export default function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-brand">
        <img src="/GuardianLogo.png" alt="Guardian Athletics" />
        <p>Athletic excellence. Personal growth.</p>
        <p className="gold-copy">Purpose. Discipline. Results.</p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#top">Home</a>
        <a href="#classes">Classes</a>
        <a href="#classes">Schedule</a>
        <a href="#stories">Memberships</a>
        <a href="#story">Coaches</a>
        <a href="#story">About</a>
        <a href="#stories">Shop</a>
        <a href="#footer">Contact</a>
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
