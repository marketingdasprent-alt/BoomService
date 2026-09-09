import { useEffect } from 'react'
import LegalLayout from '../components/LegalLayout.jsx'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Política de Privacidade | BoomService'
  }, [])

  return (
    <LegalLayout
      titulo="Política de Privacidade"
      intro="Como tratamos os dados pessoais de quem nos contacta e utiliza os nossos serviços."
    >
      <section>
        <h2>1. Responsável pelo tratamento</h2>
        <p>
          A BoomService é responsável pelo tratamento dos dados pessoais recolhidos através deste
          site. Contacto: geral@boomservice.pt.
        </p>
      </section>
      <section>
        <h2>2. Dados recolhidos</h2>
        <p>
          Este site não tem formulários de registo nem área de cliente. São tratados apenas os
          dados que o próprio nos envia quando decide contactar-nos por email ou telefone.
        </p>
        <ul>
          <li>Nome e dados de contacto que nos indicar</li>
          <li>Conteúdo da mensagem ou do pedido</li>
        </ul>
      </section>
      <section>
        <h2>3. Finalidades e fundamento legal</h2>
        <p>
          Os dados são usados para responder ao pedido e, quando aplicável, para preparar ou
          executar um contrato de prestação de serviços.
        </p>
      </section>
      <section>
        <h2>4. Conservação</h2>
        <p>
          Os dados são conservados apenas durante o período necessário às finalidades indicadas e
          aos prazos legais aplicáveis.
        </p>
      </section>
      <section>
        <h2>5. Direitos do titular</h2>
        <p>
          Nos termos do RGPD, pode solicitar acesso, retificação, apagamento, limitação ou
          portabilidade dos seus dados, bem como opor-se ao tratamento. Pode ainda apresentar
          reclamação junto da Comissão Nacional de Proteção de Dados.
        </p>
      </section>
      <section>
        <h2>6. Alterações</h2>
        <p>Esta política pode ser atualizada. A versão em vigor é sempre a publicada nesta página.</p>
      </section>
    </LegalLayout>
  )
}
