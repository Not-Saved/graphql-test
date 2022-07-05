import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { ApolloServer } from "apollo-server-micro"

import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeResolvers } from "@graphql-tools/merge"

import dataSources from "./dataSources"
import * as mocks from "./mocks"
import * as resolvers from "./resolvers"

const IDataSources = dataSources()
export interface IContext {
	dataSources: typeof IDataSources,
	user: string
}

const mergedMocks = Object.values(mocks).reduce((a, b) => ({ ...a, ...b }))
const useMocks = true;

export const apolloServer = new ApolloServer({
	typeDefs: loadFilesSync('graphql-server/**/*.graphql'),
	resolvers: mergeResolvers(Object.values(resolvers)),
	csrfPrevention: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
	dataSources: () => {
		//Estremamente importante che questo oggetto venga creato ogni volta, quindi per forza dataSources() e non dataSource e basta
		return dataSources();
	},
	context: ({ req }) => {
		//Esempio di come si mette una sessione nel context
		return { user: "Loris" }
	},
	cache: "bounded",
	mocks: useMocks ? mergedMocks : undefined
});

