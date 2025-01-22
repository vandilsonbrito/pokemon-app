import "./info-card-styles.scss"

interface InfoCardProps {
  text: string
}

export function InfoCard({ text }: InfoCardProps) {
  return (
    <div className="info-card">
        <div className="info-card__icon-wrapper">
            <img 
                src="../../assets/pokemon-icon.svg" 
                alt="" 
                className="info-card__icon"
            />
            <span>Info</span>
        </div>
      <span className="info-card__text">{text}</span>
    </div>
  )
}

