import { Link } from 'react-router-dom'

export default function CookieConsent({ visivel, decidir }) {
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
