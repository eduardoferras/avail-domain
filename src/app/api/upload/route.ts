import { read, stream } from 'xlsx'
import { Readable, Transform, Writable } from 'stream'
import { createWriteStream } from 'fs'
import { headers } from 'next/headers'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export async function POST(req: NextRequest, res: NextResponse) {
	const fileFormData = await req.formData()
	const files = fileFormData.getAll('files') as File[]

	if (!files.length) {
		return NextResponse.json({ error: 'File is required.' }, { status: 400 })
	}

	const filesBuffer = await Promise.all(
		files.map(async (file) => {
			return await file.arrayBuffer()
		}),
	)

	var trans = new Transform({ writableObjectMode: true })
	trans._transform = function (obj, e, cb) {
		cb(null, obj + '\n')
	}

	const outStream = new Writable({
		write(chunk, encoding, callback) {
			callback()
		},
	})

	const blobStream = filesBuffer.map((file) => {
		const wb = read(file, { dense: true })
		const firstWs = wb.Sheets[wb.SheetNames[0]]
		stream.set_readable(Readable)
		stream
			.to_json(firstWs, { header: 1, blankrows: false })
			.pipe(trans)
			.pipe(process.stdout)
	}) as unknown as Blob

	const newHeaders = new Headers()
	newHeaders.set('Content-Disposition', `attachment; filename="teste.xlsx"`)
	newHeaders.set('Content-Type', 'xlsx')

	return new NextResponse(blobStream, {
		headers: newHeaders,
	})
}

// return NextResponse.next({
// 	request: {
// 		headers: newsHeaders,
// 	},
// })
// const teste = XLSX.stream.set_readable(Readable)
// const readerTeste = req.body?.pipeThrough(new TextDecoderStream()).pipeTo(
// 	new WritableStream({
// 		write(chunk) {
// 			console.log('chunk', chunk)
// 		},
// 	}),
// )
// const teste = await readerTeste?.read()
// console.log(teste?.value?.toString())
// // const file: File | null = data.get('file') as unknown as File

// const pipelineAsync = promisify(pipeline)

// const readableStream = new Readable({
// 	read() {
// 		// for (let index = 0; index < 1e5; index++) {
// 		// 	const person = { id: Date.now() + index, name: `Eduardo-${index}` }
// 		// 	const data = JSON.stringify(person)
// 		// 	this.push(data)
// 		// }
// 		this.push(buffer)
// 		this.push(null)
// 	},
// })

// readableStream.on('data', function (data) {
// 	console.log(data)
// })

// readableStream.on('end', () => {
// 	console.log('acabou')
// })

// const transformString = new Transform({
// 	transform(chunk, encoding, callback) {
// 		const objJson = JSON.parse(chunk)
// 		console.log('chunk', objJson)
// 		const data = JSON.stringify(chunk.toString()).concat('\n')
// 		callback(null, data)
// 	},
// })

// const transformUpperCase = new Transform({
// 	transform(chunk, encoding, callback) {
// 		// const data = chunk.toString()
// 		// const data = JSON.parse(chunk)
// 		// console.log('teste', chunk)
// 		const result = chunk.toUpperCase()
// 		// const result = `${'teste'}, ${data.toLowerCase()}`
// 		callback(null, result)
// 	},
// })

// const writableStream = new Writable({
// 	write(chunk, encoding, callback) {
// 		console.log('msg', chunk.toString())
// 		callback()
// 	},
// })

// await pipeline(
// readableStream,
// transformString,
// transformUpperCase,
// writableStream,
// createWriteStream('teste5.csv'),
// )

// readableStream.on('data', (chunk) => {
// 	console.log('item ', chunk.toString())
// })

// const teste = createReadStream(path.join(process.cwd(), 'teste.txt'))
// console.log(teste)
// const reader = req.body?.stream().getReader()
// console.log(reader)
// const webReader = Readable.toWeb(reader)
// try {
// 	while(true) {
// 		const {done, value} = await reader?.read()

// 	}
// } catch (error) {

// }
// console.log(teste)
// const data = await req.formData()
// const files = data.get('file') as File
// console.log(files?.stream().getReader().toString())

// const bytes = await req.body?.arrayBuffer()
// const buffer = Buffer.from(bytes)

// const readable = new Readable()
// readable.push(req.body)
// readable.on('data', (chunk) => {
// 	console.log(chunk)
// })
// readable.push(null)
// // readable.pipe(XLSX.read())
// readable.on('data', console.log)
// const wb = XLSX.read(buffer)
// const dataFile = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
// console.log(dataFile)

// const domain = 'zidane.com.br'

// readFile(path.join(process.cwd(), 'teste.txt'), (error, data) => {
// 	if (error) throw error
// 	console.log(data)
// })
