import * as S from "./paymentListMenu.styles";
import PaymentObject from "./paymentList/paymentList.container";
import { v4 as uuidv4 } from "uuid";
import UserInfoCard02 from "../../commons/userInfoCard/02/userInfoCard02.container";
import Paginations01 from "../../commons/paginations/01/Paginations01.container";

export default function PaymentListUI(props: any) {
  return (
    <S.Wrapper>
      <UserInfoCard02 onClickMoveToMyPage={props.onClickMoveToMyPage} />

      <S.RightWrapper>
        <S.Title>결제내역</S.Title>
        <S.Table>
          <S.PaymentMenuList>
            <S.TableMenuNo>번호</S.TableMenuNo>
            <S.TableMenuPaymentDate>결제일</S.TableMenuPaymentDate>
            <S.TableMenuProduct>결제상품</S.TableMenuProduct>
            <S.TableMenuMoney>결제금액</S.TableMenuMoney>
            {/* <S.TableMenuDate>작성일</S.TableMenuDate> */}
          </S.PaymentMenuList>
          {props.data?.fetchPayments ? (
            <S.PaymentObjectList>
              {props.data?.fetchPayments.map((el: any, index: number) => (
                <PaymentObject key={el.paymentId} el={el} index={index} />
              ))}
            </S.PaymentObjectList>
          ) : (
            <S.PaymentObjectList>
              <span>구매내역이 없습니다.</span>
            </S.PaymentObjectList>
          )}
        </S.Table>
        <S.Pagination>1/2/3/4/5</S.Pagination>
        {/* <S.Pagination refetch={props.refetch} count={props.count} /> */}
      </S.RightWrapper>
    </S.Wrapper>
  );
}
