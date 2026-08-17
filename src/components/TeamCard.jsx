import { useState } from 'react'
import CurriculoModal from './CurriculoModal'

export default function TeamCard({ member }) {
  const [modalOpen, setModalOpen] = useState(false)

  if (!member) return null

  return (
    <>
      <div className="team-card">
        <div className="team-photo">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="team-photo-img" />
          ) : (
            <div className="team-photo-placeholder">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--green-mid)" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
              <span>Foto a enviar</span>
            </div>
          )}
        </div>
        <h3 className="team-name">{member.name}</h3>
        <p className="team-role">{member.role}</p>

        <div className="team-card-actions">
          <button
            type="button"
            className="btn btn-outline team-cv-btn"
            onClick={() => setModalOpen(true)}
          >
            Ver currículo
          </button>
        </div>
      </div>

      {modalOpen && (
        <CurriculoModal member={member} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
