import UploadList from '.'
import { cleanup, render, screen } from '@testing-library/react'
import useListFile from '@/hooks/File/useListFile'
import userEvent from '@testing-library/user-event'

jest.mock('@/hooks/File/useListFile')

const mockedUseRemoveFile = jest.fn()

jest.mock('@/hooks/File/useRemoveFile', () => ({
	__esModule: true,
	default: () => mockedUseRemoveFile,
}))

afterEach(cleanup)

describe('UploadList behavior', () => {
	beforeEach(() => {
		jest.clearAllMocks()
		jest.resetAllMocks()
	})

	afterEach(() => {
		jest.restoreAllMocks()
	})

	it('should render a list of files after file has been selected', () => {
		;(useListFile as jest.Mock).mockReturnValue([files[0]])

		renderUploadList()

		const itens = getListItems()

		expect(itens).toHaveLength(1)
	})

	it('should render a list of files after multiple files have been selected', () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		renderUploadList()

		const itens = getListItems()

		expect(itens).toHaveLength(files.length)
	})

	it('should remove one file from list when remove button is clicked', async () => {
		;(useListFile as jest.Mock).mockReturnValue([...files])

		const user = userEvent.setup()

		renderUploadList()

		const btnRemove = await screen.findAllByRole('button')
		const itens = getListItems()

		expect(itens).toHaveLength(2)

		await user.click(btnRemove[0])

		expect(mockedUseRemoveFile).toHaveBeenCalledTimes(1)
	})
})

const files = [
	{
		id: '1',
		file: new File(['file'], 'file1.xlsx', {
			type: 'xlsx',
		}),
	},
	{
		id: '2',
		file: new File(['file'], 'file2.xlsx', {
			type: 'xlsx',
		}),
	},
]

export function getListItems() {
	return screen.getAllByRole('listitem')
}

export function renderUploadList() {
	return render(<UploadList />)
}
