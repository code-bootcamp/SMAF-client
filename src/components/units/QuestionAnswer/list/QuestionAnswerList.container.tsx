import { useQuery } from "@apollo/client";
import QuestionAnswerListUI from "./QuestionAnswerList.presenter";
import {
  Query,
  QueryFetchQuestionBoardsArgs,
  User,
} from "../../../../commons/types/generated/types";
import {
  FETCH_QUESTION_BOARDS,
  FETCH_QUESTION_BOARDS_COUNT,
  FETCH_LOGIN_USER,
} from "./QuestionAnswerList.querys";

export default function QuestionAnswerList() {
  const { data, refetch } = useQuery<
    Pick<Query, "fetchQuestionBoards">,
    QueryFetchQuestionBoardsArgs
  >(FETCH_QUESTION_BOARDS, {
    variables: { page: 1 },
  });
  const { data: dataQuestionBoardsCount, refetch: refetchQuestionBoardsCount } =
    useQuery(FETCH_QUESTION_BOARDS_COUNT);
  const { data: myData } = useQuery<{ fetchLoginUser: User }>(FETCH_LOGIN_USER);
  const lastPage = Math.ceil(
    dataQuestionBoardsCount?.fetchQuestionBoardsCount / 5
  );

  return (
    <QuestionAnswerListUI
      data={data}
      refetch={refetch}
      lastPage={lastPage}
      myData={myData}
      dataQuestionBoardsCount={dataQuestionBoardsCount}
      refetchQuestionBoardsCount={refetchQuestionBoardsCount}
    />
  );
}
