import { Link } from 'react-router-dom'
import ProjectPreview from './ProjectPreview.jsx'
import useReveal from '../hooks/useReveal.js'

export default function ProjectCard({ p, i = 0 }) {
  const [ref, shown] = useReveal()
  // Tilts the card toward the cursor.
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    e.currentTarget.style.setProperty('--ry', `${x * 8}deg`)
    e.currentTarget.style.setProperty('--rx', `${-y * 8}deg`)
  }
  const leave = (e) => { e.currentTarget.style.setProperty('--rx', '0deg'); e.currentTarget.style.setProperty('--ry', '0deg') }

  return (
    <article ref={ref} className={`pcard reveal ${shown ? 'is-in' : ''}`} style={{ '--d': `${(i % 3) * 0.1}s` }} onMouseMove={move} onMouseLeave={leave}>
      <Link to={`/projects/${p.slug}`} className="pcard__shot" aria-label={`${p.name} case study`}><ProjectPreview p={p} /></Link>
      <div className="pcard__body">
        <span className="pcard__tag">{p.category}</span>
        <h3><Link to={`/projects/${p.slug}`}>{p.name}</Link></h3>
        <p>{p.summary}</p>
        <div className="pcard__links">
          <Link to={`/projects/${p.slug}`}>Case study</Link>
          <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo &#8599;</a>
        </div>
      </div>
    </article>
  )
}
