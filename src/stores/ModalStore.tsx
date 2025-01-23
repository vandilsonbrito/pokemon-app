import { create } from 'zustand';

interface ModalStore {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    pokemonSelectedId: string; 
    setPokemonSelectedId: (value: string) => void;
}

const useModalStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
    pokemonSelectedId: '',
    setPokemonSelectedId: (value: string) => set({ pokemonSelectedId: value }),
}))

export default useModalStore;