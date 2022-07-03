import { Resolvers } from "@gTypes/graphql-generated";
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

const resolvers: Resolvers = {
	JSON: GraphQLJSON,
	JSONObject: GraphQLJSONObject,
}

export default resolvers;