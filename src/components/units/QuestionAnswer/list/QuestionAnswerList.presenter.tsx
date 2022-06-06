import * as S from "./QuestionAnswerList.styles";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IQuestionAnswerListProps } from "./QuestionAnswerList.types";
import QuestionObject from "./Question/Question.container";

import Pagination from "../../../commons/paginations/01/Pagination";
import { QuestionBoard } from "../../../../commons/types/generated/types";

export default function QuestionAnswerListUI(props: IQuestionAnswerListProps) {
  const { MoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.Title>QnA</S.Title>
      <S.QuestionMenuList>
        <S.TableMenuNo>번호</S.TableMenuNo>
        <S.TableMenuTypes>문의유형</S.TableMenuTypes>
        <S.TableMenuTitles>제목</S.TableMenuTitles>
        <S.TableMenuWriter>작성자</S.TableMenuWriter>

        <S.TableMenuDate>작성일</S.TableMenuDate>
        {!props.myData?.fetchLoginUser.admin ? (
          <S.QusStionAnswerBtn onClick={MoveToPage("/QuestionAnswer/new")}>
            문의하기
          </S.QusStionAnswerBtn>
        ) : (
          <div></div>
        )}
      </S.QuestionMenuList>
      <S.QuestionList>
        {props.data &&
          props.data?.fetchQuestionBoards.map(
            (el: QuestionBoard, index: number) => (
              <QuestionObject
                key={el.questionBoardId}
                el={el}
                index={index}
                dataQuestionBoardsCount={props.dataQuestionBoardsCount}
              />
            )
          )}
      </S.QuestionList>
      <S.Page>
        <Pagination
          data={props.data}
          refetch={props.refetch}
          lastPage={props.lastPage}
        />
      </S.Page>
    </S.Wrapper>
  );
}
