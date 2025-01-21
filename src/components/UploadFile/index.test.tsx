import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react'
import UploadFile from '.'
import useListFile from '@/hooks/File/useListFile'
import { userEvent } from '@testing-library/user-event'

jest.mock('@/hooks/File/useListFile')

const mockedUseAddFile = jest.fn()

jest.mock('@/hooks/File/useAddFile', () => ({
	__esModule: true,
	default: () => mockedUseAddFile,
}))

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

	afterEach(() => {
		jest.restoreAllMocks()
	})

	it('should be possible upload single file', async () => {
		const user = userEvent.setup()

		renderUploadFile()

		const inputFile = screen.queryByTestId('uploadFile') as HTMLInputElement

		await user.upload(inputFile, files[0].file)

		expect(inputFile.files?.length).toBe(1)
		expect(inputFile.files?.item(0)).toBe(files[0].file)
		expect(mockedUseAddFile).toHaveBeenCalledTimes(1)
	})

	it('should be possible upload multiple files', async () => {
		const user = userEvent.setup()

		renderUploadFile()

		const inputFile = screen.getByTestId('uploadFile') as HTMLInputElement

		await user.upload(inputFile, [files[0].file, files[1].file])

		expect(inputFile.files?.length).toBe(2)
		expect(inputFile.files?.item(0)).toBe(files[0].file)
		expect(inputFile.files?.item(1)).toBe(files[1].file)
		expect(mockedUseAddFile).toHaveBeenCalledTimes(1)
	})

	it('should not be possible check domains without having files selected', () => {
		;(useListFile as jest.Mock).mockReturnValue([])

		renderUploadFile()

		const btnSubmit = getBtnSubmit()

		expect(btnSubmit).toBeNull()
	})

	it('should be possible check domains if having files selected', () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadFile()

		const btnSubmit = getBtnSubmit()

		expect(btnSubmit).toBeInTheDocument()
		expect(btnSubmit).toHaveAttribute('type', 'submit')
	})

	it('should show a spinner loading when submit button is clicked', async () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])
		const user = userEvent.setup()

		renderUploadFile()

		const btnSubmit = getBtnSubmit()
		await user.click(btnSubmit)

		expect(btnSubmit).toBeInTheDocument()
		expect(btnSubmit).toHaveAttribute('type', 'submit')
		expect(mockedUseSetLoading).toHaveBeenNthCalledWith(1, true)
	})

	it('should hide spinner loading after finishing form submiting', async () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])
		const user = userEvent.setup()

		renderUploadFile()

		const btnSubmit = getBtnSubmit()
		await user.click(btnSubmit)

		expect(btnSubmit).toBeInTheDocument()
		expect(btnSubmit).toHaveAttribute('type', 'submit')
		expect(mockedUseSetLoading).toHaveBeenNthCalledWith(2, false)
		expect(mockedUseSetLoading).toHaveBeenCalledTimes(2)
	})

	it('should navigation to another page when submit button is clicked', async () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])
		const user = userEvent.setup()

		renderUploadFile()

		const btnSubmit = getBtnSubmit()
		await user.click(btnSubmit)

		expect(btnSubmit).toBeInTheDocument()
		expect(btnSubmit).toHaveAttribute('type', 'submit')
		expect(mockedUseRouterPush).toHaveBeenCalledTimes(1)
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
		id: 1,
		file: new File(['file'], 'file1.xlsx', {
			type: 'xlsx',
		}),
	},
	{
		id: 2,
		file: new File(['file'], 'file2.xlsx', {
			type: 'xlsx',
		}),
	},
]

export function renderUploadFile() {
	return render(<UploadFile />)
}

export function getBtnSubmit() {
	return screen.queryByRole('button', {
		name: /Consultar Nomes/i,
	}) as HTMLButtonElement
}
