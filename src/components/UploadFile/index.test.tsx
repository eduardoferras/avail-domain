import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react'
import UploadFile from '.'
import useListFile from '@/hooks/File/useListFile'

jest.mock('@/hooks/File/useListFile')

const mockedUseSetLoading = jest.fn()

jest.mock('@/hooks/Loading/useSetLoading', () => ({
	__esModule: true,
	default: () => mockedUseSetLoading,
}))

const mockedUseRouterPush = jest.fn()

jest.mock('next/navigation', () => ({
	useRouter: () => ({
		push: mockedUseRouterPush,
	}),
}))

afterEach(cleanup)

describe('UploadFile form behavior', () => {
	beforeEach(() => {
		jest.clearAllMocks()
		jest.resetAllMocks()
	})

	it('should be possible to add files with different names', () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		// const submitbutton = screen.getByTestId('btnSubmit')
		// fireEvent.click(submitbutton)

		// expect(submitbutton).toBeInTheDocument()
		// expect(mockedUseSetLoading).toHaveBeenCalledTimes(1)
		// expect(mockedUseSetLoading).toHaveBeenCalledWith(true)
	})

	it('should not be possible add files with the same name', () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		// const submitbutton = screen.getByTestId('btnSubmit')
		// fireEvent.click(submitbutton)

		// expect(submitbutton).toBeInTheDocument()
		// expect(mockedUseSetLoading).toHaveBeenCalledTimes(1)
		// expect(mockedUseSetLoading).toHaveBeenCalledWith(true)
	})

	it('should not be possible add files with size 0', () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		// const submitbutton = screen.getByTestId('btnSubmit')
		// fireEvent.click(submitbutton)

		// expect(submitbutton).toBeInTheDocument()
		// expect(mockedUseSetLoading).toHaveBeenCalledTimes(1)
		// expect(mockedUseSetLoading).toHaveBeenCalledWith(true)
	})

	it('should not be possible check domains without having files selected', () => {
		;(useListFile as jest.Mock).mockReturnValue([])

		renderUploadFile()

		const submitbutton = screen.queryByTestId('btnSubmit')

		expect(submitbutton).toBeNull()
	})

	it('should be possible check domains if having files selected', () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		const btnSubmit = screen.getByRole('button', { name: /Consultar Nomes/i })

		expect(btnSubmit).toBeInTheDocument()
	})

	it('should show a spinner loading when submit button is clicked', async () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		const btnSubmit = getBtnSubmit()
		fireEvent.click(btnSubmit)

		expect(btnSubmit).toBeInTheDocument()
		expect(mockedUseSetLoading).toHaveBeenNthCalledWith(1, true)
		expect(mockedUseSetLoading).toHaveBeenCalledTimes(1)
	})

	it('should hide the spinner loading after finishing submiting form', async () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		const btnSubmit = getBtnSubmit()
		fireEvent.click(btnSubmit)

		expect(btnSubmit).toBeInTheDocument()
		await waitFor(() =>
			expect(mockedUseSetLoading).toHaveBeenNthCalledWith(2, false),
		)
		await waitFor(() => expect(mockedUseSetLoading).toHaveBeenCalledTimes(2))
	})

	it('should navigation to another page when submit button is clicked', async () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		const btnSubmit = getBtnSubmit()
		fireEvent.click(btnSubmit)

		expect(btnSubmit).toBeInTheDocument()
		await waitFor(() => expect(mockedUseRouterPush).toHaveBeenCalledTimes(1))
	})

	/*
	Test jest react file
	https://stackoverflow.com/questions/68452480/test-file-upload-in-react-jest
	https://medium.com/@pawankp550/react-testing-library-how-to-test-a-file-input-8bc1edc88ad
	https://florian.ec/blog/react-file-upload-jest/
	https://dev.to/mbarzeev/testing-a-simple-component-with-react-testing-library-5bc6
	https://stackoverflow.com/questions/75281480/testing-file-selection-with-testing-library-in-react
	https://stackoverflow.com/questions/68452480/test-file-upload-in-react-jest
	https://stackoverflow.com/questions/74861753/mocking-zustand-store-for-jest-test
	*/
})

const files = [
	{
		id: '1',
		name: 'file1.xlsx',
		file: new File(['file'], 'file1.xlsx', {
			type: 'xlsx',
		}),
	},
	{
		id: '2',
		name: 'file2.xlsx',
		file: new File(['file'], 'file2.xlsx', {
			type: 'xlsx',
		}),
	},
]

export function renderUploadFile() {
	return render(<UploadFile />)
}

export function getBtnSubmit() {
	return screen.getByRole('button', { name: /Consultar Nomes/i })
}
