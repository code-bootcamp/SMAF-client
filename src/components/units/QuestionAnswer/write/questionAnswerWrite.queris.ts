import { gql } from "@apollo/client";

export const CREATE_QUESTION_BOARD = gql`
  mutation createBoard($questionBoardInput: QuestionBoardInput!) {
    createBoard(questionBoardInput: $questionBoardInput) {
      questionBoardId
    }
  }
`;
