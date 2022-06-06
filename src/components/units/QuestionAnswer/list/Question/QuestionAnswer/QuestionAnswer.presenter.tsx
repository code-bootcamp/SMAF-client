import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import * as S from "./QuestionAnswer.styles";
import DOMPurify from "dompurify";
import { QuestionAnswerObjectHTMLProps } from "./QuestionAnswer.types";
export default function QuestionAnswerObjectHTML(props: QuestionAnswerObjectHTMLProps) {

  return (
    <S.Wrapper>
      <S.AnswerIcon>
        <FontAwesomeIcon
          size="1x"
          icon={faReply}
          color="#111111"
          style={{ transform: "rotate(180deg)", marginRight: "8px" }}
        />
      </S.AnswerIcon>
      <S.QuestionComment
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(`${props.el.contents}`),
        }}
      ></S.QuestionComment>
      <S.Admin>관리자</S.Admin>
      <S.CreateAt>{props.el.createAt.slice(0,10)}</S.CreateAt>
    </S.Wrapper>
  );
}
