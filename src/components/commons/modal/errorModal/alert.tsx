import * as S from "./alert.styles";
import { Modal } from "antd";
import { useState } from "react";

interface IPropsErrorAlert {
  contents?: string;
  onClickExit: () => void;
}

export default function ErrorAlert(props: IPropsErrorAlert) {
  const [, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
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
        onOk={onToggleModal}
        onCancel={onToggleModal}
      >
        <S.PointModal>
          <S.Close onClick={onToggleModal}>X</S.Close>
          <S.Logo src="/images/remove.png" />
          <S.ModalText>{props.contents ? props.contents : ""}</S.ModalText>
          <S.ConfirmBtn onClick={props.onClickExit}>확인</S.ConfirmBtn>
        </S.PointModal>
      </Modal>
    </>
  );
}
