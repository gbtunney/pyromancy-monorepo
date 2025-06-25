/**
 * @file Commitlint configuration for the Monorepo.
 * @author Gillian Tunney
 * @see [commitlint - Lint commit messages](https://commitlint.js.org/#/)
 */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never'],
        'scope-enum': [
            2,
            'always',
            [
                'root',
                'release',
                'g-wp-plugin',
                'theme-pyromancy2025',
                'theme-pyromancy2014',
                'google-calendar-util',
            ],
        ],
    },
}
