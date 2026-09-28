import nextConfig from 'eslint-config-next'
import prettier from 'eslint-config-prettier'

const eslintConfig = [
  ...nextConfig,
  prettier,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**'],
  },
]

export default eslintConfig
