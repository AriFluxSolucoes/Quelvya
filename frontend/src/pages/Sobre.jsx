import TeamCard from '../components/TeamCard'
import Seal from '../components/Seal'

// Placeholder — substituir pelos nomes, cargos, fotos e bios reais enviados pela equipe.
const team = [
  { name: 'Nome da profissional', role: 'Nutricionista responsável técnica' },
  { name: 'Nome da profissional', role: 'Especialista em Segurança Alimentar' },
  { name: 'Nome da profissional', role: 'Consultora em Fiscalização Sanitária' },
]

export default function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Sobre a Quelvya</p>
          <h1>Qualidade, fiscalização e cuidado técnico em cada etapa</h1>
          <p className="hero-lead" style={{ maxWidth: 640 }}>
            A Quelvya nasceu para dar a empresas de alimentação a segurança de que seus processos, cardápios e
            cozinhas estão dentro da norma — com acompanhamento técnico próximo e linguagem clara, sem jargão
            desnecessário.
          </p>
        </div>
      </section>

      <section>
        <div className="container about-grid">
          <div>
            <p className="eyebrow">Missão</p>
            <h2>Levar rigor técnico para o dia a dia da cozinha</h2>
            <p>
              Texto de apresentação a ser definido com a cliente: histórico da empresa, motivação para atuar em
              controle de qualidade e nutrição, e valores que guiam o trabalho da Quelvya.
            </p>
            <p>
              [Espaço reservado — substituir por texto final sobre a fundação da empresa e experiência da equipe.]
            </p>
          </div>
          <div className="about-seal">
            <Seal size={160} />
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Equipe</p>
            <h2>Quem está por trás de cada laudo</h2>
            <p>
              Espaço reservado para fotos e uma breve trajetória profissional de cada integrante da equipe.
              Assim que as fotos e textos forem enviados, cada card é atualizado.
            </p>
          </div>
          <div className="grid team-grid">
            {team.map((t, i) => (
              <TeamCard key={i} name={t.name} role={t.role} placeholder />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
