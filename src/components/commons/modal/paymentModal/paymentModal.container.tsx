import * as S from "./paymentModal.styles";
import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Modal, Button } from "antd";
import { FETCH_LOGIN_USER } from "../../../units/questionAnswer/write/questionAnswerWrite.queris";
import { useRouter } from "next/router";

const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Float!) {
    createPayment(impUid: $impUid, amount: $amount) {
      paymentId
    }
  }
`;

export default function PaymentModal(props) {
  const router = useRouter();
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
        amount: "100",
        buyer_email: data?.fetchLoginUser.email,
        buyer_name: data?.fetchLoginUser.userName,
        buyer_tel: "",
        buyer_addr: "",
        buyer_postcode: "",
        // m_redirect_url: "http://localhost:3000/",
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          const result = createPayment({
            variables: { impUid: rsp.imp_uid, amount: 100 },
          });

          console.log("결제", result);
          alert("결제에 성공했습니다.");
          router.push("/project/new");
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요.");
        }
      }
    );
  };

  return (
    <>
      <button
        onClick={onToggleModal}
        ref={props.fileRef}
        style={{ display: "none" }}
      >
        결제하기!!!
      </button>
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
