import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { useGetPokemons } from "../../hooks/useGetPokemons";
import { useMemo } from "react";
import { PokemonCardType } from "../../utils/types";
import "./pokemon-page-styles.scss";

export function Pokemon() {

    const { data: pokemonsData, error } = useGetPokemons();
    const { id } = useParams<{ id: string }>();

    const pokemon: PokemonCardType = useMemo(() => {
        return pokemonsData?.find((pokemon) => pokemon.id === id) ?? {} as PokemonCardType;;
    }, [id, pokemonsData])

    return (
        <>
            <Header />
            <main className="pokemon-page">
                {
                    error && (
                        <div className="pokemon-page__error">
                            <p>Erro ao carregar o pokemon</p>
                        </div>
                    )
                }
                    <div className="pokemon-page__img-container">
                        <h2 className="pokemon-page__name">{pokemon?.name}</h2>
                        <div className="pokemon-page__image-wrapper">
                            <img
                                className="pokemon-page__image"
                                src={pokemon?.images?.large}
                                alt="Pokemon Image"
                            />
                        </div>
                        <p className="pokemon-page__artist"><strong>Artista:</strong> {pokemon?.artist}</p>
                    </div>
                    <div className="pokemon-page__content-info-wrapper">
                        <p className="pokemon-page__type separate"><strong>Tipo:</strong> {pokemon?.types[0]}</p>
                        <p className="pokemon-pafe__rarity separate"><strong>Raridade:</strong> {pokemon?.rarity}</p>
                        <p className="pokemon-pafe__rarity separate"><strong>Nível:</strong> {pokemon?.level}</p>
                        <p><strong>Habilidade(s):</strong></p>
                        {
                           pokemon?.abilities && pokemon.abilities?.length > 0 ? (
                                pokemon?.abilities.map((ability) => (
                                    <div className="pokemon-page__ability  separate" key={`${pokemon.name}-${ability}`}>
                                        <p><strong>Nome: {ability.name}</strong></p>
                                        <p><strong>Descrição: </strong>{ability.text ?? "Nenhuma descrição disponível."}</p>
                                    </div>
                                ))
                            ): (
                                <p>Nenhuma habilidade disponível.</p>
                            )
                        }
                        <p><strong>Ataque(s):</strong></p>
                        {
                           pokemon?.attacks && pokemon.attacks?.length > 0 ? (
                                pokemon?.attacks.map((attack) => (
                                    <div className="pokemon-page__attack  separate" key={`${pokemon.name}-${attack}`}>
                                        <p><strong>Nome: {attack.name}</strong></p>
                                        <p><strong>Descrição: </strong>{attack.text ?? "Nenhuma descrição disponível."}</p>
                                    </div>
                                ))
                            ): (
                                <p>Nenhuma ataque disponível.</p>
                            )
                        }
                        <p><strong>Fraqueza(s):</strong></p>
                        {
                           pokemon?.weaknesses && pokemon.weaknesses?.length > 0 ? (
                                pokemon?.weaknesses.map((weaknes) => (
                                    <div className="pokemon-page__weaknes  separate" key={`${pokemon.name}-${weaknes}`}>
                                        <p><strong>Tipo: </strong>{weaknes.type}</p>
                                        <p><strong>Valor: </strong>{weaknes.value}</p>
                                    </div>
                                ))
                            ): (
                                <p>Nenhuma fraqueza disponível.</p>
                            )
                        }
                    </div>
            </main>
        </>
    )
}