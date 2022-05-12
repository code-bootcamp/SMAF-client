// import QuestionAnswerSelect from "../../../commons/select/01/QuestionAnswerSelect";
import * as QuestionAnswer from "./QuestionAnswer.styles";

export default function QuestionAnswerUI() {
    return(
    <QuestionAnswer.Wrapper>
        <QuestionAnswer.Title>문의 글 등록하기</QuestionAnswer.Title>
        <QuestionAnswer.InputWrapper>
            {/* <div>문의 유형</div> */}
            {/* <QuestionAnswerSelect/> */}
            <QuestionAnswer.Question type="text" placeholder="제목을 입력해 주세요."></QuestionAnswer.Question>
        </QuestionAnswer.InputWrapper>
        <QuestionAnswer.Content placeholder="문의 내용을 입력해 주세요."></QuestionAnswer.Content>
        <QuestionAnswer.Button>비밀번호 변경</QuestionAnswer.Button>
    </QuestionAnswer.Wrapper>
    )
}