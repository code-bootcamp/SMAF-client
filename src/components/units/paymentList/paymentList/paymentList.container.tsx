// 임시 주석처리
// import * as S from "./paymentList.styles";

// interface IPaymentProps {
//   el: any;
//   no: number;
// }

import { getDate } from "../../../../commons/utils";
import * as S from "./paymentList.styles";

export default function PaymentObject(props) {
  console.log(props.index);
  return (
    <>
      <S.Table>
        <S.BasicRow>
          <S.TableMenuNo>{props.index + 1}</S.TableMenuNo>
          <S.TableMenuPaymentDate>
            {getDate(props.el?.createAt)}
          </S.TableMenuPaymentDate>
          <S.TableMenuProduct>{props.el?.product_name}</S.TableMenuProduct>
          <S.TableMenuMoney>{props.el?.amount}</S.TableMenuMoney>
          {/* <S.TableMenuDate>여긴 뺄거야</S.TableMenuDate> */}
          <S.Button>구매완료</S.Button>
        </S.BasicRow>
      </S.Table>
    </>
  );
}
