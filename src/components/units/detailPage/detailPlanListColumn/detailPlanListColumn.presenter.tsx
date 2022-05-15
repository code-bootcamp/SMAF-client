import DetailPlanCard from "./detailPlanCard/detailPlanCard.container";
import * as S from "./detailPlanListColumn.styles";
import { useState } from "react";
import { Modal } from "antd";
import DetailPlanAddModal from "./detailPlanAddModal/detailPlanAddModal.container";
export default function DetailPlanListColumnHTML() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <S.Wrapper>
      <S.AddColumn>
        <div>진행예정</div>
        <S.AddCoulumnIcon
          src="/detailPage/AddColumn.png"
          onClick={onToggleModal}
        ></S.AddCoulumnIcon>
      </S.AddColumn>
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
            width: "52rem",
            height: "50rem",
            backgroundColor: "#FFFFFF",
          }}
          footer={null}
          centered={true}
        >
          <DetailPlanAddModal />
        </Modal>
      )}
      <DetailPlanCard />
    </S.Wrapper>
  );
}
