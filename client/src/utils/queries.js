import { gql } from '@apollo/client';

export const QUERY_ALLUSERS = gql`
  query allUsers {
    users {
      _id: ID!
      username: String!
      email: String
      password: String!
    }
  }
`;


export const QUERY_USER = gql`
  {
    singleUser {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_ALLPOSTS = gql`
  query allPosts {
    posts {
      _id: ID!
      title: String!
      body: String!
    }
  }
`;

export const QUERY_POST = gql`
  {
    singlePost {
      _id
      title
      body
    }
  }
`;