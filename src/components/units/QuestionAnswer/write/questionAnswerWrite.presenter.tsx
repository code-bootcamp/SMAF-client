import Dropdown02 from "../../../commons/dropdown/02/dropdown02";
import * as S from "./questionAnswerWrite.styles";

export default function QuestionAnswerWriteUI() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>문의 글 등록하기</S.Title>
        <S.InputWrapper>
          <Dropdown02 />
          <S.Question
            type="text"
            placeholder="제목을 입력해 주세요."
          ></S.Question>
        </S.InputWrapper>
        <S.Content placeholder="문의 내용을 입력해 주세요."></S.Content>
        <S.Button>문의 하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
}
