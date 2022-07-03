import { Author } from "@gTypes/graphql-generated";

const mocks = {
	Author: (): Author => ({
		name: "Loris",
		gender: "Hello"
	})
}

export default mocks;