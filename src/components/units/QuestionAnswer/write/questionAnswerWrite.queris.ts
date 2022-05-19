import { gql } from "@apollo/client";

export const CREATE_QUESTION_BOARD = gql`
  mutation createBoard($questionBoardInput: QuestionBoardInput!) {
    createBoard(questionBoardInput: $questionBoardInput) {
      questionBoardId
    }
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
    }
  }
`;
