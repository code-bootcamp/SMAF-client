import * as S from "./paymentListMenu.styles";
import PaymentObject from "./paymentList/paymentList.container";
import Pagination from "../../commons/paginations/01/Pagination";
import { Payment } from "../../../commons/types/generated/types";
import { IPaymentList } from "./paymentListMenu.types";

export default function PaymentListUI(props: IPaymentList) {
  return (
    <S.Wrapper>
      <S.RightWrapper>
        <S.Title>결제내역</S.Title>
        <S.Table>
          <S.PaymentMenuList>
            <S.TableMenuNo>번호</S.TableMenuNo>
            <S.TableMenuPaymentDate>결제일</S.TableMenuPaymentDate>
            <S.TableMenuProduct>결제상품</S.TableMenuProduct>
            <S.TableMenuMoney>결제금액</S.TableMenuMoney>
          </S.PaymentMenuList>
          {props.data?.fetchPayments.length ? (
            <S.PaymentObjectList>
              {props.data?.fetchPayments.map((el: Payment, index: number) => (
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
