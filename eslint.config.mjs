import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const tsConfig = [
  ...tseslint
    .config(tseslint.configs.recommended, {
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
      },
    })
    .map((c) => ({
      ...c,
      files: ['**/*.{ts,tsx}'],
    })),
]

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tsConfig,
  pluginReact.configs.flat.recommended,
  pluginReactJSXRuntime,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),
  eslintConfigPrettier,
]

export default config
