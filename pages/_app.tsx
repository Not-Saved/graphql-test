import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from "@graphqlClient/client"

function MyApp({ Component, pageProps }: AppProps) {
	const { initialApolloState, ...rest } = pageProps;
	const apolloClient = useApollo(initialApolloState);

	return <ApolloProvider client={apolloClient}>
		<Component {...rest} />
	</ApolloProvider>
}

export default MyApp
