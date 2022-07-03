import { Resolvers } from "@gTypes/graphql-generated";

const resolvers: Resolvers = {
	Query: {
		getAuthor: async (parent, args, context, info) => {
			console.log("CALLED")
			return await context.dataSources.authorsAPI.getAuthorById(args.id)
		}
	}
}

export default resolvers;