import { useEffect } from 'react'

export default function CurriculoModal({ member, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!member) return null

  return (
    <div className="cv-modal-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="cv-modal-close"
          onClick={onClose}
          aria-label="Fechar currículo"
        >
          &times;
        </button>

        <div className="cv-modal-header">
          <div className="cv-modal-photo">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="cv-photo-img" />
            ) : (
              <div className="team-photo-placeholder cv-placeholder">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--green-mid)" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
                <span>Foto a enviar</span>
              </div>
            )}
          </div>
          <div>
            <h3 className="cv-modal-name">{member.name}</h3>
            <p className="cv-modal-role">{member.role}</p>
            {member.contact?.location && (
              <p className="cv-modal-location"> {member.contact.location}</p>
            )}
          </div>
        </div>

        <div className="cv-modal-body">
          {member.summary && (
            <div className="cv-section">
              <h4 className="cv-section-title">Resumo Profissional</h4>
              <p className="cv-text">{member.summary}</p>
            </div>
          )}

          {member.education && member.education.length > 0 && (
            <div className="cv-section">
              <h4 className="cv-section-title">Formação Acadêmica</h4>
              <div className="cv-timeline">
                {member.education.map((edu, idx) => (
                  <div key={idx} className="cv-timeline-item">
                    <div className="cv-timeline-dot" />
                    <div>
                      <p className="cv-item-title">{edu.title}</p>
                      <p className="cv-item-sub">{edu.institution} {edu.year && `• ${edu.year}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {member.experience && member.experience.length > 0 && (
            <div className="cv-section">
              <h4 className="cv-section-title">Experiência Profissional</h4>
              <div className="cv-timeline">
                {member.experience.map((exp, idx) => (
                  <div key={idx} className="cv-timeline-item">
                    <div className="cv-timeline-dot" />
                    <div>
                      <p className="cv-item-title">{exp.role}</p>
                      <p className="cv-item-company">{exp.company} <span className="cv-item-period">({exp.period})</span></p>
                      {exp.description && <p className="cv-item-desc">{exp.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {member.skills && member.skills.length > 0 && (
            <div className="cv-section">
              <h4 className="cv-section-title">Qualificações &amp; Especialidades</h4>
              <div className="cv-skills-tags">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="cv-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
