import Header from '.'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

const mockedUseResetFile = jest.fn()

jest.mock('@/hooks/File/useResetFile', () => ({
	__esModule: true,
	default: () => mockedUseResetFile,
}))

afterEach(cleanup)

describe('Header behavior', () => {
	beforeEach(() => {
		jest.clearAllMocks()
		jest.resetAllMocks()
	})

	it('should reset app when link is clicked', () => {
		renderHeader()

		const btnLink = screen.getByRole('link')
		fireEvent.click(btnLink)

		expect(mockedUseResetFile).toHaveBeenCalledTimes(1)
	})
})

export function renderHeader() {
	return render(<Header />)
}
