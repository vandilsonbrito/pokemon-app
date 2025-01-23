import { X } from 'lucide-react'
import "./modal-styles.scss"
import { InfoCard } from '../InfoCard'
import useMedia from 'use-media'
import { useGetPokemons } from '../../hooks/useGetPokemons'
import useModalStore from '../../stores/ModalStore'
import { PokemonCardType } from '../../utils/types'


export function Modal() {
    
    const { data: pokemonsData } = useGetPokemons();
    const { setIsModalOpen, isModalOpen, pokemonSelectedId } = useModalStore();
    const isMobile = useMedia({ maxWidth: '719px' });

    if (!isModalOpen) return null

    const selectedPokemon: PokemonCardType = pokemonsData?.find(pokemon => pokemon.id === pokemonSelectedId) as PokemonCardType;

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className="modal-overlay" onClick={toggleModal}>
        <div className="modal">
            <div className="modal__header">
            <h2 className="modal__title">{selectedPokemon?.name}</h2>
            <button className="modal__close" onClick={toggleModal}>
                <X />
            </button>
            </div>

            <div className="modal__content">
            <div className="modal__image-wrapper">
                <img 
                    className="pokemon-card__image"
                    src={selectedPokemon?.images.small} 
                    alt="Pokemon Image" 
                />
            </div>

            <div className="modal__tags">
                <span className="modal__tag1">HP {selectedPokemon?.hp}</span>
                <span className="modal__tag2">{selectedPokemon?.types[0]}</span>
            </div>

            {
                !isMobile && (
                    <div className="modal__info-grid">
                        <InfoCard title={"HP"} info={selectedPokemon?.hp} />
                        <InfoCard title={"Evolui de"} info={selectedPokemon?.evolvesFrom || "- - -"} />
                        <InfoCard title={"Evolui para"} info={selectedPokemon?.evolvesTo || "- - -"} />
                    </div>
                )
            }
            

            <p className="modal__description">
                {selectedPokemon?.flavorText}
            </p>

            <button className="modal__button">
                    Ver mais informações
            </button>
            </div>
        </div>
        </div>
    )
}

