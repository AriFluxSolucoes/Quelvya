import { useEffect } from 'react'
import Seal from '../components/Seal'
import TeamCard from '../components/TeamCard'
import ContactSection from '../components/ContactSection'
import { team } from '../data/team'

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

const services = [
  {
    title: 'Controle de Qualidade',
    text: 'Padronização de fichas técnicas, fluxos de produção e checklists para manter a consistência do que sai da cozinha ou da linha de produção.',
  },
  {
    title: 'Fiscalização e Conformidade Sanitária',
    text: 'Preparação para visitas da Vigilância Sanitária, adequação a normas da ANVISA e correção de não conformidades antes que virem multa.',
  },
  {
    title: 'Consultoria em Nutrição',
    text: 'Elaboração e revisão de cardápios, informação nutricional e composição de produtos, com responsabilidade técnica de nutricionista.',
  },
  {
    title: 'Segurança dos Alimentos (APPCC/HACCP)',
    text: 'Implantação de boas práticas de manipulação, análise de perigos e pontos críticos de controle, do fornecedor ao consumidor final.',
  },
  {
    title: 'Auditorias e Laudos Técnicos',
    text: 'Auditorias periódicas com relatório objetivo, indicando riscos, prioridades e prazos de correção.',
  },
  {
    title: 'Treinamento de Equipes',
    text: 'Capacitação da equipe de cozinha e produção em higiene, manipulação segura e rotina de registros.',
  },
]

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.getElementById('contato')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = (e) => {
    e.preventDefault()
    const el = document.getElementById('servicos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Controle de qualidade &amp; segurança alimentar</p>
            <h1>Qualidade que se comprova, do processo ao prato.</h1>
            <p className="hero-lead">
              A Quelvya assessora restaurantes, cozinhas industriais e empresas de alimentos na fiscalização,
              conformidade sanitária e nutrição — para que a qualidade não dependa da sorte.
            </p>
            <div className="hero-actions">
              <a href="#contato" onClick={scrollToContact} className="btn btn-primary">Agendar diagnóstico</a>
              <a href="#servicos" onClick={scrollToServices} className="btn btn-outline">Conhecer os serviços</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src="/hero.png" alt="Quelvya" className="hero-brand-logo" />
          </div>
        </div>
      </section>

      {/* ── PILARES (O que fazemos) ── */}
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

      {/* ── COMO TRABALHAMOS ── */}
      <section className="how-we-work-section">
        <div className="how-we-work-split">
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

          <div className="how-we-work-right">
            <img
              src="/como-trabalhamos.jpg"
              alt="Prato saudável em formato de coração com legumes e proteínas, rodeado de halteres"
              className="how-we-work-photo"
            />
            <div className="how-we-work-fade" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre">
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

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Serviços</p>
            <h2>Serviços pensados para quem responde pela qualidade todos os dias</h2>
          </div>
          <div className="grid services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <Seal size={40} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPE ── */}
      <section id="equipe" className="section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Equipe</p>
            <h2>Profissionais que assinam pelo que entregam</h2>
            <p>
              Conheça as nutricionistas e especialistas em segurança alimentar responsáveis pelos laudos e
              acompanhamentos da Quelvya.
            </p>
          </div>
          <div className="grid team-grid">
            {team.map((t) => (
              <TeamCard key={t.id} member={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <ContactSection />
    </>
  )
}
