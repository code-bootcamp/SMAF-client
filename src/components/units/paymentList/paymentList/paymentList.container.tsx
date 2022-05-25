import { useRecoilState } from "recoil";
import { indexNum } from "../../../../commons/store";
import { getDate } from "../../../../commons/utils";
import * as S from "./paymentList.styles";

export default function PaymentObject(props) {

  const [index, setIndex]= useRecoilState(indexNum)

  return (
    <>
      <S.Table key={props.el.payment}>
        <S.BasicRow>
          <S.TableMenuNo>{props.index + index + 1}</S.TableMenuNo>
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
