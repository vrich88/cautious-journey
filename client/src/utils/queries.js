import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
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
      tags
      body
      user
      timePosted
    }
  }
`;