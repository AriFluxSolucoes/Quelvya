import { Link } from 'react-router-dom'
import Seal from '../components/Seal'

const pillars = [
  {
    title: 'Controle de Qualidade',
    text: 'Padronização de processos e verificação contínua para garantir que cada lote, prato e produto atenda ao que promete.',
  },
  {
    title: 'Fiscalização e Conformidade',
    text: 'Acompanhamento junto aos órgãos sanitários e adequação às normas da Vigilância Sanitária e da ANVISA.',
  },
  {
    title: 'Consultoria em Nutrição',
    text: 'Cardápios, fichas técnicas e composição nutricional avaliados por profissionais especializadas.',
  },
  {
    title: 'Segurança Alimentar',
    text: 'Boas práticas de manipulação, APPCC e rastreabilidade, do recebimento à mesa do consumidor.',
  },
]


export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Controle de qualidade &amp; segurança alimentar</p>
            <h1>Qualidade que se comprova, do processo ao prato.</h1>
            <p className="hero-lead">
              A Quelvya assessora restaurantes, cozinhas industriais e empresas de alimentos na fiscalização,
              conformidade sanitária e nutrição — para que a qualidade não dependa da sorte.
            </p>
            <div className="hero-actions">
              <Link to="/contato" className="btn btn-primary">Agendar diagnóstico</Link>
              <Link to="/servicos" className="btn btn-outline">Conhecer os serviços</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src="/image.png" alt="Quelvya" className="hero-brand-logo" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">O que fazemos</p>
            <h2>Quatro frentes, um único padrão de qualidade</h2>
          </div>
          <div className="grid pillar-grid">
            {pillars.map((p) => (
              <div className="pillar-card" key={p.title}>
                <Seal size={44} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-we-work-section">
        <div className="how-we-work-split">
          {/* Lado esquerdo: texto verde */}
          <div className="how-we-work-left">
            <div className="how-we-work-content">
              <p className="eyebrow" style={{ color: 'var(--gold-light)' }}>Como trabalhamos</p>
              <h2>Um processo pensado para a rotina de quem fiscaliza e prepara alimentos</h2>
              <p className="how-we-work-body">
                Nosso trabalho começa com um diagnóstico completo, realizado por meio de visita técnica
                e levantamento das não conformidades presentes no processo atual. A partir dessa análise,
                desenvolvemos um plano de ação personalizado, com definição de prazos, responsáveis e
                prioridades sanitárias.
              </p>
              <p className="how-we-work-body">
                Na sequência, acompanhamos a implementação das melhorias por meio de auditorias periódicas,
                garantindo que os padrões sejam mantidos ao longo do tempo. Ao final, organizamos relatórios
                e toda a documentação necessária para facilitar processos de fiscalização e apoiar a empresa
                na busca por certificações.
              </p>
            </div>
          </div>

          {/* Lado direito: imagem full-height */}
          <div className="how-we-work-right">
            <img
              src="/como-trabalhamos.jpg"
              alt="Prato saudável em formato de coração com legumes e proteínas, rodeado de halteres"
              className="how-we-work-photo"
            />
            {/* Fade da esquerda sobre a imagem */}
            <div className="how-we-work-fade" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Equipe</p>
            <h2>Profissionais que assinam pelo que entregam</h2>
            <p className="hero-lead">
              Conheça as nutricionistas e especialistas em segurança alimentar responsáveis pelos laudos e
              acompanhamentos da Quelvya.
            </p>
          </div>
          <Link to="/sobre" className="btn btn-primary">Ver a equipe</Link>
        </div>
      </section>
    </>
  )
}
