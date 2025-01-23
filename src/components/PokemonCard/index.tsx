import useModalStore from "../../stores/ModalStore"
import "./pokemon-card-styles.scss"

interface PokemonCardProps {
  name: string
  type: string
  imageUrl: string
  rarity: string
  symbol: string
  id: string
}

export function PokemonCard({ name, type, imageUrl, rarity, symbol, id }: PokemonCardProps) {

    const { setIsModalOpen, isModalOpen, setPokemonSelectedId } = useModalStore();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        setPokemonSelectedId(id)
    }

    return (
        <div className="pokemon-card" onClick={toggleModal}>
            <div className="pokemon-card__image-wrapper">
                <img 
                    className="pokemon-card__image"
                    src={imageUrl} 
                    alt="Pokemon Image" 
                />
            </div>
            <div className="pokemon-card__content">
                <div className="pokemon-card__left-content">
                    <h3 className="pokemon-card__name">{name}</h3>
                    <p className="pokemon-card__type">Tipo {type}</p>
                </div>
                <div className="pokemon-card__right-content">
                    <img 
                        className="pokemon-card__symbol"
                        src={symbol}
                        alt="Pokemon Symbol"
                        />
                    <p className="pokemon-card__type">{rarity}</p>
                </div>
            </div>
            
        </div>
    )
}

