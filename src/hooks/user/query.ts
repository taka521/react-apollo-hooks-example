import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type IUsersQueryVariables = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


export type IUsersQuery = (
  { readonly __typename?: 'Query' }
  & { readonly users: (
    { readonly __typename?: 'UserConnection' }
    & { readonly edges: ReadonlyArray<(
      { readonly __typename?: 'UserEdge' }
      & Pick<IUserEdge, 'cursor'>
      & { readonly node: (
        { readonly __typename?: 'User' }
        & Pick<IUser, 'id' | 'name' | 'age' | 'birthday' | 'gender'>
      ) }
    )>, readonly pageInfo: (
      { readonly __typename?: 'PageInfo' }
      & Pick<IPageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);


export const UsersDocument = gql`
    query users($first: Int, $after: String) {
  users(first: $first, after: $after) {
    edges {
      node {
        id
        name
        age
        birthday
        gender
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IUsersQuery, IUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<IUsersQuery, IUsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IUsersQuery, IUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IUsersQuery, IUsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<IUsersQuery, IUsersQueryVariables>;