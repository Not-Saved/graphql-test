import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient())
	const { dehydratedState, ...rest } = pageProps;

	return <QueryClientProvider client={queryClient}>
		<Hydrate state={dehydratedState}>
			<Component {...rest} />
		</Hydrate>
	</QueryClientProvider>
}

export default MyApp
