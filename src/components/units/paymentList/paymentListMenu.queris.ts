import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPayments($page: Int) {
    fetchPayments(page: $page) {
      paymentId
      impUid
      amount
      product_name
      status
      createAt
      user {
        userId
        userName
        email
      }
    }
  }
`;

// 페이지네이션
export const FETCH_PAYMENTS_COUNT = gql`
  query fetchPaymentsCount {
    fetchPaymentsCount
  }
`;
