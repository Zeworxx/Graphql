import gql from "graphql-tag";

export const typeDefs = gql`
type Query {
  divide(number1: Int!, number2: Int!): Float
}

type Mutation {
  createUser(username: String!, password: String!): CreateUserResponse
  signIn(username: String!, password: String!): SignInResponse
  createArticle(content: String!, userId: ID!): CreateArticleResponse
}

type CreateUserResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: User
}

type SignInResponse {
  code: Int!
  success: Boolean!
  message: String!
  token: String
}

type CreateArticleResponse {
  code: Int!
  success: Boolean!
  message: String!
  article: Article
}

type User {
  id: ID!
  username: String!
}

type Article {
  id: ID!
  content: String!
  userId: ID!
}
`