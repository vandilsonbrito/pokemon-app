import { Search } from "lucide-react"
import "./search-bar-styles.scss"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar um pokemon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-bar__input"
      />
      <div className="search-bar__icon__wrapper">
          <Search className="search-bar__icon" />
      </div>
    </div>
  )
}

