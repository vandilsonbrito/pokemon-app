import { useMemo } from "react";
import { useGetPokemons } from "../../hooks/useGetPokemons";
import useFilterStore from "../../stores/FilterStore"
import "./filter-select-styles.scss"

export function FilterSelect() {

    const { setFilteredBy } = useFilterStore();
    const { data: pokemonData } = useGetPokemons();

    const pokemonTypes = useMemo(() => {
        if (!pokemonData) return [];
        return [...new Set(pokemonData?.map((pokemon) => pokemon.types[0]))];
    }, [pokemonData]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilteredBy(event.target.value)
    }

    return (
        <div className="filter-select">
            <img src="../../assets/filter-vector.svg" alt="" className="filter-select__icon"/>
            <span className="filter-select__label">Filtrar por:</span>
            <select
                onChange={handleChange} 
                className="filter-select__input">
                <option value="all" defaultValue={"all"}>Todos</option>
                {
                    pokemonTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))
                }
            </select>
        </div>
    )
}