import * as S from "./paymentModal.styles";
import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Modal, Button } from "antd";
import { FETCH_LOGIN_USER } from "../../userInfoCard/userInfoCard.queris";

const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Float!) {
    createPayment(impUid: $impUid, amount: $amount) {
      paymentId
    }
  }
`;

export default function PaymentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const [createPayment] = useMutation(CREATE_PAYMENT);
  const { data } = useQuery(FETCH_LOGIN_USER);

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp35583537");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 주석하면 랜덤으로 생성됨 상품아이디 (중복되지 않게!)
        name: "이용권 구매하기",
        amount: "2000",
        buyer_email: data?.fetchLoginUser.email,
        buyer_name: data?.fetchLoginUser.userName,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          const result = createPayment({
            variables: { impUid: rsp.imp_uid, amount: 2000 },
          });
          console.log("결제", result);
          alert("결제에 성공했습니다.");
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요.");
        }
      }
    );
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        결제하기!!!
      </Button>
      {isOpen && (
        <Modal
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
          maskStyle={{
            width: "100%",
            height: "100%",
          }}
          bodyStyle={{
            width: "28rem",
            height: "40rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={280}
          footer={null}
          centered={true}
        >
          <S.Title>이용권을 모두 소진하셨습니다.결제하시겠습니까?</S.Title>
          <Head>
            {/* <!-- jQuery --> */}
            <script
              type="text/javascript"
              src="https://code.jquery.com/jquery-1.12.4.min.js"
            ></script>
            {/* <!-- iamport.payment.js --> */}
            <script
              type="text/javascript"
              src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
            ></script>
          </Head>
          <S.CouponWrapper>
            <div>
              <img src="./image/coupon.png"></img>
              <span>프로젝트 1개(200원)</span>
            </div>
          </S.CouponWrapper>
          <S.SubTitle>하나의 프로젝트를 생성할 수 있습니다.</S.SubTitle>
          <S.ButtonWrapper>
            <button onClick={onToggleModal}>취소</button>
            <button onClick={requestPay}>결제하기</button>
          </S.ButtonWrapper>
        </Modal>
      )}
    </>
  );
}
