import { gql } from "@apollo/client";

export const FETCH_QUESTION_BOARDS = gql`
  query fetchBoards {
    questionBoardId
    questionCategory
    title
    contents
  }
`;
