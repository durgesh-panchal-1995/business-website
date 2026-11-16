import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import Interactions from './Interactions.jsx'
import BackToTop from './BackToTop.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main key={pathname} className="page"><Outlet /></main>
      <Footer />
      <Interactions />
      <BackToTop />
    </>
  )
}
