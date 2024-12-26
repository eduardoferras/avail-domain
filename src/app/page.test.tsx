import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
	it('renders a heading', () => {
		render(<Page />)

		const heading = screen.getByRole('heading', { level: 1 })

		expect(heading).toBeInTheDocument()
	})

	it('should be rendered correctly', () => {
		const { container } = render(<Page />)

		expect(container).toMatchSnapshot()
	})
})
