import { X } from 'lucide-react'
import "./modal-styles.scss"
import { InfoCard } from '../InfoCard'
import useMedia from 'use-media'

interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
  pokemonName: string
}

export function Modal({ isOpen, toggleModal, pokemonName }: ModalProps) {
    
    const isMobile = useMedia({ maxWidth: '719px' });

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={toggleModal}>
        <div className="modal">
            <div className="modal__header">
            <h2 className="modal__title">{pokemonName}</h2>
            <button className="modal__close" onClick={toggleModal}>
                <X />
            </button>
            </div>

            <div className="modal__content">
            <div className="modal__image">
                <div className="modal__placeholder" />
            </div>

            <div className="modal__tags">
                <span className="modal__tag">Lorem ipsum</span>
                <span className="modal__tag">dolor amet</span>
            </div>

            {
                !isMobile && (
                    <div className="modal__info-grid">
                        <InfoCard text="lorem ipsum" />
                        <InfoCard text="lorem ipsum" />
                        <InfoCard text="lorem ipsum" />
                    </div>
                )
            }
            

            <p className="modal__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat
            </p>

            <button className="modal__button">
                    Ver mais informações
            </button>
            </div>
        </div>
        </div>
    )
}

