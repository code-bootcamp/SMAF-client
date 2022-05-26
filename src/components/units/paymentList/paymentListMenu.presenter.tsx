import * as S from "./paymentListMenu.styles";
import PaymentObject from "./paymentList/paymentList.container";
import { v4 as uuidv4 } from "uuid";
// import UserInfoCard01 from "../../commons/userInfoCard/01/userInfoCard01.container";
import Pagination from "../../commons/paginations/01/Pagination";

export default function PaymentListUI(props: any) {
  return (
    <S.Wrapper>
      {/* <UserInfoCard01
        onClickMoveToPaymentList={props.onClickMoveToPaymentList}
      /> */}
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
        <S.Page>
          <Pagination
            data={props.data}
            refetch={props.refetch}
            lastPage={props.lastPage}
          />
        </S.Page>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
