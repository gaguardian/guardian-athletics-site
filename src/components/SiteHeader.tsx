import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/mobile-nav.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Classes', to: '/classes' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Memberships', to: '/memberships' },
  { label: 'Coaches', to: '/coaches' },
  { label: 'Personal Training', to: '/personal-training' },
  { label: 'About', to: '/about' },
  { label: 'Shop', to: '/shop' },
  { label: 'Contact', to: '/contact' },
]

const routedPages = navItems.map((item) => item.to).filter((to) => to !== '/')

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 880) setMenuOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('resize', closeOnDesktop)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('resize', closeOnDesktop)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const navClass = (to: string, isActive: boolean) =>
    routedPages.includes(to) && isActive ? 'nav-active' : undefined

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Guardian Athletics home" onClick={() => setMenuOpen(false)}>
        <img src="/GuardianLogo.png" alt="Guardian Athletics" />
      </NavLink>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.label} to={item.to} className={({ isActive }) => navClass(item.to, isActive)}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <NavLink className="button button--primary header-cta" to="/classes">
        Join a Class <span aria-hidden="true">→</span>
      </NavLink>

      <button
        className={`mobile-nav-toggle ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-nav__links">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => navClass(item.to, isActive)}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span><span aria-hidden="true">→</span>
            </NavLink>
          ))}
        </div>

        <NavLink className="button button--primary mobile-nav__cta" to="/classes" onClick={() => setMenuOpen(false)}>
          Join a Class <span aria-hidden="true">→</span>
        </NavLink>
      </nav>
    </header>
  )
}
