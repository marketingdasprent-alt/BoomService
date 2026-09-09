import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const NAV_ITEMS = [
  { href: '/#sobre', label: 'Sobre Nós' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#contactos', label: 'Contactos' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="nav container">
        <Link to="/" className="nav__brand" aria-label="BoomService, página inicial">
          <img src={logo} alt="" aria-hidden="true" className="nav__logo" />
          <span className="nav__brandname">
            Boom<span className="grad-text">Service</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="nav__links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contactos" className="btn btn--sm">
            Fala connosco
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="nav__toggle"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`menu-mobile ${open ? 'menu-mobile--open' : ''}`}
      >
        <div className="menu-mobile__inner">
          <nav aria-label="Navegação principal (telemóvel)" className="menu-mobile__nav">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contactos" onClick={() => setOpen(false)} className="btn">
              Fala connosco
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
