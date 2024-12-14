import '@testing-library/jest-dom'

jest.mock('nanoid', () => {
	return {
		nanoid: () => {},
	}
})

jest.mock('next/navigation', () => ({
	useRouter() {
		return {
			prefetch: () => null,
		}
	},
}))
