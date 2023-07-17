import { gql } from '@apollo/client';

// does user need to be destructured anywhere

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($postData: PostInput!) {
    createPost(postData: $postData) {
      _id
      title
      tags
      body
      user
      views
      votes
      time
    }
  }
`;

export const DELETE_POST = gql`
  mutation removeBook($_id: ID!) {
    removeBook(_id: $_id) {
      _id
      title
      tags
      body
      user
      views
      votes
      time
      }
    }
  }
`;
