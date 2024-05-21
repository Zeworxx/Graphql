import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";
import { createUser } from "./mutations/createUser.js";
import { signIn } from "./mutations/signIn.js";
import { createArticle } from "./mutations/createArticle.js";
import { createComment } from "./mutations/createComment.js";
import { likeArticle, unlikeArticle } from "./mutations/likeArticle.js";
import { deleteComment } from "./mutations/deleteComment.js";
import { deleteArticle } from "./mutations/deleteArticle.js";
import { updateArticle } from "./mutations/updateArticle.js";

export const resolvers: Resolvers = {
  Query: {
    getArticles: async (_, __, { dataSources }) => {
      const articles = await dataSources.db.article.findMany();

      if (!articles || articles.length === 0) {
        throw new GraphQLError("No articles found");
      }
      return articles;
    },
  },
  Mutation: {
    createUser: createUser,
    signIn: signIn,
    createArticle: createArticle,
    createComment: createComment,
    likeArticle: likeArticle,
    unlikeArticle: unlikeArticle,
    deleteComment: deleteComment,
    deleteArticle: deleteArticle,
    updateArticle: updateArticle
  },
}