import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap" style={{ textAlign: 'center', padding: '80px 0' }}>
        <h1>This page does not exist</h1>
        <p style={{ margin: '12px auto 28px' }}>The link may be old or mistyped. Browse our services instead.</p>
        <Link className="btn btn--solid" to="/services">View services</Link>
      </div>
    </section>
  )
}
