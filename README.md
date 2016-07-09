# babel-preset-bluebird

This package combines [async-to-bluebird](https://www.npmjs.com/package/babel-plugin-transform-async-to-bluebird) and [promise-to-bluebird](https://www.npmjs.com/package/babel-plugin-transform-promise-to-bluebird) into one preset.

## Usage

1. Install: `npm install --save-dev babel-preset-bluebird`
2. Add *babel-preset-bluebird* to your *.babelrc* file:
```json
{
	"presets": ["bluebird"]
}
```
3. Install bluebird: `npm install --save bluebird`


### With *babel-plugin-transform-runtime* enabled

1. Install: `npm install --save-dev babel-plugin-transform-async-to-bluebird babel-plugin-transform-promise-to-bluebird`
2. Add the plugins to your *.babelrc* file:
```json
{
	"plugins": [
		"transform-async-to-bluebird",
		"transform-promise-to-bluebird",
		"transform-runtime"
	]
}
```
3. Install bluebird: `npm install --save bluebird`
