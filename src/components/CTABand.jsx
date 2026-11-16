import { Link } from 'react-router-dom'

export default function CTABand({ title = 'Ready to talk about your project?', text = 'Tell us what you need. We reply within one working day with next steps and a clear quote.' }) {
  return (
    <section className="cta">
      <div className="wrap cta__in">
        <div><h2>{title}</h2><p>{text}</p></div>
        <Link to="/contact" className="btn btn--accent">Get a free quote</Link>
      </div>
    </section>
  )
}
