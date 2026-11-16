import { Link } from 'react-router-dom'
import { getService } from '../../data/services.js'
import ServiceCard from '../ServiceCard.jsx'

const slugs = ['custom-wordpress-theme-development', 'woocommerce-store-setup', 'seo-setup-and-optimization', 'meta-ads-management', 'speed-and-core-web-vitals-optimization', 'monthly-website-maintenance-plans']

export default function Featured() {
  return (
    <section className="sec sec--tint">
      <div className="wrap">
        <div className="sec__head sec__head--row">
          <div><h2>Popular services</h2><p>The work clients ask for most. Each has its own page with full details.</p></div>
          <Link to="/services" className="btn btn--line">All 25 services</Link>
        </div>
        <div className="sgrid">{slugs.map((s, i) => <ServiceCard key={s} s={getService(s)} i={i} />)}</div>
      </div>
    </section>
  )
}
