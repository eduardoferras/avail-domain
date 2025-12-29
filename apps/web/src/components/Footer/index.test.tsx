import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
	it('renders a paragraph', () => {
		renderFooter()

		const paragraph = screen.getByRole('paragraph')

		expect(paragraph).toBeInTheDocument()
	})

	it('should be rendered correctly', () => {
		const { container } = renderFooter()

		expect(container).toMatchSnapshot()
	})
})

function renderFooter() {
	return render(<Footer />)
}
