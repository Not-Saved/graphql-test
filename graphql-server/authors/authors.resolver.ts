import { Resolvers } from "@gTypes/graphql-generated";

const resolvers: Resolvers = {
	Query: {
		getAuthor: async (parent, args, context, info) => {
			return await context.dataSources.authorsAPI.getAuthorById(args.id)
		}
	}
}

export default resolvers;