import { useEffect } from 'react'
import LegalLayout from '../components/LegalLayout.jsx'

export default function Terms() {
  useEffect(() => {
    document.title = 'Termos e Condições | BoomService'
  }, [])

  return (
    <LegalLayout
      titulo="Termos e Condições"
      intro="Condições aplicáveis à utilização deste site e ao contacto com a BoomService."
    >
      <section>
        <h2>1. Objeto</h2>
        <p>
          Este site é informativo e apresenta as áreas de atividade da BoomService: Mobility
          (TVDE), Rent a Car e Fleet. A contratação de qualquer serviço é feita fora do site, por
          email ou telefone.
        </p>
      </section>
      <section>
        <h2>2. Utilização do site</h2>
        <p>
          O utilizador compromete-se a usar o site de forma lícita, sem prejudicar o seu
          funcionamento nem os direitos de terceiros.
        </p>
      </section>
      <section>
        <h2>3. Informação apresentada</h2>
        <p>
          Os conteúdos têm caráter informativo e não constituem, por si, uma proposta contratual.
          As condições concretas de cada serviço são comunicadas caso a caso.
        </p>
      </section>
      <section>
        <h2>4. Propriedade intelectual</h2>
        <p>
          A marca, o logótipo e os conteúdos deste site pertencem à BoomService, salvo indicação
          em contrário.
        </p>
      </section>
      <section>
        <h2>5. Lei aplicável</h2>
        <p>Aplica-se a lei portuguesa, sendo competentes os tribunais portugueses.</p>
      </section>
    </LegalLayout>
  )
}
