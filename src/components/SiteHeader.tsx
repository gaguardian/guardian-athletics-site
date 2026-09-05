const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Classes', href: '#classes' },
  { label: 'Schedule', href: '#classes' },
  { label: 'Memberships', href: '#stories' },
  { label: 'Coaches', href: '#story' },
  { label: 'About', href: '#story' },
  { label: 'Shop', href: '#stories' },
  { label: 'Contact', href: '#footer' },
]

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Guardian Athletics home">
        <img src="/GuardianLogo.png" alt="Guardian Athletics" />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button--primary header-cta" href="#classes">
        Join a Class <span aria-hidden="true">→</span>
      </a>
    </header>
  )
}
