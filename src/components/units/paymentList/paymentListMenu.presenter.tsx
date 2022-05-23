import * as S from "./paymentListMenu.styles";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";
import PaymentObject from "./paymentList/paymentList.container";
import { v4 as uuidv4 } from "uuid";

export default function PaymentListUI(props: any) {
  return (
    <S.Wrapper>
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

      <S.RightWrapper>
        <S.Title>결제내역</S.Title>
        <S.Table>
          <S.PaymentMenuList>
            <S.TableMenuNo>번호</S.TableMenuNo>
            <S.TableMenuPaymentDate>결제일</S.TableMenuPaymentDate>
            <S.TableMenuProduct>결제상품</S.TableMenuProduct>
            <S.TableMenuMoney>결제금액</S.TableMenuMoney>
            <S.TableMenuDate>작성일</S.TableMenuDate>
            {/* <S.QusStionAnswerBtn>문의하기</S.QusStionAnswerBtn> */}
          </S.PaymentMenuList>

          <S.PaymentObjectList>
            {/* 📌 map 돌리는 곳 */}
            <PaymentObject />
            <PaymentObject />
          </S.PaymentObjectList>
        </S.Table>
        <S.Pagination>페이지네이션</S.Pagination>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
