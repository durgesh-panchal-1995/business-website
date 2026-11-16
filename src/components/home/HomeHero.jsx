import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from '../CountUp.jsx'
import { getService } from '../../data/services.js'

const goals = [
  { id: 'site', label: 'I need a new website', picks: ['business-and-corporate-websites', 'woocommerce-store-setup', 'landing-page-development'] },
  { id: 'traffic', label: 'I want more customers', picks: ['seo-setup-and-optimization', 'local-seo-and-google-business-profile', 'meta-ads-management'] },
  { id: 'fix', label: 'My site is slow or broken', picks: ['speed-and-core-web-vitals-optimization', 'website-audit', 'bug-fixing-and-small-customizations'] },
]

const words = ['business websites', 'online stores', 'landing pages', 'booking sites']

export default function HomeHero() {
  const [goal, setGoal] = useState(goals[0])
  const [w, setW] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setW((x) => (x + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="hh">
      <div className="wrap hh__grid">
        <div className="hh__copy">
          <h1>We build WordPress <span className="rot" key={w}>{words[w]}</span> that bring in customers.</h1>
          <p>A senior frontend developer and a digital marketer, working as one team. We build your site, make it fast, get it found and keep it running.</p>
          <div className="hh__cta">
            <Link className="btn btn--solid" to="/services">Explore services</Link>
            <Link className="btn btn--line" to="/contact">Talk to us</Link>
          </div>
          <dl className="hh__stats">
            <div><dt><CountUp to={7} suf=" yrs" /></dt><dd>frontend development</dd></div>
            <div><dt><CountUp to={9} suf=" yrs" /></dt><dd>digital marketing</dd></div>
            <div><dt><CountUp to={25} /></dt><dd>services under one roof</dd></div>
          </dl>
        </div>

        <aside className="finder" aria-label="Find the right service">
          <h2>What do you need help with?</h2>
          <div className="finder__goals">
            {goals.map((g) => (
              <button key={g.id} className={goal.id === g.id ? 'is-on' : ''} onClick={() => setGoal(g)}>{g.label}</button>
            ))}
          </div>
          <ul key={goal.id} className="finder__list">
            {goal.picks.map((slug) => {
              const s = getService(slug)
              return (
                <li key={slug}>
                  <Link to={`/services/${slug}`}><strong>{s.title}</strong><span>{s.time}</span></Link>
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    </section>
  )
}
