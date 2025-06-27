const options = require('@snailicide/build-config/eslint')

module.exports = {
    ...options,
    root: true,
    overrides: [
        {
            files: ['./*', './*'],
            rules: {
                'no-undef': 'warn',
                '@typescript-eslint/no-unused-vars': 'warn',
                '@typescript-eslint/no-var-requires': 'warn',
            },
        },
    ],
}
