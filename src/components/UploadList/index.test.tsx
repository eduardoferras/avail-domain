import UploadList from '.'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import useListFile from '@/hooks/File/useListFile'

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

	it('should render a list of files after file has been selected', () => {
		;(useListFile as jest.Mock).mockReturnValue([files[0]])

		renderUploadList()

		const itens = screen.queryAllByRole('listitem')

		expect(itens).toHaveLength(1)
	})
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

export function renderUploadList() {
	return render(<UploadList />)
}
