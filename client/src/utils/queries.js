import { gql } from '@apollo/client';

export const QUERY_ALLUSERS = gql`
  query allUsers {
    users {
      _id: ID!
      username: String!
      email: String
      password: String!
      posts: [Post]
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

export const QUERY_POST = gql`
  {
    post {
      _id
      title
      tag
      body
      comments
    }
  }
`;