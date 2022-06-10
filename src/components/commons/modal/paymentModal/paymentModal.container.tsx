import * as S from "./paymentModal.styles";
import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";
import { LegacyRef, useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/alert";
import { User } from "../../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IPayment {
  alertModal: boolean;
  errorAlertModal: boolean;
  modalContents: string | undefined;
  fileRef: LegacyRef<HTMLButtonElement> | undefined;
}

const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Float!) {
    createPayment(impUid: $impUid, amount: $amount) {
      paymentId
    }
  }
`;

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      userId
      userName
      email
      phone
      admin
      userImageURL
      projectTicket
    }
  }
`;

export default function PaymentModal(props: IPayment) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const [, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [, setErrorAlertModal] = useState(false);

  const [createPayment] = useMutation(CREATE_PAYMENT);
  const { data } = useQuery<{ fetchLoginUser: User }>(FETCH_LOGIN_USER);

  const onClickExitSubmitModal = () => {
    setAlertModal(false);
    setIsOpen(false);
  };

  const onClickExitErrorModal = () => {
    setErrorAlertModal(false);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp35583537");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "이용권 구매하기",
        amount: "200",
        buyer_email: data?.fetchLoginUser.email,
        buyer_name: data?.fetchLoginUser.userName,
        buyer_tel: "",
        buyer_addr: "",
      },
      (rsp: any) => {
        if (rsp.success) {
          createPayment({
            variables: { impUid: rsp.imp_uid, amount: 200 },
          });
          setModalContents("결제에 성공했습니다.");
          setAlertModal(true);
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
        결제하기
      </button>
      {props.alertModal && (
        <Alert
          onClickExit={onClickExitSubmitModal}
          contents={props.modalContents}
        />
      )}
      {props.errorAlertModal && (
        <ErrorAlert
          onClickExit={onClickExitErrorModal}
          contents={modalContents}
        />
      )}

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
          <S.Title>이용권을 모두 소진하셨습니다.</S.Title>
          <S.Title>결제하시겠습니까?</S.Title>
          <Head>
            <script
              type="text/javascript"
              src="https://code.jquery.com/jquery-1.12.4.min.js"
            ></script>
            <script
              type="text/javascript"
              src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
            ></script>
          </Head>
          <S.CouponWrapper>
            <div>
              <img src="./images/coupon.png"></img>
              <span>프로젝트 1개(200원)</span>
            </div>
          </S.CouponWrapper>
          <S.SubTitle>하나의 프로젝트를</S.SubTitle>
          <S.SubTitle>생성할 수 있습니다.</S.SubTitle>
          <S.ButtonWrapper>
            <button onClick={onToggleModal}>취소</button>
            <button onClick={requestPay}>결제하기</button>
          </S.ButtonWrapper>
        </Modal>
      )}
    </>
  );
}
