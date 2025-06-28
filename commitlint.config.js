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
                'pyromancy-calendar',
                'theme-pyromancy2025',
                'theme-pyromancy2014',
                'google-calendar-util',
            ],
        ],
    },
}
