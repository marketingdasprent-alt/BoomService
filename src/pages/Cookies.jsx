import { useEffect } from 'react'
import LegalLayout from '../components/LegalLayout.jsx'

export default function Cookies() {
  useEffect(() => {
    document.title = 'Política de Cookies | BoomService'
  }, [])

  return (
    <LegalLayout
      titulo="Política de Cookies"
      intro="Que cookies utilizamos e como pode controlar o seu consentimento."
    >
      <section>
        <h2>1. O que são cookies</h2>
        <p>
          Cookies são pequenos ficheiros guardados no seu dispositivo quando visita um site,
          usados para o fazer funcionar corretamente ou para recolher informação sobre a
          utilização.
        </p>
      </section>
      <section>
        <h2>2. Cookies utilizados</h2>
        <ul>
          <li>
            Essenciais: necessários ao funcionamento do site, incluindo o registo da sua escolha
            no aviso de cookies.
          </li>
          <li>
            Não essenciais: apenas utilizados se der consentimento no aviso apresentado ao entrar
            no site.
          </li>
        </ul>
      </section>
      <section>
        <h2>3. Gerir o consentimento</h2>
        <p>
          Pode recusar os cookies não essenciais no aviso apresentado. Pode ainda apagar os dados
          guardados pelo site nas definições do seu navegador, o que fará reaparecer o aviso na
          visita seguinte.
        </p>
      </section>
      <section>
        <h2>4. Contacto</h2>
        <p>Para questões relacionadas com cookies, utilize o contacto indicado no final desta página.</p>
      </section>
    </LegalLayout>
  )
}
