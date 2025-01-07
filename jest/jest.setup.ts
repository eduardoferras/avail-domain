import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
	useRouter: () => ({
		prefetch: () => null,
	}),
}))
