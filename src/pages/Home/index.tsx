import { useState } from "react"

import { Header } from "../../components/Header"
import { SearchBar } from "../../components/SearchBar"
import { FilterSelect } from "../../components/FilterSelect"
import { PokemonCard } from "../../components/PokemonCard"
import { Pagination } from "../../components/Pagination"
import { Modal } from "../../components/Modal"
import "./home-page.scss"

interface Pokemon {
  id: number
  name: string
  type: string
}

const POKEMONS: Pokemon[] = [
  { id: 1, name: "Bulbasaur", type: "grass" },
  { id: 2, name: "Dragonair", type: "dragon" },
  { id: 3, name: "Venusaur", type: "grass" },
  { id: 4, name: "Raikou", type: "electric" },
  { id: 5, name: "Blastoise", type: "water" },
  { id: 6, name: "Mewtwo", type: "psychic" },
  { id: 7, name: "Butterfree", type: "bug" },
]

export function Home() {
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(2)
  const [isOpen, setIsOpen] = useState(false)

  const filteredPokemon = POKEMONS.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
        <Header />
        <main className="pokemon-grid">
            <div className="pokemon-grid__controls">
                <SearchBar value={search} onChange={setSearch} />
                <FilterSelect />
            </div>

            <div className="pokemon-grid__total">
                <img src="../../assets/pokemon-icon.svg" alt="" />
                Total: {filteredPokemon.length} Pokémons
            </div>

            <div className="pokemon-grid__cards">
                {filteredPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.id} name={pokemon.name} type={pokemon.type} onClick={() => setIsOpen(true)} />
                ))}
            </div>
            <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)} pokemonName={'Name'}/>

            <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
        </main>
    </>
  )
}

