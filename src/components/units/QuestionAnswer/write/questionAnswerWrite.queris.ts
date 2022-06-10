import { gql } from "@apollo/client";

export const CREATE_QUESTION_BOARD = gql`
  mutation createQuestionBoard(
    $createquestionBoardInput: CreateQuestionBoardInput!
  ) {
    createQuestionBoard(createquestionBoardInput: $createquestionBoardInput) {
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
      admin
      userImageURL
      projectTicket
    }
  }
`;
