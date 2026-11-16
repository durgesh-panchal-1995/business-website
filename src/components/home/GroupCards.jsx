import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'
import { groups, byGroup } from '../../data/services.js'

export default function GroupCards() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec__head"><h2>Three ways we help</h2><p>Start with one, or combine them. Most clients do.</p></div>
        <div className="gcards">
          {groups.map((g, i) => (
            <Reveal as={Link} delay={i * 0.12} key={g.id} to={`/services?group=${g.id}`} className="gcard" style={{ '--tone': g.color }}>
              <span className="gcard__count">{byGroup(g.id).length} services</span>
              <h3>{g.name}</h3>
              <p>{g.tagline}</p>
              <ul>{byGroup(g.id).slice(0, 4).map((s) => <li key={s.slug}>{s.title}</li>)}</ul>
              <span className="gcard__more">See all {g.short.toLowerCase()} services</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
