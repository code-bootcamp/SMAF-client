import * as S from './QuestionAnswerList.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";


export default function QuestionAnswerUI(){

    return(
        <S.Wrapper>
            <S.Title>QnA</S.Title>
            <S.Container>
                <S.TableHeader>
                    <S.TdNum>번호</S.TdNum>
                    <S.TdType>문의유형</S.TdType>
                    <S.TdTitle>제목</S.TdTitle>
                    <S.TdWriter>작성자</S.TdWriter>
                    <S.TdDate>작성일</S.TdDate>
                    <S.AnswerBtn style={{opacity:"0"}}>답변하기</S.AnswerBtn>
                </S.TableHeader>
                <S.Table>
                    <S.TdNum>1</S.TdNum>
                    <S.TdType>서비스문의</S.TdType>
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
                        <FontAwesomeIcon size='x' icon={faReply} color="#111111" style={{transform:"rotate(180deg)", marginRight:"8px"}}/>
                        24시간 이내로 처리해드리겠습니다.
                    </S.TdTitle>
                    <S.TdWriter>관리자</S.TdWriter>
                    <S.TdDate>2022-05-22</S.TdDate>
                </S.Table>
            </S.Container>
        </S.Wrapper>
    )
}