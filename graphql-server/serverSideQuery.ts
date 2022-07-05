
import { apolloServer } from "@graphqlServer/server"

import type { GraphQLResponse } from "apollo-server-core"
import { QueryClient } from "react-query"

export interface queryRequest<TVariables> {
	query: any,
	variables: TVariables,
	keyFn: Function
}

export interface TResponse<TData> extends GraphQLResponse {
	data?: TData | Record<string, any> | null
	client: QueryClient
}

export const serverSideQuery = async <TData = any, TVariables = any>(request: queryRequest<TVariables>, context?: { req: any, res: any }): Promise<TResponse<TData>> => {
	const { query, variables, keyFn } = request
	const data = await apolloServer.executeOperation({ query: query, variables: variables }, context)
	const client = new QueryClient()

	client.setQueryData(keyFn(variables), data.data)

	return { ...data, client };
}
