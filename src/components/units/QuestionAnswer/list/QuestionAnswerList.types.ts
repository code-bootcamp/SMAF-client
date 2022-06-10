import {
  ApolloQueryResult,
  OperationVariables,
} from "@apollo/client/core/types";
import {
  Query,
  QuestionBoard,
  User,
} from "../../../../commons/types/generated/types";

export interface IQuestionAnswerListProps {
  dataQuestionBoardsCount: { fetchQuestionBoardsCount: number };
  data?: { fetchQuestionBoards: Array<QuestionBoard> };
  myData: { fetchLoginUser: User } | undefined;
  refetchQuestionBoardsCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Number>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<Query, "fetchQuestionBoards">>>;
  lastPage: number;
}
