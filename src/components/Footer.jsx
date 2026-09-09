import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function currentYear() {
  return new Date().getFullYear()
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__brandname">
            <img src={logo} alt="" aria-hidden="true" className="nav__logo" />
            BoomService
          </div>
          <p>Mobilidade, aluguer de viaturas e gestão de frotas em Portugal.</p>
        </div>

        <nav aria-label="Áreas de negócio">
          <h2>Áreas de negócio</h2>
          <ul>
            <li>
              <a href="/#mobility">Mobility (TVDE)</a>
            </li>
            <li>
              <a href="/#rent-a-car">Rent a Car</a>
            </li>
            <li>
              <a href="/#fleet">Fleet</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Informação legal">
          <h2>Legal</h2>
          <ul>
            <li>
              <Link to="/privacidade">Política de Privacidade</Link>
            </li>
            <li>
              <Link to="/termos">Termos e Condições</Link>
            </li>
            <li>
              <Link to="/cookies">Política de Cookies</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        © {currentYear()} BoomService. Todos os direitos reservados.
      </div>
    </footer>
  )
}
