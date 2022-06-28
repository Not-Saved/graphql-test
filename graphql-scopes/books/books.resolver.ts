import { Resolvers, Book } from "@typings/graphql"

const book = {
	id: "5"
}

const author = {
	id: "5",
	name: "Loris",
	test: true
}

const resolvers: Resolvers = {
	Query: {
		getBook: async (parent, args) => {
			return Object.assign(book, { author: author })
		}
	}
}

export default resolvers;