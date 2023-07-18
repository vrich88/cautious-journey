const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

// where are args coming from

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      const userData = await User.findOne({ _id: args._id }).select(
        "-password"
      );
      return userData;
    },
    post: async (parent, args, context) => {
      const postData = await Post.findOne({ _id: args._id });
      return postData;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Username or Password incorrect");
      }

      const validPW = await user.isCorrectPassword(password);

      if (!validPW) {
        throw new AuthenticationError("Username or Password incorrect");
      }

      const token = signToken(user);
      return { token, user };
    },
    createPost: async (parent, args, context) => {
      if (context.user) {
        const newPost = await Post.create(args);
        return newPost;
      }
      throw new AuthenticationError("Only those in the know can do that");
    },

    deletePost: async (parent, args, context) => {
      if (context.user) {
        const updatedDB = await db.collection.findOneAndDelete(args);
        return updatedDB;
      }
      throw new AuthenticationError("The truth is out there");
    },
  },
  createComment: async (parent, args, context) => {
    if (context.user) {
      const newComment = await Comment.create(args);
      return newComment;
    }
    throw new AuthenticationError("Only those in the know can do that");
  },

  deleteComment: async (parent, args, context) => {
    if (context.user) {
      const updatedDB = await db.collection.findOneAndDelete(args);
      return updatedDB;
    }
    throw new AuthenticationError("The truth is out there");
  },
},
};

module.exports = resolvers;
