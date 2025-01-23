import { useQuery } from "@tanstack/react-query";
import { api } from "../axios";
import { PokemonCardType } from "../utils/types";

export function useGetPokemons() {
    const fetchPokemons = async () => {
        try {
            const response = await api.get('/cards')
            const data: PokemonCardType[] = response.data?.data
            return data || []
        }
        catch (error) {
            console.error("Error fetching API data", error)
        }
    }

    const query = useQuery({
        queryFn: fetchPokemons,
        queryKey: ['pokemons-data'],
        refetchOnWindowFocus: false
    })

    return query;
}