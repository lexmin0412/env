import { jsonToDot, dotToJson } from '../src/index'
import { resolve } from 'path'

const json = {
	"env1": "value1",
	"env2": "value2"
}

console.log(jsonToDot({json}))

console.log(jsonToDot({
	json,
	shouldWriteFile: true,
	targetFilePath: resolve(__dirname, 'result.env')
}))


const string = `env1 = value1
env2 = value2`

dotToJson({dot: string, shouldWriteFile: true, targetFilePath: resolve(__dirname, 'target.json')})
