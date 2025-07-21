import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
// import jsxA11y from 'eslint-plugin-jsx-a11y'
// import importPlugin from 'eslint-plugin-import'
// import unocss from 'eslint-plugin-unocss'

export default [
  // Base JavaScript recommendations
  js.configs.recommended,

  // UnoCSS plugin has peer dependency issues with ESLint 9
  // unocss.configs.recommended,

  // Accessibility rules - comment out for now
  // jsxA11y.configs.recommended,

  // Main configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser, // ✅ Use dedicated parser import
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        // Node globals
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Modern JavaScript
        Promise: 'readonly',
        Symbol: 'readonly',
        Map: 'readonly',
        Set: 'readonly',
        WeakMap: 'readonly',
        WeakSet: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      // 'jsx-a11y': jsxA11y,
      // 'import': importPlugin,
      // 'unocss': unocss,
    },
    rules: {
      // Disable base rules that are covered by TypeScript equivalents
      'no-unused-vars': 'off', // Use @typescript-eslint version instead
      'no-undef': 'off', // TypeScript handles this

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/prop-types': 'off', // Using TypeScript
      'react/jsx-uses-react': 'error', // Mark React as used in JSX
      'react/jsx-uses-vars': 'error', // Mark variables used in JSX as used
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Accessibility rules - commented out for now
      // 'jsx-a11y/anchor-is-valid': 'warn',
      // 'jsx-a11y/alt-text': 'warn',
      // 'jsx-a11y/click-events-have-key-events': 'warn',

      // Import organization rules - commented out for now
      // 'import/order': [
      //   'error',
      //   {
      //     groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      //     'newlines-between': 'always',
      //     pathGroups: [
      //       { pattern: 'react', group: 'external', position: 'before' },
      //       { pattern: '@/**', group: 'internal' },
      //     ],
      //     pathGroupsExcludedImportTypes: ['react'],
      //   },
      // ],
      // 'import/no-duplicates': 'error',

      // UnoCSS rules - commented out due to peer dependency issues
      // 'unocss/order': 'warn',
      // 'unocss/order-attributify': 'warn',
      // 'unocss/blocklist': 'error',
      // 'unocss/enforce-class-compile': 'warn',

      // General rules
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
      // unocss: {
      //   configPath: './uno.config.ts',
      // },
      // 'import/resolver': {
      //   typescript: {
      //     alwaysTryTypes: true,
      //     project: './tsconfig.json',
      //   },
      // },
    },
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.git/**',
      'coverage/**',
      '.history/**', // VS Code local history
      '**/*.min.js',
      '**/*.bundle.js',
      'build/**',
      'public/**',
    ],
  },
]
