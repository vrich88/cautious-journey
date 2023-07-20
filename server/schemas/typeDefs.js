const { gql } = require("apollo-server-express");

// do all args/model props need to be in mutations
// what should return type be for post mutations
// is time a string

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        password: String!
    }

    type Post {
        _id: ID!
        title: String!
        tags: String
        body: String!
        user: User
        views: Number
        votes: Number
        time: Date
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        post: Post
        body: String
        votes: Number
        time: Date
    }

    type Tag {
        name: String
        used: Number
    }

    type Auth {
        token: ID!
        user: User
    }

    type PostInput {
        _id: ID!
        title: String!
        tags: String
        body: String!
        user: User
        views: Number
        votes: Number
        time: Date
    }

    type CommentInput {
        _id: ID!
        post: String
        comment: String
        votes: Number
        time: Date
    }

    type Query {
        user: User
        post: Post
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        createPost(postData: PostInput!): User
        deletePost(_id: ID!): User
        createComment(commentData: CommentInput!): User
        deleteComment(_id: ID!): User
    }
`;
module.exports = typeDefs;
