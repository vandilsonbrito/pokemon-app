import "./filter-select-styles.scss"

export function FilterSelect() {
  return (
    <div className="filter-select">
        <img src="../../assets/filter-vector.svg" alt="" className="filter-select__icon"/>
        <span className="filter-select__label">Filtrar por:</span>
        <select className="filter-select__input">
            <option value="all" disabled selected>Todos</option>
            <option value="type">Tipo</option>
            <option value="name">Nome</option>
        </select>
    </div>
  )
}