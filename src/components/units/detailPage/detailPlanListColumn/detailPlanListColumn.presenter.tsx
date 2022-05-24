import DetailPlanCard from "./detailPlanCard/detailPlanCard.container";
import * as S from "./detailPlanListColumn.styles";
import { useState } from "react";
import { Modal } from "antd";
import { Draggable } from "react-beautiful-dnd";
import DetailPlanAddModal from "./detailPlanAddModal/detailPlanAddModal.container";

export default function DetailPlanListColumnHTML(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onToggleDropDown = () => {
    setDropDown((prev) => !prev);
  };
  // console.log(props.columnData, "columnData");
  // console.log(props.scheduleData, "scheduleData");
  return (
    <S.Wrapper>
      <S.AddColumn>
        <S.ColumnTitle>{props.columnData?.processName}</S.ColumnTitle>
        <div>
          <S.EditCoulumnIcon
            onClick={onToggleDropDown}
            src="/detailPage/spread.png"
          ></S.EditCoulumnIcon>

          <S.AddCoulumnIcon
            src="/detailPage/AddColumn.png"
            onClick={onToggleModal}
          ></S.AddCoulumnIcon>
        </div>
      </S.AddColumn>
      {dropDown && (
        <>
          <S.DropDown>
            <S.DropMenu>카테고리 수정</S.DropMenu>
            <S.DropMenu onClick={props.DeleteCategory}>
              카테고리 삭제
            </S.DropMenu>
          </S.DropDown>
        </>
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
            width: "52rem",
            height: "50rem",
            backgroundColor: "#FFFFFF",
          }}
          footer={null}
          centered={true}
        >
          <DetailPlanAddModal
            categoryId={props.columnData?.processCategoryId}
            onToggleModal={onToggleModal}
          />
        </Modal>
      )}
      {props.scheduleData?.fetchCategorySchedules.map((el: any, index: any) => (
        <Draggable
          key={String(el.scheduleId)}
          index={index}
          draggableId={String(el.scheduleId)}
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <DetailPlanCard key={el.scheduleId} el={el} />
            </div>
          )}
        </Draggable>
      ))}
    </S.Wrapper>
  );
}
