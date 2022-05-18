import { gql } from "@apollo/client";

export const FETCH_QUESTION_BOARDS = gql`
  query fetchQuestionBoards {
    fetchQuestionBoards {
      questionBoardId
      questionCategory
      title
      contents
    }
  }
`;
