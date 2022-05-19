import * as S from "./paymentlist.styles";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";

export default function PaymentListUI(props: any) {
  return (
    <S.Wrapper>
      <S.Container>
        <UserInfoCard
          userEmail={undefined}
          userName={undefined}
          userImageSrc={undefined}
          src1={undefined}
          src2={undefined}
          src3={undefined}
          title1={undefined}
          title2={undefined}
          title3={undefined}
        />
        <S.listWrapper>
          <S.Title>결제내역</S.Title>
          <S.PaymentWrapper>
            <S.Row>
              <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
              <S.ColumnHeaderPaymentDate>결제일</S.ColumnHeaderPaymentDate>
              <S.ColumnHeaderProduct>결제상품</S.ColumnHeaderProduct>
              <S.ColumnHeaderPaymentMoney>결제금액</S.ColumnHeaderPaymentMoney>
              <S.ColumnHeaderCreatedAt>작성일</S.ColumnHeaderCreatedAt>
              <S.ColumnHeaderBasic></S.ColumnHeaderBasic>
            </S.Row>
            {/* map 적용하기 */}

            <S.Row2>
              <S.ColumnNumber>1</S.ColumnNumber>
              <S.ColumnPaymentDate>2022/05/20</S.ColumnPaymentDate>
              <S.ColumnProduct>1회권</S.ColumnProduct>
              <S.ColumnPaymentMoney>2,000원</S.ColumnPaymentMoney>
              <S.ColumnCreatedAt>2022/05/22</S.ColumnCreatedAt>
              <S.ColumnButton>
                <S.Button>구매완료</S.Button>
              </S.ColumnButton>
            </S.Row2>
            <S.Line></S.Line>
          </S.PaymentWrapper>
          {/* 페이지네이션 */}
          <div></div>
        </S.listWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
