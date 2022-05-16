import Dropdown02 from "../../../commons/dropdown/02/dropdown02";
import * as S from "./questionAnswerWrite.styles";
import { IQuestionProps } from "./questionAnswerWrite.types";

export default function QuestionAnswerWriteUI(props: IQuestionProps) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.createQusetionBoard)}>
        <S.Container>
          <S.Title>문의 글 등록하기</S.Title>
          <S.InputWrapper>
            <Dropdown02 />
            {/* <QuestionAnswerSelect/> */}
            <S.Question
              {...props.register("title")}
              type="text"
              placeholder="제목을 입력해 주세요."
            ></S.Question>
          </S.InputWrapper>
          <S.Content
            placeholder="문의 내용을 입력해 주세요."
            {...props.register("contents")}
          ></S.Content>
          <S.Button>등록 하기</S.Button>
        </S.Container>
      </form>
    </S.Wrapper>
  );
}
