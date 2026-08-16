export default function Seal({ size = 64, label }) {
  return (
    <div className="seal" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
        <circle
          cx="50" cy="50" r="44"
          fill="none" stroke="var(--green-deep)" strokeWidth="2.5"
          strokeDasharray="2.5 7"
        />
        <circle cx="50" cy="50" r="34" fill="var(--green-pale)" />
        <path
          d="M32 50 L45 63 L70 34"
          fill="none" stroke="var(--gold)" strokeWidth="6"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
      {label && <span className="seal-label">{label}</span>}
    </div>
  )
}
