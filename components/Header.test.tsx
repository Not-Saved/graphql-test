import { screen, waitFor, render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './Header'

describe('Home', () => {
	it('renders a heading', async () => {
		render(<QueryClientProvider client={new QueryClient()}><Header /></QueryClientProvider>)

		const heading = await waitFor(() => {
			return screen.getByRole('heading', {
				name: /Loris/i,
			})
		})
		expect(heading).toBeInTheDocument()
	})
})