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

const steps = [
  { n: '01', title: 'Diagnóstico', text: 'Visita técnica e levantamento de não conformidades no processo atual.' },
  { n: '02', title: 'Adequação', text: 'Plano de ação com prazos, responsáveis e prioridades sanitárias.' },
  { n: '03', title: 'Acompanhamento', text: 'Auditorias periódicas para manter o padrão ao longo do tempo.' },
  { n: '04', title: 'Certificação', text: 'Relatórios e documentação prontos para fiscalização e certificações.' },
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

      <section className="section-deep">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" style={{ color: 'var(--gold-light)' }}>Como trabalhamos</p>
            <h2>Um processo pensado para a rotina de quem fiscaliza e prepara alimentos</h2>
          </div>
          <div className="grid steps-grid">
            {steps.map((s) => (
              <div className="step-card" key={s.n}>
                <span className="step-number">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
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
