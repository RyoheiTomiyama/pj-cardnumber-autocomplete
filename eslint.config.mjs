import globals from 'globals'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import eslintConfigPrettier from 'eslint-config-prettier'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactJSXRuntime,
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),
  eslintConfigPrettier,
  {
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]

export default config
