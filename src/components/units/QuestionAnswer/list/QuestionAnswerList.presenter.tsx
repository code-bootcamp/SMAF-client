import * as S from "./QuestionAnswerList.styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IQuestionAnswerListProps } from "./QuestionAnswerList.types";
// import { useState } from "react";
import QuestionObject from "./Question/Question.container";
import { v4 as uuidv4 } from "uuid";

export default function QuestionAnswerListUI(props: IQuestionAnswerListProps) {
  const { MoveToPage } = useMoveToPage();
  // const [isOpen, setIsOpen] = useState(false);
  console.log(props.data, "데이터");
  return (
    <S.Wrapper>
      <S.Title>QnA</S.Title>
      <S.QuestionMenuList>
        <S.TableMenuNo>번호</S.TableMenuNo>
        <S.TableMenuTypes>문의유형</S.TableMenuTypes>
        <S.TableMenuTitles>제목</S.TableMenuTitles>
        <S.TableMenuWriter>작성자</S.TableMenuWriter>
        <S.TableMenuDate>작성일</S.TableMenuDate>
        <S.QusStionAnswerBtn onClick={MoveToPage("/QuestionAnswer/new")}>
          문의하기
        </S.QusStionAnswerBtn>
      </S.QuestionMenuList>
      <S.QuestionList>
        {props.data &&
          props.data?.fetchQuestionBoards.map((el: any, index: number) => (
            <QuestionObject key={uuidv4()} el={el} no={index + 1} />
          ))}
      </S.QuestionList>
    </S.Wrapper>
  );
}
