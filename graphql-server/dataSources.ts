import { default as AuthorsAPI } from "./authors/authors.datasource"

const sources = () => ({
	authorsAPI: new AuthorsAPI()
})

export default sources;