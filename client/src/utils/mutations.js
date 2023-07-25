import { gql } from '@apollo/client';

// we need to work on mutations

export const CREATE_USER = gql`
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

export const CREATE_POST = gql`
mutation createPost($title: String!, $body: String!) {
  createPost(title: $title, body: $body) {
      _id
      title
      body
  }
}
`

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

// export const DELETE_POST = gql`
//   mutation deletePost($_id: ID!) {
//     deletePost(_id: $_id) {
//       _id
//       title
//       tags
//       body
//       user
//       views
//       votes
//       time
//       }
//     }
//   }
// `;

export const CREATE_COMMENT = gql`
  mutation createComment($commentData: CommentInput!) {
    createComment(commentData: $commentData) {
      _id
      post
      body
    }
  }
`;

// export const DELETE_COMMENT = gql`
//   mutation deleteComment($_id: ID!) {
//     deleteComment(_id: $_id) {
//       _id
//       user
//       post
//       body
//       votes
//       time
//       }
//     }
//   }
// `;
