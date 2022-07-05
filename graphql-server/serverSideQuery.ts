
import { InMemoryCache } from "@apollo/client"
import { apolloServer } from "@graphqlServer/server"

import type { GraphQLResponse } from "apollo-server-core"

export interface queryRequest<TVariables> {
    query: any,
    variables: TVariables
}

export interface TResponse<TData> extends GraphQLResponse {
    data?: TData | Record<string, any> | null
    cache: InMemoryCache
}

export const serverSideQuery = async <TData = any, TVariables = any>(request: queryRequest<TVariables>, context?: { req: any, res: any }): Promise<TResponse<TData>> => {
    const { query, variables } = request
    const data = await apolloServer.executeOperation({ query: query, variables: variables }, context)
    const cache = new InMemoryCache()

    cache.writeQuery({ query: query, variables: variables, data: data.data })

    return { cache, ...data };
}
