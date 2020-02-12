import * as React from "react";
import { useFetchPokemons } from "../hooks/pokemon";

type Props = {};

const Component: React.FC<Props> = props => {
  const { loading, data } = useFetchPokemons(10);

  if (loading) return <div>Loaging...</div>;

  return (
    <div>
      {data !== undefined &&
        data.pokemons !== null &&
        data.pokemons.map(pokemon => (
          <p>
            {pokemon.number} {pokemon.name}
          </p>
        ))}
    </div>
  );
};

export default Component;
