import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";
import { createUser } from "./mutations/createUser.js";
import { signIn } from "./mutations/signIn.js";

export const resolvers: Resolvers = {
  Query: {
    divide: (parent, { number1, number2 }, context, info) => {
      if (number2 === 0) {
        throw new GraphQLError('cannot divide by 0')
      }
      return number1 / number2
    },
  },
  Mutation: {
    createUser: createUser,
    signIn: signIn
  },
}