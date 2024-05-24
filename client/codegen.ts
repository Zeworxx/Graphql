import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000',
  documents: './src/graphql/**/*.graphql',
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        useTypeImports: true 
      }
    }
  }
};

export default config;
