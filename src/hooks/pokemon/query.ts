import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

/** Represents a Pokémon's attack types */
export type Attack = {
   __typename?: 'Attack',
  /** The name of this Pokémon attack */
  name: Scalars['String'],
  /** The type of this Pokémon attack */
  type: Scalars['String'],
  /** The damage of this Pokémon attack */
  damage: Scalars['Int'],
};

/** Represents a Pokémon */
export type Pokemon = {
   __typename?: 'Pokemon',
  /** The ID of an object */
  id: Scalars['ID'],
  /** The identifier of this Pokémon */
  number: Scalars['String'],
  /** The name of this Pokémon */
  name: Scalars['String'],
  /** The minimum and maximum weight of this Pokémon */
  weight: PokemonDimension,
  /** The minimum and maximum weight of this Pokémon */
  height: PokemonDimension,
  /** The classification of this Pokémon */
  classification: Scalars['String'],
  /** The type(s) of this Pokémon */
  types: Array<Scalars['String']>,
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Scalars['String']>>,
  /** The attacks of this Pokémon */
  attacks: PokemonAttack,
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Scalars['String']>>,
  fleeRate: Scalars['Float'],
  /** The maximum CP of this Pokémon */
  maxCP: Scalars['Int'],
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Pokemon>>,
  /** The evolution requirements of this Pokémon */
  evolutionRequirements: PokemonEvolutionRequirement,
  /** The maximum HP of this Pokémon */
  maxHP: Scalars['Int'],
  image: Scalars['String'],
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
   __typename?: 'PokemonAttack',
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Attack>>,
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Attack>>,
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
   __typename?: 'PokemonDimension',
  /** The minimum value of this dimension */
  minimum: Scalars['String'],
  /** The maximum value of this dimension */
  maximum: Scalars['String'],
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
   __typename?: 'PokemonEvolutionRequirement',
  /** The amount of candy to evolve */
  amount: Scalars['Int'],
  /** The name of the candy to evolve */
  name: Scalars['String'],
};

/** Query any Pokémon by number or name */
export type Query = {
   __typename?: 'Query',
  query?: Maybe<Query>,
  pokemons?: Maybe<Array<Pokemon>>,
  pokemon: Pokemon,
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int']
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};

export type FetchPokemonsQueryVariables = {
  first: Scalars['Int']
};


export type FetchPokemonsQuery = (
  { __typename?: 'Query' }
  & { pokemons: Maybe<Array<(
    { __typename?: 'Pokemon' }
    & Pick<Pokemon, 'id' | 'number' | 'name' | 'types' | 'image'>
    & { attacks: (
      { __typename?: 'PokemonAttack' }
      & { fast: Maybe<Array<(
        { __typename?: 'Attack' }
        & Pick<Attack, 'name'>
      )>>, special: Maybe<Array<(
        { __typename?: 'Attack' }
        & Pick<Attack, 'name'>
      )>> }
    ) }
  )>> }
);


export const FetchPokemonsDocument = gql`
    query fetchPokemons($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    types
    attacks {
      fast {
        name
      }
      special {
        name
      }
    }
    image
  }
}
    `;

/**
 * __useFetchPokemonsQuery__
 *
 * To run a query within a React component, call `useFetchPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPokemonsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFetchPokemonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchPokemonsQuery, FetchPokemonsQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchPokemonsQuery, FetchPokemonsQueryVariables>(FetchPokemonsDocument, baseOptions);
      }
export function useFetchPokemonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchPokemonsQuery, FetchPokemonsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchPokemonsQuery, FetchPokemonsQueryVariables>(FetchPokemonsDocument, baseOptions);
        }
export type FetchPokemonsQueryHookResult = ReturnType<typeof useFetchPokemonsQuery>;
export type FetchPokemonsLazyQueryHookResult = ReturnType<typeof useFetchPokemonsLazyQuery>;
export type FetchPokemonsQueryResult = ApolloReactCommon.QueryResult<FetchPokemonsQuery, FetchPokemonsQueryVariables>;