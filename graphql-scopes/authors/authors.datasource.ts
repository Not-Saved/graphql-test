import { Author } from '@typings/graphql';
import { RESTDataSource } from 'apollo-datasource-rest';

class AuthorsAPI extends RESTDataSource {
	constructor() {
		// Always call super()
		super();
		// Sets the base URL for the REST API
		this.baseURL = 'https://anapioficeandfire.com/api/';
	}

	async getAuthorById(id: string): Promise<Author> {
		const stuff = await this.get(`characters/${id}`)
		return stuff
	}
}

export default AuthorsAPI;