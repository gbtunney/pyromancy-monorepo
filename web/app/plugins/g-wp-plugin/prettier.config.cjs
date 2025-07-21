// @ts-check
/* node */
/** @file Local package prettier config file */
const { Prettier, merge } = require('@snailicide/build-config')
module.exports = merge(Prettier.config, {
    plugins: ['@prettier/plugin-php'],
    overrides: [
        {
            files: 'inc/*.php',
            options: {
                arrowParens: 'avoid',
                bracketSpacing: true,
                htmlWhitespaceSensitivity: 'css',
                insertPragma: false,
                jsxBracketSameLine: false,
                jsxSingleQuote: false,
                printWidth: 80,
                proseWrap: 'preserve',
                requirePragma: false,
                semi: false,
                singleQuote: true,
                tabWidth: 2,
                trailingComma: 'none',
                useTabs: true,
                endOfLine: 'auto',
            },
        },
    ],
})
