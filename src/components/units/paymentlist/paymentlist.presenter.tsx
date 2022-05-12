import * as S from "./paymentlist.styles";

export default function PaymentListUI() {
    return(
        <S.Wrapper>
            <S.PaymentTitle>결제내역</S.PaymentTitle>
            <S.PaymentWrapper>
                <S.Row>
                    <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
                    <S.ColumnHeaderBasic>결제일</S.ColumnHeaderBasic>
                    <S.ColumnHeaderBasic>결제상품</S.ColumnHeaderBasic>
                    <S.ColumnHeaderBasic>결제금액</S.ColumnHeaderBasic>
                    <S.ColumnHeaderCreatedAt>작성일</S.ColumnHeaderCreatedAt>
                    <S.ColumnHeaderBasic>결제금액</S.ColumnHeaderBasic>
                </S.Row>
                {/* map 적용하기 */}
                <S.Row2>
                    <S.ColumnNumber>1</S.ColumnNumber>
                    <S.ColumnBasic>2022/05/20</S.ColumnBasic>
                    <S.ColumnBasic>1회권</S.ColumnBasic>
                    <S.ColumnBasic>2,000원</S.ColumnBasic>
                    <S.ColumnCreatedAt>2022/05/22</S.ColumnCreatedAt>
                    <S.ColumnBasic>
                    <S.Button>환불하기</S.Button>
                    </S.ColumnBasic>
                </S.Row2>
                <S.Line></S.Line>  
            </S.PaymentWrapper> 
        </S.Wrapper> 
    )
} 