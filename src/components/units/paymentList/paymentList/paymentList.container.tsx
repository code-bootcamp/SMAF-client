// 임시 주석처리
// import * as S from "./paymentList.styles";

// interface IPaymentProps {
//   el: any;
//   no: number;
// }

// export default function PaymentObject(props: IPaymentProps) {
//   return (
//     <>
//       <S.Table>
//         <S.BasicRow>
//           <S.TableMenuNo>{props.no}</S.TableMenuNo>
//           <S.TableMenuPaymentDate>
//             {props.el.questionCategory}
//           </S.TableMenuPaymentDate>
//           <S.TableMenuProduct>{props.el.product}</S.TableMenuProduct>
//           <S.TableMenuMoney>결제금액</S.TableMenuMoney>
//           <S.TableMenuDate>작성일</S.TableMenuDate>
//           <S.Button>작성일</S.Button>
//         </S.BasicRow>
//       </S.Table>
//     </>
//   );
// }

import * as S from "./paymentList.styles";

export default function PaymentObject() {
  return (
    <>
      <S.Table>
        <S.BasicRow>
          <S.TableMenuNo>1</S.TableMenuNo>
          <S.TableMenuPaymentDate>2022-05-20</S.TableMenuPaymentDate>
          <S.TableMenuProduct>1회권</S.TableMenuProduct>
          <S.TableMenuMoney>2000</S.TableMenuMoney>
          <S.TableMenuDate>2022-05-20</S.TableMenuDate>
          <S.Button>구매완료</S.Button>
        </S.BasicRow>
      </S.Table>
    </>
  );
}
