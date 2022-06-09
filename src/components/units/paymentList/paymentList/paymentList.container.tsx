import { useRecoilState } from "recoil";
import { indexNum } from "../../../../commons/store";
import { Payment } from "../../../../commons/types/generated/types";
import { getDate } from "../../../../commons/utils";
import * as S from "./paymentList.styles";
import { v4 as uuidv4 } from "uuid";

interface IPaymentObjectProps {
  el: Payment;
  index: number;
}
export default function PaymentObject(props: IPaymentObjectProps) {
  const [index] = useRecoilState(indexNum);

  return (
    <>
      <S.Table key={uuidv4()}>
        <S.BasicRow>
          <S.TableMenuNo>{props.index + index + 1}</S.TableMenuNo>
          <S.TableMenuPaymentDate>
            {getDate(props.el?.createAt)}
          </S.TableMenuPaymentDate>
          <S.TableMenuProduct>{props.el?.product_name}</S.TableMenuProduct>
          <S.TableMenuMoney>{props.el?.amount}</S.TableMenuMoney>
          <S.Button>구매완료</S.Button>
        </S.BasicRow>
      </S.Table>
    </>
  );
}
