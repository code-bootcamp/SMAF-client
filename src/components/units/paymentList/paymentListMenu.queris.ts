import { gql } from "@apollo/client";

// 모든 결제 내역 불러오기
export const FETCH_PAYMENTS = gql`
  query fetchPayments {
    fetchPayments {
      paymentId
      product_name
      impUid
      amount
      createAt
      user {
        userId
        userName
      }
    }
  }
`;

// 페이지네이션
// export const FETCH_PAYMENTS_COUNT = gql`
//   query fetchPaymentsCount{
//   }
// `;
