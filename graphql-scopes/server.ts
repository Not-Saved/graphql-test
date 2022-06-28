import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-micro";
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

import * as resolvers from "./resolvers"
import dataSources from "./dataSources"

const IDataSources = dataSources()
export interface IContext {
	dataSources: typeof IDataSources,
	user: string
}

export const apolloServer = new ApolloServer({
	typeDefs: loadFilesSync('graphql-scopes/**/*.graphql'),
	resolvers: mergeResolvers(Object.values(resolvers)),
	csrfPrevention: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
	dataSources: () => {
		return dataSources();
	},
	context: ({ req }) => {
		return { user: "Loris" }
	}
});

