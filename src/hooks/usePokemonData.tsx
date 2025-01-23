import { useState, useMemo } from "react";
import { useGetPokemons } from "./useGetPokemons";
import useFilterStore from "../stores/FilterStore";

interface UsePokemonDataProps {
  pageSize: number;
}

export function usePokemonData({ pageSize }: UsePokemonDataProps) {
    
  const { data: pokemonsData, error, isFetching } = useGetPokemons();
  const { filteredBy } = useFilterStore();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPokemons = useMemo(() => {
    if (!pokemonsData) return [];

    // Filter by search
    let filtered = pokemonsData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()),
      setCurrentPage(1)
    );

    // Filter by selected filter
    if (filteredBy !== "all") {
      filtered = filtered.filter((pokemon) => {
        return pokemon.types[0].includes(filteredBy);
      });
    }

    return filtered;
  }, [search, filteredBy, pokemonsData]);

  const totalPages = Math.ceil(filteredPokemons.length / pageSize);

  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredPokemons.slice(startIndex, startIndex + pageSize);
  }, [filteredPokemons, pageSize, currentPage]);

  return {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    totalPages,
    currentPageData,
    isFetching,
    error,
    totalFilteredPokemons: filteredPokemons.length,
  };
}