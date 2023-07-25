const { gql } = require("apollo-server-express");

// do all args/model props need to be in mutations
// what should return type be for post mutations
// is timePosted a string

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!

    }

    type Auth {
      token: ID!
      user: User
    }

    type Post {
        _id: ID!
        title: String!
        body: String!
    }

    type Comment {
        _id: ID!
        user: User
        body: String
    }

    type Tag {
        name: String
    }

    input CommentInput {
        _id: ID!
        comment: String
    }

    type Query {
        users: [User]
        singleUser: User
        singlePost: Post
        posts: [Post]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        createPost(title: String!, body: String!): Post
        deletePost(_id: ID!): Post
        createComment(commentData: CommentInput!): Comment
        deleteComment(_id: ID!): Comment
    }
`;
module.exports = typeDefs;