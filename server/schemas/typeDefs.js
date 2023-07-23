const { gql } = require("apollo-server-express");

// do all args/model props need to be in mutations
// what should return type be for post mutations
// is timePosted a string

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        password: String!
        posts: [Post]

    }

    type Post {
        _id: ID!
        title: String!
        tags: String
        body: String!
        timePosted: String
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        user: User
        body: String
        timePosted: String
    }

    type Tag {
        name: String
        used: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    input PostInput {
        _id: ID!
        title: String!
        tags: String
        body: String!
        timePosted: String
    }

    input CommentInput {
        _id: ID!
        comment: String
        timePosted: String
    }

    type Query {
        user: User
        post: Post
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        createPost(postData: PostInput!): Post
        deletePost(_id: ID!): Post
        createComment(commentData: CommentInput!): Comment
        deleteComment(_id: ID!): Comment
    }
`;
module.exports = typeDefs;