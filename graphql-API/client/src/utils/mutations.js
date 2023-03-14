import {gql} from '@apollo/client'
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(email: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: [String]
    $description: String
    $title: String
    $bookId: Int
    $image: String
    $Link: String
  ) {
    saveBook(
      authors: [String]
      description: String
      title: String
      bookId: Int
      image: String
      Link: String
    ) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($book: String!) {
    removeBook(book: $book) {
      _id
      username
      savedBooks
    }
  }
`;
