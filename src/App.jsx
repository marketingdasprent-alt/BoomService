import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Cookies from './pages/Cookies.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import { useCookieConsent } from './hooks/useCookieConsent.js'

export default function App() {
  const cookieConsent = useCookieConsent()

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <CookieConsent visivel={cookieConsent.visivel} decidir={cookieConsent.decidir} />
      <FloatingActions cookieBannerVisivel={cookieConsent.visivel} />
    </>
  )
}
