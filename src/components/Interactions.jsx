import { useEffect } from 'react'

// Cards: a soft light follows the cursor. Buttons: a gentle magnetic pull toward the cursor.
const SPOT = '.scard,.pcard,.gcard,.why__grid article,.quote,.psteps li,.results div,.person,.checks li'

export default function Interactions() {
  useEffect(() => {
    if (!window.matchMedia('(hover:hover)').matches) return
    const calm = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    let last = null

    const move = (e) => {
      const t = e.target
      if (!(t instanceof Element)) return
      const card = t.closest(SPOT)
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      if (calm) return
      const btn = t.closest('.btn')
      if (last && last !== btn) { last.style.setProperty('--tx', '0px'); last.style.setProperty('--ty', '0px') }
      if (btn) {
        const r = btn.getBoundingClientRect()
        btn.style.setProperty('--tx', `${(e.clientX - (r.left + r.width / 2)) * 0.16}px`)
        btn.style.setProperty('--ty', `${(e.clientY - (r.top + r.height / 2)) * 0.22}px`)
      }
      last = btn
    }
    document.addEventListener('mousemove', move, { passive: true })
    return () => document.removeEventListener('mousemove', move)
  }, [])
  return null
}
