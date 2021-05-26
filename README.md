This is the repository for my presentation on Typescript

## Repository structure

You can find the slides on [Google Slides](https://docs.google.com/presentation/d/1A-PYMYWXdtiAba99utOQxoAfHv1kzXE8DROIA2hZqp0/edit?usp=sharing) or as a [PDF](./other/slides.pdf).

Inside the `useless-facts-complete` folder is the finished example project.

Inside the `useless-facts` folder is the preset for the presentation. All the HTML and CSS is already done, left is the typescript implementation.

## Commands cheat sheet

The following commands are used to setup the environment. For them to work you have to be inside the `useless-facts` directory and have npm installed.

```bash
# creates & initializes package.json
npm init -y
```

```bash
# install typescript into this project
npm install --save-dev typescript
```

```bash
# creates & initializes tsconfig.json (use npx if it doesn't work otherwise)
[npx] tsc --init
```

```json
/* Working tsconfig.json */
{
	"compilerOptions": {
		/* Visit https://aka.ms/tsconfig.json to read more about this file */

		"target": "esnext",									/* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
		"module": "ESNext",									/* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
		"lib": [											/* Specify library files to be included in the compilation. */
			"ESNext",
			"DOM"
		],
		"sourceMap": true,									/* Generates corresponding '.map' file. */
		// "outDir": "./",									/* Redirect output structure to the directory. */
		"strict": true,										/* Enable all strict type-checking options. */
		"strictNullChecks": false,
		"noImplicitAny": true,								/* Raise error on expressions and declarations with an implied 'any' type. */
		"esModuleInterop": true								/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
	},
	"include": [ "./src" ]
}
```

```bash
# automatically compile all *.ts files to *.js files
[npx] tsc --watch
```

The following is optional. I use live-server to automatically refresh the browser if a file changes. (You cannot just open the index.html you will get a CORS error when making requests. You have to host it somewhere)

```bash
npm install --save-dev live-server
```

The following is also optional. 2 scripts inside the package.json

```json
{
	/* ... */
	"scripts": {
		"start": "npx live-server ./src --port=3000",
    	"watch": "tsc -w"
	}
	/* ... */
}
```
