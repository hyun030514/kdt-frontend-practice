import { gql } from "@apollo/client";

export const GET_ALL_POST = gql`
  query GETALLPOST {
    posts {
      id
      title
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query GetPostById($postId: ID!) {
    post(id: $postId) {
      title
      content
      author {
        username
      }
    }
  }
`;
