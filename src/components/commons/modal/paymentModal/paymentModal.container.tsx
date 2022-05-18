// 모달을 만들어보자
import { useState } from "react";
import { Modal, Button } from "antd";
import * as S from "./paymentModal.styles";

// 결제하기 mutation
// const [createPointTransactionOfLoading] = useMutation(
//   CREATE_POINT_TRANSACTION_OF_LOADING
// );

const PaymentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 결제하기 함수 (임시)
  // const requestPay = () => {
  //   const IMP = window.IMP; // 생략 가능
  //   IMP.init("imp35583537"); // Example: imp00000000
  //   // IMP.request_pay(param, callback) 결제창 호출
  //   IMP.request_pay(
  //     {
  //       // param
  //       pg: "html5_inicis",
  //       pay_method: "card",
  //       // merchant_uid: "ORD20180131-0000011", // 주석하면 랜덤으로 생성됨 상품아이디 (중복되지 않게!)
  //       name: "포인트 충전하기",
  //       amount: "2000",
  //       buyer_email: "gildong@gmail.com",
  //       buyer_name: "홍길동",
  //       buyer_tel: "010-4242-4242",
  //       buyer_addr: "서울특별시 강남구 신사동",
  //       buyer_postcode: "01181",
  //       // m_redirect_url: "http://localhost:3000/",
  //     },
  //     (rsp: any) => {
  //       // callback
  //       if (rsp.success) {
  //         // 결제 성공 시 로직,
  //         // rsp 에 뭐가 들어오는지 확인
  //         console.log(rsp);
  //         // 📌 백엔드에 결제 관련 데이터 넘겨주기(즉, mutation 실행하기)
  //         // ex. createPointTransactionOfLoading
  //         const result = createPointTransactionOfLoading({
  //           variables: { impUid: rsp.imp_uid },
  //         });
  //         console.log("결제", result);
  //         alert("결제에 성공했습니다.");
  //       } else {
  //         // 결제 실패 시 로직,
  //         alert("결제에 실패했습니다! 다시 시도해 주세요.");
  //       }
  //     }
  //   );
  // };

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
          <S.CouponWrapper>
            <div>
              <img src="./image/coupon.png"></img>
              <span>프로젝트 1개(100원)</span>
            </div>
          </S.CouponWrapper>
          <S.SubTitle>하나의 프로젝트를 생성할 수 있습니다.</S.SubTitle>
          <S.ButtonWrapper>
            <button onClick={onToggleModal}>취소</button>
            {/* onClick={결제하기 함수 바인딩 해주기!!! } */}
            <button>결제하기</button>
          </S.ButtonWrapper>
        </Modal>
      )}
    </>
  );
};

export default PaymentModal;
