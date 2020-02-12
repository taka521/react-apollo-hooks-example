import * as PokemonQuery from "./query";

export function useFetchPokemons(limit: number) {
  const { data, loading } = PokemonQuery.useFetchPokemonsQuery({
    variables: { first: limit },
    onCompleted: data => {
      const { pokemons } = data;
      console.log("pokemons", pokemons);
    },
    onError: error => console.error(error.message)
  });

  return { data, loading };
}
