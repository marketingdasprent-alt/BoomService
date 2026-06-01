import Logo from './components/Logo.jsx'

const SERVICES = [
  {
    icon: '🚗',
    title: 'Mobility',
    text: 'Serviço de TVDE com motoristas profissionais. Viagens seguras, pontuais e confortáveis sempre que precisar.',
  },
  {
    icon: '🔑',
    title: 'Rent a Car',
    text: 'Aluguer de viaturas flexível, por dias ou meses, com condições transparentes e uma frota sempre cuidada.',
  },
  {
    icon: '📊',
    title: 'Fleet',
    text: 'Gestão integrada de frotas para empresas e parceiros, com acompanhamento, manutenção e otimização de custos.',
  },
]

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#top" className="nav__brand" aria-label="BoomService — início">
          <Logo size={44} variant="icon" />
          <span className="nav__brandname">BoomService</span>
        </a>
        <ul className="nav__links">
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>
        <a href="#contactos" className="btn btn--sm">Fala connosco</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="badge">🚧 Site em construção</span>
        <Logo size={150} variant="full" className="hero__logo" />
        <h1 className="hero__title">
          A sua mobilidade, <span className="grad">elevada ao próximo nível</span>
        </h1>
        <p className="hero__lead">
          Somos uma empresa de mobilidade e TVDE. Estamos a preparar o nosso
          novo site, mas já pode conhecer-nos e entrar em contacto.
        </p>
        <div className="hero__actions">
          <a href="#servicos" className="btn">Ver serviços</a>
          <a href="#contactos" className="btn btn--ghost">Contactar</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="sobre">
      <div className="container about">
        <div className="about__text">
          <span className="eyebrow">Sobre nós</span>
          <h2>Movemos pessoas e negócios</h2>
          <p>
            A <strong>BoomService</strong> nasce para transformar a forma como
            se vive a mobilidade. Combinamos tecnologia, frota cuidada e equipa
            dedicada para oferecer um serviço fiável, do passageiro ao parceiro
            empresarial.
          </p>
          <p>
            O nosso objetivo é simples: crescer de forma sustentável e levar
            sempre os nossos clientes mais longe — com segurança, conforto e
            confiança.
          </p>
        </div>
        <ul className="stats">
          <li><span className="stats__num">100%</span><span className="stats__label">Motoristas profissionais</span></li>
          <li><span className="stats__num">24/7</span><span className="stats__label">Disponibilidade</span></li>
          <li><span className="stats__num">3</span><span className="stats__label">Áreas de negócio</span></li>
        </ul>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section section--alt" id="servicos">
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">O que fazemos</span>
          <h2>Os nossos serviços</h2>
          <p>Três áreas, uma só missão: mover-se melhor.</p>
        </header>
        <div className="cards">
          {SERVICES.map((s) => (
            <article className="card" key={s.title}>
              <span className="card__icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contactos">
      <div className="container contact">
        <header className="section__head">
          <span className="eyebrow">Contactos</span>
          <h2>Vamos falar</h2>
          <p>Tem uma questão ou quer ser nosso parceiro? Estamos disponíveis.</p>
        </header>
        <div className="contact__grid">
          <a className="contact__item" href="mailto:geral@boomservice.pt">
            <span className="contact__icon">✉️</span>
            <span className="contact__label">Email</span>
            <span className="contact__value">geral@boomservice.pt</span>
          </a>
          <a className="contact__item" href="tel:+351900000000">
            <span className="contact__icon">📞</span>
            <span className="contact__label">Telefone</span>
            <span className="contact__value">+351 900 000 000</span>
          </a>
          <div className="contact__item">
            <span className="contact__icon">📍</span>
            <span className="contact__label">Localização</span>
            <span className="contact__value">Portugal</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo size={40} variant="icon" />
        <p>© {currentYear()} BoomService — Mobility | Rent a Car | Fleet. Todos os direitos reservados.</p>
        <p className="footer__note">Site em construção · brevemente disponível</p>
      </div>
    </footer>
  )
}

function currentYear() {
  return new Date().getFullYear()
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
