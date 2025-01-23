import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { FilterSelect } from "../../components/FilterSelect";
import { PokemonCard } from "../../components/PokemonCard";
import { Pagination } from "../../components/Pagination";
import { Modal } from "../../components/Modal";
import "./home-page.scss";
import { SkeletonLoading } from "../../components/PokemonCard/SkeletonLoading";
import { usePokemonData } from "../../hooks/usePokemonData";

export function Home() {
  const {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    totalPages,
    currentPageData,
    isFetching,
    error,
    totalFilteredPokemons,
  } = usePokemonData({ pageSize: 30 });

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
          Total: {totalFilteredPokemons} Pokémons
        </div>

        <div className="pokemon-grid__cards">
          {isFetching ? (
            Array.from({ length: 12 }).map((_, id) => <SkeletonLoading key={id} />)
          ) : (
            currentPageData.length > 0 ? (
              currentPageData.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.types[0]}
                  imageUrl={pokemon.images.small}
                  rarity={pokemon.rarity}
                  symbol={pokemon.set?.images?.symbol}
                  id={pokemon.id}
                />
              ))
            ) : (
              <div className="error-message-wrapper">
                <span className="error-message">Nenhum Pokemon encontrado.</span>
              </div>
            )
          )}
        </div>
        {error && (
          <div className="error-message-wrapper">
            <span className="error-message">Erro. Nenhum dado encontrado.</span>
          </div>
        )}

        <Modal />

        <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages} />
      </main>
    </>
  );
}