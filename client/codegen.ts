import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000',
  documents: './src/**/*.gql',
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo']
    }
  }
}

export default config
