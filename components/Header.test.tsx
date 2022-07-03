import { screen, waitFor } from '@testing-library/react'
import Header from './Header'
import { renderWithProviders } from 'utils/test/renderWithProviders';

describe('Home', () => {
	it('renders a heading', async () => {
		renderWithProviders(<Header />)

		const heading = await waitFor(() => {
			return screen.getByRole('heading', {
				name: /Loris/i,
			})
		})
		expect(heading).toBeInTheDocument()
	})
})