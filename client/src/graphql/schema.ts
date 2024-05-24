import gql from "graphql-tag"

const schema = gql` 
  query GetArticles {
    getArticles {
      id
      content
      userId
      comments {
        id
        content
        userId
        articleId
      }
      likes {
        id
        userId
        articleId
      }
    }
  }

  mutation CreateArticle($content: String!, $userId: ID!) {
    createArticle(content: $content, userId: $userId) {
      code
      success
      message
      article {
        id
        userId
        content
      }
    }
  }

  mutation CreateComment($content: String!, $userId: ID!, $articleId: ID!) {
    createComment(content: $content, userId: $userId, articleId: $articleId) {
      code
      success
      message
      comment {
        id
        content
        userId
        articleId
      }
    }
  }

  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      code
      success
      message
    }
  }

  mutation DeleteArticle($articleId: String!, $userId: ID!) {
    deleteArticle(articleId: $articleId, userId: $userId) {
      code
      success
      message
    }
  }

  mutation DeleteComment($articleId: String!, $userId: ID!) {
    deleteComment(articleId: $articleId, userId: $userId) {
      code
      success
      message
    }
  }

  mutation LikeArticle($articleId: String!, $userId: String!) {
    likeArticle(articleId: $articleId, userId: $userId) {
      code
      success
      message
    }
  }

  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      code
      success
      message
      token
    }
  }

  mutation UnlkieArticle($articleId: String!, $userId: String!) {
    unlikeArticle(articleId: $articleId, userId: $userId) {
      code
      success
      message
    }
  }

  mutation UpdateArticle($updateArticleId: ID!, $content: String!) {
    updateArticle(id: $updateArticleId, content: $content) {
      code
      success
      message
      article {
        id
      }
    }
  }
`

// const typeDefs = gql`
// type Query {
//   getArticles: [Article!]
// }

// type Mutation {
//   createUser(username: String!, password: String!): CreateUserResponse
//   signIn(username: String!, password: String!): SignInResponse
//   createArticle(content: String!, userId: ID!): CreateArticleResponse
//   createComment(content: String!, userId: ID!, articleId: ID!): CreateCommentResponse
//   likeArticle(articleId: String!, userId: String!): DefaultResponse
//   unlikeArticle(articleId: String!, userId: String!): DefaultResponse
//   deleteComment(articleId: String!, userId: ID!): DefaultResponse  
//   deleteArticle(articleId: String!, userId: ID!): DefaultResponse
//   updateArticle(id: ID!, content: String!): UpdateArticleResponse
// }

// type DefaultResponse {
//   code: Int!
//   success: Boolean!
//   message: String!
// }

// type CreateUserResponse {
//   code: Int!
//   success: Boolean!
//   message: String!
//   user: User
// }

// type SignInResponse {
//   code: Int!
//   success: Boolean!
//   message: String!
//   token: String
// }

// type CreateArticleResponse {
//   code: Int!
//   success: Boolean!
//   message: String!
//   article: Article
// }

// type UpdateArticleResponse {
//   code: Int!
//   success: Boolean!
//   message: String!
//   article: Article
// }

// type CreateCommentResponse {
//   code: Int!
//   success: Boolean!
//   message: String!
//   comment: Comment
// }

// type User {
//   id: ID!
//   username: String!
// }

// type Like {
//   id: ID!
//   userId: String!
//   articleId: String!
// }

// type Article {
//   id: ID!
//   content: String!
//   userId: String!
//   comments: [Comment!]
//   likes: [Like!]
// }

// type Comment {
//   id: ID!
//   content: String!
//   userId: String!
//   articleId: String!
// }
// `