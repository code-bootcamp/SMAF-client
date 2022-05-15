import * as S from "./QuestionAnswerList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IQuestionAnswerListProps } from "./QuestionAnswerList.types";

export default function QuestionAnswerListUI(props: IQuestionAnswerListProps) {
  const { MoveToPage } = useMoveToPage();
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.Title>QnA</S.Title>
      <S.Container>
        <S.TableHeader>
          <S.TdNum>번호</S.TdNum>
          <S.TdType>문의유형</S.TdType>
          <S.TdTitle>제목</S.TdTitle>
          <S.TdWriter>작성자</S.TdWriter>
          <S.TdDate>작성일</S.TdDate>
          <S.QuestionBtn onClick={MoveToPage("/QuestionAnswer/new")}>
            문의하기
          </S.QuestionBtn>
        </S.TableHeader>
        {props.data?.map((el: any) => (
          <>
            <S.Table key={el.questionBoardId}>
              <S.TdNum>1</S.TdNum>
              <S.TdType>환불문의</S.TdType>
              <S.TdTitle>{el.contents}</S.TdTitle>
              <S.TdWriter>김철수</S.TdWriter>
              <S.TdDate>2022-05-22</S.TdDate>
              <S.AnswerBtn>답변하기</S.AnswerBtn>
            </S.Table>
          </>
        ))}
        <S.Table>
          <S.TdNum>1</S.TdNum>
          <S.TdType>환불문의</S.TdType>
          <S.TdTitle>서비스 문의 드립니다.</S.TdTitle>
          <S.TdWriter>김철수</S.TdWriter>
          <S.TdDate>2022-05-22</S.TdDate>
          <S.AnswerBtn>답변하기</S.AnswerBtn>
        </S.Table>
        <S.Table>
          <S.TdNum></S.TdNum>
          <S.TdType></S.TdType>
          <S.TdTitle>문의내용들어갈곳입니다.</S.TdTitle>
          <S.TdWriter>관리자</S.TdWriter>
          <S.TdDate>2022-05-22</S.TdDate>
        </S.Table>
        <S.Table>
          <S.TdNum>2</S.TdNum>
          <S.TdType>서비스문의</S.TdType>
          <S.TdTitle>서비스 문의 드립니다.</S.TdTitle>
          <S.TdWriter>김철수</S.TdWriter>
          <S.TdDate>2022-05-22</S.TdDate>
          <S.AnswerCompleteBtn>답변완료</S.AnswerCompleteBtn>
        </S.Table>
        <S.Table>
          <S.TdNum></S.TdNum>
          <S.TdType></S.TdType>
          <S.TdTitle>
            <FontAwesomeIcon
              size="x"
              icon={faReply}
              color="#111111"
              style={{ transform: "rotate(180deg)", marginRight: "8px" }}
            />
            24시간 이내로 처리해드리겠습니다.
          </S.TdTitle>
          <S.TdWriter>관리자</S.TdWriter>
          <S.TdDate>2022-05-22</S.TdDate>
        </S.Table>
      </S.Container>
    </S.Wrapper>
  );
}
