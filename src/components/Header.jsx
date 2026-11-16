import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher.jsx'
import { site, nav } from '../data/site.js'
import '../styles/Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const close = () => setOpen(false)
  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__in">
        <Link to="/" className="logo" onClick={close}><span className="logo__mark">B</span>{site.name}</Link>
        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.end} onClick={close}>{n.label}</NavLink>)}
          <ThemeSwitcher />
          <Link className="btn btn--solid" to="/contact" onClick={close}>Get a free quote</Link>
        </nav>
        <button className="header__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
