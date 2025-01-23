import "./info-card-styles.scss"

interface InfoCardProps {
    info: string
    title: string
}

export function InfoCard({ title, info }: InfoCardProps) {
  return (
    <div className="info-card">
        <div className="info-card__icon-wrapper">
            <img 
                src="../../assets/pokemon-icon.svg" 
                alt="" 
                className="info-card__icon"
            />
            <span>{title}</span>
        </div>
      <span className="info-card__text">{info}</span>
    </div>
  )
}

