import { gql } from "@apollo/client";

export const FETCH_QUESTION_BOARDS = gql`
  query fetchQuestionBoards($page:Int) {
    fetchQuestionBoards(page:$page) {
      questionBoardId
      questionCategory
      title
      contents
    }
  }
`;

export const FETCH_QUESTION_BOARDS_COUNT = gql`
  query fetchQuestionBoardsCount {
    fetchQuestionBoardsCount
  }
`;