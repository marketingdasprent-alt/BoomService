import { useEffect } from 'react'
import {
  Car,
  KeyRound,
  Building2,
  Clock,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import RevealSection from '../components/RevealSection.jsx'
import heroMobility from '../assets/hero-mobility.jpg'
import rentACarPhoto from '../assets/rent-a-car.jpg'
import fleetPhoto from '../assets/fleet.jpg'
import driverOwnCarPhoto from '../assets/driver-own-car.jpg'

const NUMEROS = [
  { valor: '100%', legenda: 'Motoristas profissionais' },
  { valor: '24/7', legenda: 'Disponibilidade' },
  { valor: '3', legenda: 'Áreas de negócio' },
]

const SERVICOS = [
  {
    id: 'mobility',
    icone: Car,
    nome: 'Mobility (TVDE)',
    resumo:
      'Transporte de passageiros em veículos descaracterizados a partir de plataforma eletrónica, com motoristas profissionais.',
    texto:
      'O TVDE é o transporte individual de passageiros pedido através de uma plataforma eletrónica, feito em viaturas descaracterizadas e conduzido por motoristas certificados para a atividade. Na BoomService, cada viagem é preparada com a mesma exigência: motorista profissional, viatura em bom estado e um percurso pontual, seguro e confortável.',
    pontos: [
      'Motoristas com formação e certificação para a atividade TVDE',
      'Pontualidade tratada como parte do serviço, não como acaso',
      'Viaturas limpas e revistas antes de entrarem ao serviço',
      'Condução defensiva e atenção ao conforto de quem viaja',
    ],
    imagem: heroMobility,
    imagemAlt: 'Motorista profissional a abrir a porta de uma viatura para uma passageira',
  },
  {
    id: 'rent-a-car',
    icone: KeyRound,
    nome: 'Rent a Car',
    resumo: 'Aluguer de viaturas flexível, por dias ou por meses, com condições transparentes.',
    texto:
      'O aluguer adapta-se ao motivo: uns dias para uma deslocação pontual, meses para quem precisa de viatura durante um projeto ou enquanto resolve a mobilidade do dia a dia. As condições são explicadas antes de assinar, sem cláusulas escondidas nem custos que aparecem no fim.',
    pontos: [
      'Períodos curtos ou prolongados, ajustados à necessidade real',
      'Condições e valores apresentados de forma clara à partida',
      'Frota cuidada, com manutenção acompanhada',
      'Apoio direto durante todo o período de aluguer',
    ],
    imagem: rentACarPhoto,
    imagemAlt: 'Entrega da chave de uma viatura num serviço de aluguer',
  },
  {
    id: 'fleet',
    icone: Building2,
    nome: 'Fleet',
    resumo:
      'Gestão integrada de frotas para empresas e parceiros, do acompanhamento diário à otimização de custos.',
    texto:
      'Gerir viaturas ocupa tempo a quem devia estar focado no negócio. A BoomService assume esse trabalho: acompanha o estado da frota, organiza a manutenção e procura onde os custos podem descer sem comprometer a operação.',
    pontos: [
      'Acompanhamento contínuo do estado e utilização das viaturas',
      'Manutenção planeada, para reduzir paragens inesperadas',
      'Análise de custos e propostas de otimização',
      'Interlocutor dedicado para empresas e parceiros',
    ],
    imagem: fleetPhoto,
    imagemAlt: 'Vista aérea de uma grande frota de viaturas organizada em filas',
  },
]

const CAMINHOS_MOTORISTA = [
  {
    titulo: 'Já tenho viatura',
    imagem: driverOwnCarPhoto,
    imagemAlt: 'Motorista ao volante da sua viatura com um passageiro',
    pontos: [
      'Partilhe connosco a sua situação e disponibilidade',
      'A equipa verifica consigo os dados da viatura',
      'Receba orientação clara sobre os próximos passos',
    ],
    cta: 'Falar sobre a minha viatura',
  },
  {
    titulo: 'Preciso de viatura',
    imagem: rentACarPhoto,
    imagemAlt: 'Entrega da chave de uma viatura num serviço de aluguer',
    pontos: [
      'Conheça as soluções de viatura para a atividade',
      'Esclareça as condições antes de tomar uma decisão',
      'Conte com o apoio direto da equipa',
    ],
    cta: 'Falar sobre uma viatura',
  },
]

const PASSOS = [
  {
    titulo: 'Fale connosco',
    texto: 'Envie email ou telefone e diga o que precisa: uma viagem, uma viatura, ou apoio na gestão de uma frota.',
  },
  {
    titulo: 'Definimos a solução',
    texto: 'Analisamos a necessidade, o período e o tipo de viatura, e apresentamos as condições por escrito.',
  },
  {
    titulo: 'Fica em circulação',
    texto: 'Com tudo acordado, o serviço arranca e mantém um contacto direto connosco enquanto durar.',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'BoomService | Mobilidade, TVDE, Rent a Car e Frotas'
  }, [])

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Saltar para o conteúdo
      </a>
      <Header />

      <main id="conteudo">
        {/* Hero */}
        <RevealSection className="hero">
          <img src={heroMobility} alt="" aria-hidden="true" className="hero__bg" />
          <div aria-hidden="true" className="hero__overlay" />
          <div aria-hidden="true" className="hero__topline" />
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="eyebrow">Mobilidade em Portugal</p>
              <h1 className="hero__title">
                A sua mobilidade, <span className="grad-text">elevada</span> ao <em>próximo nível</em>
              </h1>
              <p className="hero__lead">
                A BoomService trabalha em três frentes da mobilidade em Portugal: TVDE com
                motoristas profissionais, aluguer de viaturas por dias ou meses, e gestão de
                frotas para empresas e parceiros.
              </p>
              <div className="hero__actions">
                <a href="#servicos" className="btn">
                  Ver serviços
                </a>
                <a href="#contactos" className="btn btn--ghost">
                  Contactar
                </a>
              </div>
            </div>

            <ul className="hero__stats">
              {NUMEROS.map((n) => (
                <li key={n.legenda}>
                  <p className="hero__stats-value">{n.valor}</p>
                  <p className="hero__stats-label">{n.legenda}</p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Sobre */}
        <RevealSection id="sobre" ariaLabelledby="sobre-titulo" className="section section--alt">
          <div className="container about">
            <div className="about__intro">
              <p className="eyebrow">Sobre Nós</p>
              <h2 id="sobre-titulo">Mobilidade fiável, do passageiro ao parceiro empresarial</h2>
            </div>
            <div className="about__body">
              <p>
                A <strong>BoomService</strong> nasce para transformar a forma como se vive a
                mobilidade. Combina tecnologia, frota cuidada e equipa dedicada para oferecer um
                serviço fiável, do passageiro ao parceiro empresarial.
              </p>
              <p>
                Na prática, isso significa três coisas simples. Uma frota mantida em condições,
                porque o estado da viatura decide grande parte da experiência. Uma equipa que
                responde quando é contactada, sem deixar pedidos em espera. E condições
                apresentadas de forma clara antes de qualquer compromisso.
              </p>
              <p>
                O serviço foi pensado para quem se desloca no dia a dia e quer chegar a horas,
                para quem precisa de uma viatura durante um período determinado, e para empresas
                que preferem entregar a gestão das suas viaturas a quem trata disso todos os dias.
              </p>
              <p>
                O objetivo é crescer de forma sustentável, mantendo segurança, conforto e
                confiança como base de cada decisão.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Serviços */}
        <RevealSection id="servicos" ariaLabelledby="servicos-titulo" className="section">
          <div className="container">
            <p className="eyebrow">Serviços</p>
            <h2 id="servicos-titulo" className="section__title">
              Três áreas de negócio, uma exigência comum
            </h2>

            <div className="services">
              {SERVICOS.map((s, index) => {
                const Icone = s.icone
                return (
                  <article
                    key={s.id}
                    id={s.id}
                    aria-labelledby={`${s.id}-titulo`}
                    className={`service ${index % 2 === 1 ? 'service--reverse' : ''}`}
                  >
                    <div className="service__media">
                      <img src={s.imagem} alt={s.imagemAlt} loading="lazy" />
                    </div>
                    <div className="service__body">
                      <div className="service__head">
                        <Icone aria-hidden="true" />
                        <h3 id={`${s.id}-titulo`}>{s.nome}</h3>
                      </div>
                      <p className="service__resumo">{s.resumo}</p>
                      <p>{s.texto}</p>
                      <ul className="service__points">
                        {s.pontos.map((p) => (
                          <li key={p}>
                            <ShieldCheck aria-hidden="true" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </RevealSection>

        {/* Motoristas */}
        <RevealSection id="motoristas" ariaLabelledby="motoristas-titulo" className="section section--alt">
          <div className="container">
            <p className="eyebrow">Junte-se a nós</p>
            <div className="drivers__head">
              <h2 id="motoristas-titulo">Quer conduzir para a BoomService?</h2>
              <p>
                Estamos disponíveis para falar com motoristas interessados em colaborar
                connosco, quer tenham viatura própria ou precisem de conhecer outras soluções.
              </p>
            </div>

            <div className="drivers__grid">
              {CAMINHOS_MOTORISTA.map((caminho) => (
                <article className="driver-card" key={caminho.titulo}>
                  <div className="driver-card__media">
                    <img src={caminho.imagem} alt={caminho.imagemAlt} loading="lazy" />
                  </div>
                  <div className="driver-card__body">
                    <h3>{caminho.titulo}</h3>
                    <ul className="service__points">
                      {caminho.pontos.map((ponto) => (
                        <li key={ponto}>
                          <ShieldCheck aria-hidden="true" />
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contactos" className="btn btn--ghost">
                      {caminho.cta}
                      <ArrowRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Como funciona */}
        <RevealSection id="como-funciona" ariaLabelledby="como-titulo" className="section">
          <div className="container">
            <h2 id="como-titulo" className="section__title">
              Como funciona
            </h2>
            <ol className="timeline">
              {PASSOS.map((p, i) => (
                <li key={p.titulo} className="timeline__item">
                  <span aria-hidden="true" className="timeline__marker" />
                  <p className="timeline__step">Passo {i + 1}</p>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        {/* Contactos */}
        <RevealSection id="contactos" ariaLabelledby="contactos-titulo" className="section section--alt">
          <div className="container contact">
            <div className="contact__intro">
              <h2 id="contactos-titulo">Contactos</h2>
              <p>
                Diga-nos o que precisa e respondemos com as condições aplicáveis. Atendimento
                disponível 24/7.
              </p>
              <div className="contact__actions">
                <a href="mailto:geral@boomservice.pt" className="btn">
                  Enviar email
                </a>
                <a href="tel:+351900000000" className="btn btn--ghost">
                  Ligar agora
                </a>
              </div>
            </div>

            <ul className="contact-grid">
              <li>
                <Mail aria-hidden="true" />
                <h3>Email</h3>
                <a href="mailto:geral@boomservice.pt">geral@boomservice.pt</a>
              </li>
              <li>
                <Phone aria-hidden="true" />
                <h3>Telefone</h3>
                <a href="tel:+351900000000">+351 900 000 000</a>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <h3>Localização</h3>
                <p>Lisboa, Portugal</p>
              </li>
            </ul>
          </div>
          <div className="container contact__note">
            <Clock aria-hidden="true" />
            Disponibilidade 24/7 para pedidos de mobilidade, aluguer e frotas.
          </div>
        </RevealSection>
      </main>

      <Footer />
    </>
  )
}
