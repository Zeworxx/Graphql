/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation signIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    token\n    userId\n    code\n    message\n    success\n  }\n}": types.SignInDocument,
    "mutation CreateUser($username: String!, $password: String!) {\n                    createUser(username: $username, password: $password) {\n                        code\n                        success\n                        message\n                        user {\n                        id\n                        username\n                        }\n                    }\n                }": types.CreateUserDocument,
    "\n  mutation CreateArticle($content: String!, $userId: ID!) {\n    createArticle(content: $content, userId: $userId) {\n      message\n      code\n      success\n    }\n  }\n": types.CreateArticleDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation signIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    token\n    userId\n    code\n    message\n    success\n  }\n}"): (typeof documents)["mutation signIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    token\n    userId\n    code\n    message\n    success\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($username: String!, $password: String!) {\n                    createUser(username: $username, password: $password) {\n                        code\n                        success\n                        message\n                        user {\n                        id\n                        username\n                        }\n                    }\n                }"): (typeof documents)["mutation CreateUser($username: String!, $password: String!) {\n                    createUser(username: $username, password: $password) {\n                        code\n                        success\n                        message\n                        user {\n                        id\n                        username\n                        }\n                    }\n                }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateArticle($content: String!, $userId: ID!) {\n    createArticle(content: $content, userId: $userId) {\n      message\n      code\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArticle($content: String!, $userId: ID!) {\n    createArticle(content: $content, userId: $userId) {\n      message\n      code\n      success\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;