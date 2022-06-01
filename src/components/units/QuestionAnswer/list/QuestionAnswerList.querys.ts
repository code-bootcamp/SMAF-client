import { gql } from "@apollo/client";

export const FETCH_QUESTION_BOARDS = gql`
  query fetchQuestionBoards($page: Int) {
    fetchQuestionBoards(page: $page) {
      questionBoardId
      questionCategory
      title
      contents
      createAt
      user{
        userName
      }
    }
  }
`;

export const FETCH_QUESTION_BOARDS_COUNT = gql`
  query fetchQuestionBoardsCount {
    fetchQuestionBoardsCount
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      userId
      userName
      email
      phone
      projectTicket
      admin
      userImageURL
    }
  }
`;
