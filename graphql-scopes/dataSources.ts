import { datasource as AuthorsAPI } from "./authors"

const sources = () => ({
	authorsAPI: new AuthorsAPI()
})

export default sources;