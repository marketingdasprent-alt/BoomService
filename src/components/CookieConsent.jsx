import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'boomservice-cookie-consent'

export default function CookieConsent() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisivel(true)
    } catch {
      /* armazenamento indisponível */
    }
  }, [])

  function decidir(valor) {
    try {
      localStorage.setItem(STORAGE_KEY, valor)
    } catch {
      /* armazenamento indisponível */
    }
    setVisivel(false)
  }

  if (!visivel) return null

  return (
    <div role="dialog" aria-live="polite" aria-label="Consentimento de cookies" className="cookie-consent">
      <p>
        Utilizamos cookies essenciais para o funcionamento do site. Cookies não essenciais só são
        usados com o seu consentimento. Saiba mais na{' '}
        <Link to="/cookies">Política de Cookies</Link>.
      </p>
      <div className="cookie-consent__actions">
        <button type="button" className="btn btn--ghost" onClick={() => decidir('recusado')}>
          Recusar não essenciais
        </button>
        <button type="button" className="btn" onClick={() => decidir('aceite')}>
          Aceitar
        </button>
      </div>
    </div>
  )
}
