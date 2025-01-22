import "./pokemon-card-styles.scss"

interface PokemonCardProps {
  name: string
  type: string
  onClick: () => void
}

export function PokemonCard({ name, type, onClick }: PokemonCardProps) {

    return (
        <div className="pokemon-card" onClick={onClick}>
            <div className="pokemon-card__image">
                <div className="pokemon-card__placeholder" />
            </div>
            <div className="pokemon-card__content">
                <div className="pokemon-card__left-content">
                    <h3 className="pokemon-card__name">{name}</h3>
                    <p className="pokemon-card__type">Tipo {type}</p>
                </div>
                <div className="pokemon-card__right-content">
                    <h3 className="pokemon-card__name">{name}</h3>
                    <p className="pokemon-card__type">Classe</p>
                </div>
            </div>
            
        </div>
    )
}

