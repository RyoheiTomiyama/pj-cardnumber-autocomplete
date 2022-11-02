/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
}
