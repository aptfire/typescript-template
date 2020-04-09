module.exports =  {
	parser:  '@typescript-eslint/parser',
	extends:  [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	parserOptions:  {
		ecmaVersion:  2017,
		sourceType:  'module',
	},
	rules:  {
		'@typescript-eslint/no-non-null-assertion': 'off'
	},
};
