import { writeFileSync } from 'fs'

interface JsonToDotOptions {
	json: Record<string, any>
	shouldWriteFile?: boolean
	targetFilePath?: string
}

export const jsonToDot = (options: JsonToDotOptions): string => {
	let { json } = options
	const { shouldWriteFile, targetFilePath } = options
	if ( typeof json === 'string' ) {
		json = JSON.parse(json)
	}

	let dotString = ''
	Object.keys(json).forEach((key: string)=>{
		dotString = `${dotString}${key}=${json[key]}
`
	})

	if ( shouldWriteFile ) {
		if ( !targetFilePath ) {
			throw new Error('缺少 targetFilePath，请检查您的参数')
		}
		writeFileSync(targetFilePath, dotString)
	}

	return dotString
}

interface DotToJsonOptions {
	dot: string
	shouldWriteFile?: boolean
	targetFilePath?: string
}

export const dotToJson = (options: DotToJsonOptions): Record<string, any> => {
	const { dot, shouldWriteFile, targetFilePath } = options
	const regx = new RegExp(' ', 'g')
	const envArray = dot.replace(regx, '').split('\n')

	const outputJson: Record<string, any> = {}

	envArray.forEach((env: string)=>{
		const [key, value] = env.split('=')
		outputJson[key] = value
	})

	if (shouldWriteFile) {
		if (!targetFilePath) {
			throw new Error('缺少 targetFilePath，请检查您的参数')
		}
		writeFileSync(targetFilePath, JSON.stringify(outputJson, undefined, 2), {
			encoding: 'utf-8'
		})
	}

	return outputJson
}


