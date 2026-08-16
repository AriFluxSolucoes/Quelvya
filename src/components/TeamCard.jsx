export default function TeamCard({ name, role, placeholder }) {
  return (
    <div className="team-card">
      <div className="team-photo">
        {placeholder ? (
          <div className="team-photo-placeholder">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--green-mid)" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
            <span>Foto a enviar</span>
          </div>
        ) : null}
      </div>
      <p className="team-name">{name}</p>
      <p className="team-role">{role}</p>
      {placeholder && (
        <p className="team-bio-placeholder">Bio e trajetória profissional em breve — espaço reservado para o texto enviado pela profissional.</p>
      )}
    </div>
  )
}
