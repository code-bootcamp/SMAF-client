import PaymentListUI from "./paymentListMenu.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_PAYMENTS, FETCH_PAYMENTS_COUNT } from "./paymentListMenu.queris";
import {
  Query,
  QueryFetchPaymentsArgs,
} from "../../../commons/types/generated/types";

interface IPropsIsOpen {
  isOpen: boolean;
}

export default function PaymentList(props: IPropsIsOpen) {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<Query, "fetchPayments">,
    QueryFetchPaymentsArgs
  >(FETCH_PAYMENTS, {
    variables: { page: 1 },
  });
  const { data: dataPaymentsCount, refetch: refetchPaymentsCount } =
    useQuery(FETCH_PAYMENTS_COUNT);

  // 페이지네이션 라스트페이지
  const lastPage = Math.ceil(dataPaymentsCount?.fetchPaymentsCount / 5);

  const onClickMoveToMyPage = () => {
    router.push("/mypage");
  };

  return (
    <PaymentListUI
      data={data}
      refetch={refetch}
      dataPaymentsCount={dataPaymentsCount}
      refetchPaymentsCount={refetchPaymentsCount}
      lastPage={lastPage}
      isOpen={props.isOpen}
      onClickMoveToMyPage={onClickMoveToMyPage}
    />
  );
}
