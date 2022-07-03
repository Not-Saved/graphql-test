import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IContext } from '../graphql-server/server';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  JSONObject: any;
};

export type Author = {
  __typename?: 'Author';
  gender: Scalars['String'];
  name: Scalars['String'];
  stuff?: Maybe<Scalars['JSON']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  getAuthor: Author;
  /** This query involves a custom directive, and gets top authors. */
  getBook?: Maybe<Book>;
};


export type QueryGetAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryGetBookArgs = {
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Partial<Author>>;
  Book: ResolverTypeWrapper<Partial<Book>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  JSON: ResolverTypeWrapper<Partial<Scalars['JSON']>>;
  JSONObject: ResolverTypeWrapper<Partial<Scalars['JSONObject']>>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Partial<Author>;
  Book: Partial<Book>;
  Boolean: Partial<Scalars['Boolean']>;
  ID: Partial<Scalars['ID']>;
  JSON: Partial<Scalars['JSON']>;
  JSONObject: Partial<Scalars['JSONObject']>;
  Query: {};
  String: Partial<Scalars['String']>;
};

export type AuthorResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stuff?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type QueryResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<QueryGetAuthorArgs, 'id'>>;
  getBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryGetBookArgs, 'id'>>;
};

export type Resolvers<ContextType = IContext> = {
  Author?: AuthorResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
};


export type GetAuthorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAuthorQuery = { __typename?: 'Query', getAuthor: { __typename?: 'Author', name: string } };


export const GetAuthorDocument = `
    query getAuthor($id: ID!) {
  getAuthor(id: $id) {
    name
  }
}
    `;
export const useGetAuthorQuery = <
      TData = GetAuthorQuery,
      TError = unknown
    >(
      variables: GetAuthorQueryVariables,
      options?: UseQueryOptions<GetAuthorQuery, TError, TData>
    ) =>
    useQuery<GetAuthorQuery, TError, TData>(
      ['getAuthor', variables],
      fetcher<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, variables),
      options
    );

useGetAuthorQuery.getKey = (variables: GetAuthorQueryVariables) => ['getAuthor', variables];
;

useGetAuthorQuery.fetcher = (variables: GetAuthorQueryVariables) => fetcher<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, variables);