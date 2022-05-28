import DetailPlanCard from "./detailPlanCard/detailPlanCard.container";
import * as S from "./detailPlanListColumn.styles";
import { useState } from "react";
import { Modal } from "antd";
import { Draggable } from "react-beautiful-dnd";
import DetailPlanAddModal from "./detailPlanAddModal/detailPlanAddModal.container";
import DropdownDetail from "../../../commons/dropdown/04.detailPageDropdown/detailPageDropdown";

export default function DetailPlanListColumnHTML(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  // console.log(props.scheduleArray, "1");
  // console.log(props.scheduleData?.fetchCategorySchedules, "2");
  return (
    <>
      {props.scheduleArray && (
        <S.Wrapper>
          <S.AddColumn>
            <S.ColumnTitle>{props.columnData?.processName}</S.ColumnTitle>
            <S.BasicRow>
              {/* <S.EditCoulumnIcon
            // onClick={onToggleDropDown}
            src="/detailPage/spread.png"
          ></S.EditCoulumnIcon> */}
              {props.my?.position === "LEADER" && (
                <DropdownDetail
                  DeleteCategory={props.DeleteCategory}
                  id={props.columnData?.processCategoryId}
                />
              )}
              <S.AddCoulumnIcon
                src="/detailPage/AddColumn.png"
                onClick={onToggleModal}
              ></S.AddCoulumnIcon>
            </S.BasicRow>
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
              <DetailPlanAddModal
                categoryId={props.columnData?.processCategoryId}
                onToggleModal={onToggleModal}
              />
            </Modal>
          )}
          {props.scheduleArray?.map((el: any, index: any) => (
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
                  <DetailPlanCard
                    key={el.scheduleId}
                    el={el}
                    dragItemId={props.dragItemId}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </S.Wrapper>
      )}
    </>
  );
}

// {props.scheduleData?.fetchCategorySchedules.map((el: any, index: any) => (
//   <Draggable
//     key={String(el.scheduleId)}
//     index={index}
//     draggableId={String(el.scheduleId)}
//   >
//     {(provided) => (
//       <div
//         ref={provided.innerRef}
//         {...provided.dragHandleProps}
//         {...provided.draggableProps}
//       >
//         <DetailPlanCard
//           key={el.scheduleId}
//           el={el}
//           dragItemId={props.dragItemId}
//         />
//       </div>
//     )}
//   </Draggable>
//   ))}
