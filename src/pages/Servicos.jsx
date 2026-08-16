import Seal from '../components/Seal'
import { Link } from 'react-router-dom'

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

export default function Servicos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Serviços</p>
          <h1>Serviços pensados para quem responde pela qualidade todos os dias</h1>
        </div>
      </section>

      <section>
        <div className="container">
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

      <section className="section-deep">
        <div className="container cta-band">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold-light)' }}>Próximo passo</p>
            <h2>Vamos avaliar o que sua operação precisa agora</h2>
          </div>
          <Link to="/contato" className="btn btn-gold">Solicitar diagnóstico</Link>
        </div>
      </section>
    </>
  )
}
