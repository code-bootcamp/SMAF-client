import PaymentListUI from "./paymentListMenu.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_PAYMENTS, FETCH_PAYMENTS_COUNT } from "./paymentListMenu.queris";

// 프로젝트 이동

export default function PaymentList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_PAYMENTS);
  const { data: dataPaymentsCount } = useQuery(FETCH_PAYMENTS_COUNT);

  const onClickMoveToMyPage = () => {
    router.push("/mypage");
  };

  console.log("결제내역데이터나와라", data);

  return (
    <PaymentListUI
      onClickMoveToMyPage={onClickMoveToMyPage}
      data={data}
      refetch={refetch}
      count={dataPaymentsCount?.fetchPaymentsCount}
    />
  );
}
