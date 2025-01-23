import { create } from 'zustand';

interface FilterStore {
    filteredBy: string;
    setFilteredBy: (value: string) => void;
}

const useFilterStore = create<FilterStore>((set) => ({
    filteredBy: '',
    setFilteredBy: (value: string) => set({ filteredBy: value }),
}))

export default useFilterStore;