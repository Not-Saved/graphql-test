import { Resolvers } from "@gTypes/graphql-generated";

const book = {
	id: "5"
}

const author = {
	name: "Loris",
	gender: "Male"
}

const resolvers: Resolvers = {
	Query: {
		getBook: async (parent, args, context, info) => {
			return Object.assign(book, { author: author })
		}
	}
}

export default resolvers;