import { gql } from "@apollo/client";
export const FETCH_QUESTION_COMMENTS = gql`
  query fetchQuestionComments($questionBoardId: String!) {
    fetchQuestionComments(questionBoardId: $questionBoardId) {
      questionCommentId
      contents
      createAt
    }
  }
`;

export const CREATE_QUESTION_BOARD_COMMENT = gql`
  mutation createQuestionComment(
    $contents: String!
    $questionboardId: String!
  ) {
    createQuestionComment(
      contents: $contents
      questionboardId: $questionboardId
    ) {
      questionCommentId
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
      userImageURL
    }
  }
`;
