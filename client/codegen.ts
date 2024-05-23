import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000',
  documents: './src/graphql/schema.graphql',
  generates: {
    './src/generated/': {
      plugins: ['typescript', 'typescript-operations'],
    }
  }
}

export default config