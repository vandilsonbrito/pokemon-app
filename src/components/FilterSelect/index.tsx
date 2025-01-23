import useFilterStore from "../../stores/FilterStore"
import "./filter-select-styles.scss"

export function FilterSelect() {

    const { setFilteredBy } = useFilterStore();

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
                <option value="all" selected>Todos</option>
                <option value="hpLessThan100">HP Menor que 100</option>
                <option value="hpGreaterThan100">HP Maior que 100</option>
            </select>
        </div>
    )
}