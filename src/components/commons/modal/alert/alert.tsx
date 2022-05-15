// import { useRouter } from "next/router";
import * as S from "./alert.styles";
import { Modal } from "antd";
import { useState } from "react";

export default function Alert(props: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        visible={true}
        closable={false}
        maskStyle={{
          width: "100%",
          height: "100%",
        }}
        bodyStyle={{
          width: "480px",
          height: "360px",
          backgroundColor: "#FFFFFF",
        }}
        footer={null}
        centered={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <S.PointModal>
          <S.Close>X</S.Close>
          <S.Logo> SMAF </S.Logo>
          <S.ModalText>{props.contents ? props.contents : ""}</S.ModalText>
          <S.ConfirmBtn onClick={props.router}>확인</S.ConfirmBtn>
        </S.PointModal>
      </Modal>
    </>
  );
}
