/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import type * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Like>>;
  userId: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  articleId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type CreateArticleResponse = {
  __typename?: 'CreateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type DefaultResponse = {
  __typename?: 'DefaultResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Like = {
  __typename?: 'Like';
  articleId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticleResponse>;
  createComment?: Maybe<CreateCommentResponse>;
  createUser?: Maybe<CreateUserResponse>;
  deleteArticle?: Maybe<DefaultResponse>;
  deleteComment?: Maybe<DefaultResponse>;
  likeArticle?: Maybe<DefaultResponse>;
  signIn?: Maybe<SignInResponse>;
  unlikeArticle?: Maybe<DefaultResponse>;
  updateArticle?: Maybe<UpdateArticleResponse>;
};


export type MutationCreateArticleArgs = {
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateCommentArgs = {
  articleId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLikeArticleArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUnlikeArticleArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getArticles?: Maybe<Array<Article>>;
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UpdateArticleResponse = {
  __typename?: 'UpdateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserResponse', success: boolean, message: string, user?: { __typename?: 'User', id: string, username: string } | null } | null };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Like>>;
  userId: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  articleId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type CreateArticleResponse = {
  __typename?: 'CreateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type DefaultResponse = {
  __typename?: 'DefaultResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Like = {
  __typename?: 'Like';
  articleId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticleResponse>;
  createComment?: Maybe<CreateCommentResponse>;
  createUser?: Maybe<CreateUserResponse>;
  deleteArticle?: Maybe<DefaultResponse>;
  deleteComment?: Maybe<DefaultResponse>;
  likeArticle?: Maybe<DefaultResponse>;
  signIn?: Maybe<SignInResponse>;
  unlikeArticle?: Maybe<DefaultResponse>;
  updateArticle?: Maybe<UpdateArticleResponse>;
};


export type MutationCreateArticleArgs = {
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateCommentArgs = {
  articleId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLikeArticleArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUnlikeArticleArgs = {
  articleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getArticles?: Maybe<Array<Article>>;
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UpdateArticleResponse = {
  __typename?: 'UpdateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserResponse', success: boolean, message: string, user?: { __typename?: 'User', id: string, username: string } | null } | null };


export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    success
    message
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateUserMutation({
 *   variables: {
 *     username: // value for 'username'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(options: VueApolloComposable.UseMutationOptions<CreateUserMutation, CreateUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateUserMutation, CreateUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
}
export type CreateUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateUserMutation, CreateUserMutationVariables>;