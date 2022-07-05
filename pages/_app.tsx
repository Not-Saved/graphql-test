import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	}
})
function MyApp({ Component, pageProps }: AppProps) {
	const { dehydratedState, ...rest } = pageProps
	return <QueryClientProvider client={client}>
		<Hydrate state={dehydratedState}>
			<Component {...rest} />
		</Hydrate>
	</QueryClientProvider>
}

export default MyApp
