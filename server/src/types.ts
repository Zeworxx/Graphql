import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticleResponse>;
  createComment?: Maybe<CreateCommentResponse>;
  createUser?: Maybe<CreateUserResponse>;
  signIn?: Maybe<SignInResponse>;
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


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  divide?: Maybe<Scalars['Float']['output']>;
};


export type QueryDivideArgs = {
  number1: Scalars['Int']['input'];
  number2: Scalars['Int']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateArticleResponse: ResolverTypeWrapper<CreateArticleResponse>;
  CreateCommentResponse: ResolverTypeWrapper<CreateCommentResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CreateArticleResponse: CreateArticleResponse;
  CreateCommentResponse: CreateCommentResponse;
  CreateUserResponse: CreateUserResponse;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  User: User;
};

export type ArticleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  articleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateArticleResponse'] = ResolversParentTypes['CreateArticleResponse']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateCommentResponse'] = ResolversParentTypes['CreateCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createArticle?: Resolver<Maybe<ResolversTypes['CreateArticleResponse']>, ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'content' | 'userId'>>;
  createComment?: Resolver<Maybe<ResolversTypes['CreateCommentResponse']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'articleId' | 'content' | 'userId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  signIn?: Resolver<Maybe<ResolversTypes['SignInResponse']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'password' | 'username'>>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  divide?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryDivideArgs, 'number1' | 'number2'>>;
};

export type SignInResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Article?: ArticleResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CreateArticleResponse?: CreateArticleResponseResolvers<ContextType>;
  CreateCommentResponse?: CreateCommentResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

