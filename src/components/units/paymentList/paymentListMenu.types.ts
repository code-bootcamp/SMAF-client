import { Payment, Query } from "../../../commons/types/generated/types";
import {
  OperationVariables,
  ApolloQueryResult,
} from "@apollo/client/core/types";

export interface IPaymentList {
  data?: { fetchPayments: Array<Payment> };
  dataPaymentsCount: Pick<Query, "fetchPaymentsCount"> | undefined;
  onClickMoveToMyPage: () => void;
  lastPage: number;
  isOpen: boolean;
  refetch: (
    variables?:
      | Partial<{
          page: number;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
  refetchPaymentsCount: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Number>>;
}
