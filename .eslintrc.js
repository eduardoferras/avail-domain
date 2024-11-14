module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'plugin:import/warnings', 'plugin:import/errors'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				printWidth: 140,
				tabWidth: 2,
				singleQuote: true,
				trailingComma: 'all',
				arrowParens: 'always',
				semi: false,
				endOfLine: 'lf',
			},
		],
	},
}
