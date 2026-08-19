import { useEffect, useState } from 'react'
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
    details: [
      'Um controle de qualidade eficiente é fundamental para garantir que todos os processos de uma empresa sejam realizados de forma padronizada, segura e em conformidade com os requisitos estabelecidos. Nossa atuação envolve a análise dos processos, identificação de possíveis falhas, avaliação de riscos e implementação de medidas preventivas e corretivas.',
      'Acompanhamos as rotinas operacionais e desenvolvemos procedimentos adequados à realidade de cada negócio, contribuindo para a redução de desperdícios, prevenção de problemas e melhoria contínua dos serviços e produtos. O objetivo é estabelecer uma cultura de qualidade que faça parte do dia a dia da empresa, proporcionando mais organização, segurança e confiança em todas as etapas da operação.',
    ],
  },
  {
    title: 'Fiscalização e Conformidade Sanitária',
    text: 'Preparação para visitas da Vigilância Sanitária, adequação a normas da ANVISA e correção de não conformidades antes que virem multa.',
    details: [
      'Manter uma empresa em conformidade com as exigências sanitárias é essencial para garantir a segurança dos consumidores e a regularidade das atividades. Nossa consultoria auxilia na adequação dos processos, ambientes e procedimentos às normas e boas práticas aplicáveis ao estabelecimento.',
      'Realizamos avaliações técnicas para identificar possíveis irregularidades e pontos que precisam de adequação, orientando a equipe sobre as medidas necessárias para corrigir não conformidades. Também auxiliamos na organização de documentos, procedimentos e rotinas de controle, preparando a empresa para fiscalizações e contribuindo para uma operação mais segura, organizada e alinhada às exigências sanitárias.',
    ],
  },
  {
    title: 'Consultoria em Nutrição',
    text: 'Elaboração e revisão de cardápios, informação nutricional e composição de produtos, com responsabilidade técnica de nutricionista.',
    details: [
      'Nossa consultoria em nutrição oferece suporte técnico especializado para empresas que buscam aprimorar seus processos relacionados à alimentação, qualidade e segurança dos alimentos. Desenvolvemos soluções personalizadas considerando as características, necessidades e objetivos de cada estabelecimento.',
      'Atuamos na avaliação de processos, elaboração e revisão de procedimentos, orientação sobre boas práticas, organização de rotinas e acompanhamento das atividades relacionadas à produção e manipulação de alimentos. Nosso trabalho busca unir conhecimento técnico e aplicação prática, ajudando a empresa a melhorar seus processos, reduzir riscos e oferecer produtos e serviços com maior qualidade e segurança.',
    ],
  },
  {
    title: 'Segurança dos Alimentos (APPCC/HACCP)',
    text: 'Implantação de boas práticas de manipulação, análise de perigos e pontos críticos de controle, do fornecedor ao consumidor final.',
    details: [
      'A segurança dos alimentos exige uma abordagem preventiva capaz de identificar e controlar os perigos que podem comprometer a qualidade e a segurança dos produtos. Por meio dos princípios do APPCC/HACCP, auxiliamos na identificação dos perigos físicos, químicos e biológicos presentes nas diferentes etapas do processo produtivo.',
      'Desenvolvemos e acompanhamos procedimentos de controle, monitoramento e verificação dos pontos críticos, buscando prevenir ocorrências antes que elas representem riscos ao consumidor. A implementação de um sistema estruturado de segurança dos alimentos também contribui para a padronização dos processos, redução de perdas e fortalecimento da confiança dos clientes e parceiros comerciais.',
    ],
  },
  {
    title: 'Auditorias e Laudos Técnicos',
    text: 'Auditorias periódicas com relatório objetivo, indicando riscos, prioridades e prazos de correção.',
    details: [
      'As auditorias são ferramentas importantes para avaliar de forma criteriosa os processos, instalações, documentos e práticas adotadas pela empresa. Realizamos avaliações técnicas para identificar conformidades, não conformidades, riscos e oportunidades de melhoria.',
      'Após a análise, apresentamos os resultados de maneira clara e objetiva, indicando os pontos que necessitam de atenção e as recomendações para adequação. Quando necessário, também elaboramos laudos e relatórios técnicos que podem servir como instrumentos de acompanhamento, comprovação e tomada de decisão. Nosso objetivo é oferecer uma visão precisa da situação atual da empresa e um direcionamento prático para a melhoria dos processos.',
    ],
  },
  {
    title: 'Treinamento de Equipes',
    text: 'Capacitação da equipe de cozinha e produção em higiene, manipulação segura e rotina de registros.',
    details: [
      'Uma equipe bem preparada é um dos principais fatores para garantir a qualidade e a segurança dos processos. Por isso, oferecemos treinamentos desenvolvidos de acordo com a realidade e as necessidades de cada empresa, utilizando uma abordagem prática e direcionada às atividades realizadas pelos colaboradores.',
      'Os conteúdos podem abordar boas práticas de manipulação, higiene pessoal e operacional, segurança dos alimentos, prevenção de contaminações, procedimentos internos, controle de qualidade e demais temas relacionados às atividades da equipe. Além do conhecimento técnico, buscamos estimular a conscientização dos colaboradores sobre a importância de seguir corretamente os procedimentos e contribuir para uma cultura de qualidade dentro da organização.',
    ],
  },
]

