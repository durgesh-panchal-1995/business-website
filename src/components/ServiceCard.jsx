import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { getGroup } from '../data/services.js'

export default function ServiceCard({ s, i = 0 }) {
  const g = getGroup(s.group)
  const [ref, shown] = useReveal()
  return (
    <Link ref={ref} to={`/services/${s.slug}`} className={`scard reveal ${shown ? 'is-in' : ''}`} style={{ '--tone': g.color, '--d': `${(i % 3) * 0.08}s` }}>
      <span className="scard__tag">{g.short}</span>
      <h3>{s.title}</h3>
      <p>{s.sum}</p>
      <span className="scard__meta">{s.time}</span>
      <span className="scard__more">View details</span>
    </Link>
  )
}
