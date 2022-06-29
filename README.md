# @lexmin0412/env

functions about envs.

## API

### `jsonToDot`

```ts
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
```

### `dotToJson`

```ts
const string = `env1 = value1
env2 = value2`

dotToJson({dot: string, shouldWriteFile: true, targetFilePath: resolve(__dirname, 'target.json')})
```

## To be continued

```ts
interface JsonToDotOptions {
	keyHandlerOptions?: StringHandlerOptions
	nameHandlerOptions?: StringHandlerOptions
}

/**
 * to be achieved
 */
interface StringHandlerOptions {
	tobeRemovedPrefix?: string
	tobeAddedPrefix?: string
	tobeRemovedSuffix?: string
	tobeAddedSuffix?: string
	toUpperCase?: boolean
	toLowerCase?: boolean
}
```
