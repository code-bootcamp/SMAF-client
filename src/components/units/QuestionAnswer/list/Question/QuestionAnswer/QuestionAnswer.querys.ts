import { gql } from "@apollo/client";
export const FETCH_QUESTION_COMMENTS = gql`
  query fetchQuestionComments($questionBoardId: String!) {
    fetchQuestionComments(questionBoardId: $questionBoardId) {
      questionCommentId
      contents
      createAt
    }
      user {
        userId
      }
  }
`;
