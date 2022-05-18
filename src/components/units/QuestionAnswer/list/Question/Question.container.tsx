import * as S from "./Question.styles";
import { useState } from "react";

interface IQuestionProps {
  el: any;
  no: number;
}

export default function QuestionObject(props: IQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onAnswer = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      <S.Table>
        <S.BasicRow>
          <S.TableMenuNo>{props.no}</S.TableMenuNo>
          <S.TableMenuTypes>{props.el.questionCategory}</S.TableMenuTypes>
          <S.TableMenuTitles onClick={onAnswer}>
            {props.el.title}
          </S.TableMenuTitles>
          <S.TableMenuWriter>작성자</S.TableMenuWriter>
          <S.TableMenuDate>작성일</S.TableMenuDate>
          <S.QusStionAnswerBtn>답글달기</S.QusStionAnswerBtn>
        </S.BasicRow>
        {isOpen ? <S.Question>{props.el.contents}</S.Question> : <div></div>}
      </S.Table>
    </>
  );
}
