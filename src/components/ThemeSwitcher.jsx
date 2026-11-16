import { useEffect, useRef, useState } from 'react'
import { themes } from '../data/themes.js'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const box = useRef(null)

  useEffect(() => {
    const away = (e) => { if (box.current && !box.current.contains(e.target)) setOpen(false) }
    const esc = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', away)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc) }
  }, [])

  const current = themes.find((t) => t.id === theme) || themes[0]
  return (
    <div className="tsw" ref={box}>
      <button className="tsw__btn" aria-haspopup="true" aria-expanded={open} aria-label="Change color theme" onClick={() => setOpen(!open)}>
        {current.colors.map((c) => <i key={c} style={{ background: c }} />)}
      </button>
      {open && (
        <ul className="tsw__menu" role="menu">
          {themes.map((t) => (
            <li key={t.id}>
              <button role="menuitemradio" aria-checked={t.id === theme} className={t.id === theme ? 'is-on' : ''}
                onClick={() => { setTheme(t.id); setOpen(false) }}>
                <span className="tsw__sw">{t.colors.map((c) => <i key={c} style={{ background: c }} />)}</span>
                {t.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
