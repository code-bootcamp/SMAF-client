import PaymentListUI from "./paymentListMenu.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_PAYMENTS, FETCH_PAYMENTS_COUNT } from "./paymentListMenu.queris";

// 프로젝트 이동

export default function PaymentList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_PAYMENTS,{
    variables: { page: 1 }
  });
  const { data: dataPaymentsCount, refetch: refetchPaymentsCount } = useQuery(FETCH_PAYMENTS_COUNT);

  // 페이지네이션 라스트페이지
  const lastPage = Math.ceil(dataPaymentsCount?.fetchPaymentsCount / 5)

  const onClickMoveToMyPage = () => {
    router.push("/mypage");
  };

  return (
    <PaymentListUI
      onClickMoveToMyPage={onClickMoveToMyPage}
      data={data}
      refetch={refetch}
      dataPaymentsCount={dataPaymentsCount}
      refetchPaymentsCount={refetchPaymentsCount}
      lastPage={lastPage}
    />
  );
}
