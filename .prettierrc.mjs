// .prettierrc.mjs
export default {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'xml',
        plugins: ['@prettier/plugin-xml'],
      },
    },
  ],
}