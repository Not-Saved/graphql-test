import { render as rtlRender } from "@testing-library/react"
import { ReactNode } from "react";

import { buildClientSchema } from "graphql";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema } from "@graphql-tools/mock";

import * as mocks from '@graphqlServer/mocks';
import introspection from "@gTypes/introspection.json"

const schema = buildClientSchema({ __schema: introspection.__schema as any })
const mockSchema = addMocksToSchema({
	schema: schema,
	mocks: Object.values(mocks).reduce((a, b) => ({ ...a, ...b }))
});
const client = new ApolloClient({
	link: new SchemaLink({ schema: mockSchema }),
	cache: new InMemoryCache()
});

export function renderWithProviders(Component: ReactNode) {
	return rtlRender(
		<ApolloProvider client={client}>{Component}</ApolloProvider>
	);
}