const commitment = [
  'Em todas as áreas de atuação, buscamos oferecer um atendimento técnico, próximo e personalizado. Entendemos que cada empresa possui desafios e necessidades diferentes e, por isso, nossas soluções são desenvolvidas de acordo com a realidade de cada operação.',
  'Nosso propósito é ajudar empresas a trabalhar com mais organização, segurança e conformidade, transformando requisitos técnicos e sanitários em processos práticos, eficientes e aplicáveis ao dia a dia.',
]

export default function Home() {
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [])

  useEffect(() => {
    if (!selectedService) return undefined

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedService])

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
      <section id="sobre" className="mission-section">
        <div className="mission-split">
          <div className="mission-photo-panel">
            <img
              src="/seguranca do alimento.png"
              alt="Profissional trabalhando com segurança dos alimentos"
              className="mission-photo"
            />
          </div>
          <div className="mission-copy-panel">
            <div className="mission-copy">
              <p className="eyebrow">Missão</p>
              <h2>Transformar conhecimento, qualidade e segurança em soluções que fortalecem negócios e protegem pessoas.</h2>
              <p>
                Atuamos de forma estratégica na gestão da qualidade e segurança dos alimentos, oferecendo consultoria, adequação sanitária, auditorias, treinamentos, implantação de planos de ação e suporte técnico para que nossos clientes estejam em conformidade e preparados para crescer com segurança.
                Buscamos tornar os processos mais eficientes, orientar decisões e promover uma cultura de qualidade, contribuindo para que cada negócio alcance conformidade, excelência e confiança.
              </p>
            </div>
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
              <button
                type="button"
                className="service-card"
                key={s.title}
                onClick={() => setSelectedService(s)}
                aria-label={`Ver detalhes sobre ${s.title}`}
              >
                <h3>{s.title}</h3>
                <span className="service-card-link">Ver detalhes <span aria-hidden="true">+</span></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setSelectedService(null)}
          aria-modal="true"
          role="dialog"
          aria-labelledby="service-modal-title"
        >
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Fechar detalhes do serviço"
            >
              &times;
            </button>
            <h2 id="service-modal-title">{selectedService.title}</h2>
            <p className="service-modal-lead">{selectedService.text}</p>
            <div className="service-modal-detail">
              <h3>Como podemos ajudar</h3>
              {selectedService.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="service-modal-detail service-modal-commitment">
              <h3>Nosso compromisso</h3>
              {commitment.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}

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
