import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function LegalLayout({ titulo, intro, children }) {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="legal">
        <div className="container legal__inner">
          <h1>{titulo}</h1>
          <p className="legal__intro">{intro}</p>

          <p className="legal__notice">
            <strong>Texto provisório (placeholder).</strong> O conteúdo abaixo é um rascunho
            genérico e tem de ser revisto por um jurista antes da publicação definitiva, uma vez
            que a BoomService opera em Portugal e está sujeita ao RGPD.
          </p>

          <div className="legal__body">{children}</div>

          <p className="legal__contact">
            Dúvidas sobre este documento: <a href="mailto:geral@boomservice.pt">geral@boomservice.pt</a>
          </p>

          <Link to="/" className="btn btn--ghost legal__back">
            Voltar à página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
