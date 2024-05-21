import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000',
  documents: './src/**/*.vue',
  generates: {
    './src/graphql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo']
    }
  }
}

export default config