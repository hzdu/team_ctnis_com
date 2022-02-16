module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	ignorePatterns: [ '**/vendor/**' ],
	rules: {
		'@wordpress/no-global-event-listener': 'off',
	},
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:import/typescript',
			],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@wordpress/no-global-event-listener': 'off',
			},
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': [ '.ts', '.tsx' ],
				},
				'import/resolver': {
					typescript: {
						alwaysTryTypes: true,
					},
				},
			},
		},
	],
};
