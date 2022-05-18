// 모달을 만들어보자
import { useState } from "react";
import { Modal, Button } from "antd";
import * as S from "./paymentModal.styles";

const PaymentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 결제하기 함수 들어가는 곳

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
