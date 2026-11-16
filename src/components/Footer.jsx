import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { groups, byGroup } from '../data/services.js'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <p className="footer__brand">{site.name}</p>
          <p>WordPress development and digital marketing from a two-person specialist team.</p>
          <p className="footer__contact">{site.email}<br />{site.phone}<br />{site.city}</p>
        </div>
        {groups.map((g) => (
          <div key={g.id}>
            <h4>{g.name}</h4>
            <ul>
              {byGroup(g.id).slice(0, 6).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}
              <li><Link to={`/services?group=${g.id}`}><strong>View all</strong></Link></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__base">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span><Link to="/projects">Projects</Link> · <Link to="/about">About</Link> · <Link to="/contact">Contact</Link></span>
      </div>
    </footer>
  )
}
