type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: Date,
};

type IConnection = {
  readonly edges: ReadonlyArray<IEdge>,
  readonly pageInfo: IPageInfo,
};


type IEdge = {
  readonly node: INode,
  readonly cursor: Scalars['String'],
};

const enum IGender {
  Man = 'MAN',
  Women = 'WOMEN',
  Unknown = 'UNKNOWN'
};

type INode = {
  readonly id: Scalars['ID'],
};

type IPageInfo = {
  readonly __typename?: 'PageInfo',
  readonly hasNextPage: Scalars['Boolean'],
  readonly hasPreviousPage: Scalars['Boolean'],
  readonly startCursor?: Maybe<Scalars['String']>,
  readonly endCursor?: Maybe<Scalars['String']>,
};

type IQuery = {
  readonly __typename?: 'Query',
  readonly node?: Maybe<INode>,
  readonly users: IUserConnection,
  readonly user?: Maybe<IUser>,
};


type IQueryNodeArgs = {
  id: Scalars['ID']
};


type IQueryUsersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


type IQueryUserArgs = {
  id: Scalars['ID']
};

type IUser = INode & {
  readonly __typename?: 'User',
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly age: Scalars['Int'],
  readonly birthday: Scalars['Date'],
  readonly gender: IGender,
};

type IUserConnection = IConnection & {
  readonly __typename?: 'UserConnection',
  readonly edges: ReadonlyArray<IUserEdge>,
  readonly pageInfo: IPageInfo,
};

type IUserEdge = IEdge & {
  readonly __typename?: 'UserEdge',
  readonly node: IUser,
  readonly cursor: Scalars['String'],
};
