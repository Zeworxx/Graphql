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
    "mutation CreateArticle($content: String!, $userId: ID!) {\n  createArticle(content: $content, userId: $userId) {\n    code\n    success\n    message\n    article {\n      id\n      userId\n      content\n    }\n  }\n}": types.CreateArticleDocument,
    "mutation CreateComment($content: String!, $userId: ID!, $articleId: ID!) {\n  createComment(content: $content, userId: $userId, articleId: $articleId) {\n    code\n    success\n    message\n    comment {\n      id\n      content\n      userId\n      articleId\n    }\n  }\n}": types.CreateCommentDocument,
    "mutation CreateUserMutation($username: String!, $password: String!) {\n  createUser(username: $username, password: $password) {\n    code\n    success\n    message\n  }\n}": types.CreateUserMutationDocument,
    "mutation DeleteArticle($articleId: String!, $userId: ID!) {\n  deleteArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}": types.DeleteArticleDocument,
    "mutation DeleteComment($articleId: String!, $userId: ID!) {\n  deleteComment(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}": types.DeleteCommentDocument,
    "mutation LikeArticle($articleId: String!, $userId: String!) {\n  likeArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}": types.LikeArticleDocument,
    "mutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    success\n    message\n    token\n  }\n}": types.SignInDocument,
    "mutation UnlikeArticle($articleId: String!, $userId: String!) {\n  unlikeArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}": types.UnlikeArticleDocument,
    "mutation UpdateArticle($updateArticleId: ID!, $content: String!) {\n  updateArticle(id: $updateArticleId, content: $content) {\n    code\n    success\n    message\n    article {\n      id\n    }\n  }\n}": types.UpdateArticleDocument,
    "query GetArticlesQuery {\n  getArticles {\n    id\n    content\n    userId\n    comments {\n      id\n      content\n      userId\n      articleId\n    }\n    likes {\n      id\n      userId\n      articleId\n    }\n  }\n}": types.GetArticlesQueryDocument,
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
export function graphql(source: "mutation CreateArticle($content: String!, $userId: ID!) {\n  createArticle(content: $content, userId: $userId) {\n    code\n    success\n    message\n    article {\n      id\n      userId\n      content\n    }\n  }\n}"): (typeof documents)["mutation CreateArticle($content: String!, $userId: ID!) {\n  createArticle(content: $content, userId: $userId) {\n    code\n    success\n    message\n    article {\n      id\n      userId\n      content\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateComment($content: String!, $userId: ID!, $articleId: ID!) {\n  createComment(content: $content, userId: $userId, articleId: $articleId) {\n    code\n    success\n    message\n    comment {\n      id\n      content\n      userId\n      articleId\n    }\n  }\n}"): (typeof documents)["mutation CreateComment($content: String!, $userId: ID!, $articleId: ID!) {\n  createComment(content: $content, userId: $userId, articleId: $articleId) {\n    code\n    success\n    message\n    comment {\n      id\n      content\n      userId\n      articleId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUserMutation($username: String!, $password: String!) {\n  createUser(username: $username, password: $password) {\n    code\n    success\n    message\n  }\n}"): (typeof documents)["mutation CreateUserMutation($username: String!, $password: String!) {\n  createUser(username: $username, password: $password) {\n    code\n    success\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteArticle($articleId: String!, $userId: ID!) {\n  deleteArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"): (typeof documents)["mutation DeleteArticle($articleId: String!, $userId: ID!) {\n  deleteArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteComment($articleId: String!, $userId: ID!) {\n  deleteComment(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"): (typeof documents)["mutation DeleteComment($articleId: String!, $userId: ID!) {\n  deleteComment(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LikeArticle($articleId: String!, $userId: String!) {\n  likeArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"): (typeof documents)["mutation LikeArticle($articleId: String!, $userId: String!) {\n  likeArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    success\n    message\n    token\n  }\n}"): (typeof documents)["mutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    success\n    message\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UnlikeArticle($articleId: String!, $userId: String!) {\n  unlikeArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"): (typeof documents)["mutation UnlikeArticle($articleId: String!, $userId: String!) {\n  unlikeArticle(articleId: $articleId, userId: $userId) {\n    code\n    success\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateArticle($updateArticleId: ID!, $content: String!) {\n  updateArticle(id: $updateArticleId, content: $content) {\n    code\n    success\n    message\n    article {\n      id\n    }\n  }\n}"): (typeof documents)["mutation UpdateArticle($updateArticleId: ID!, $content: String!) {\n  updateArticle(id: $updateArticleId, content: $content) {\n    code\n    success\n    message\n    article {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetArticlesQuery {\n  getArticles {\n    id\n    content\n    userId\n    comments {\n      id\n      content\n      userId\n      articleId\n    }\n    likes {\n      id\n      userId\n      articleId\n    }\n  }\n}"): (typeof documents)["query GetArticlesQuery {\n  getArticles {\n    id\n    content\n    userId\n    comments {\n      id\n      content\n      userId\n      articleId\n    }\n    likes {\n      id\n      userId\n      articleId\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;