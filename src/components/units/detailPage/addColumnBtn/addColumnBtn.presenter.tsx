import * as S from "./addColumnBtn.style";
import { IAddColumnBtnProps } from "./addColumnbtn.types";
import { Modal } from "antd";
import { useEffect } from "react";

export default function AddColumnBtnHTML(props: IAddColumnBtnProps) {
  useEffect(() => {
    props.reset({ processName: "" });
  }, [props.isOpen]);
  return (
    <S.Wrapper>
      <S.AddColumn>
        <div>항목추가</div>
        {props.isOpen && (
          <Modal
            visible={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
            maskStyle={{
              width: "100%",
              height: "100%",
            }}
            // bodyStyle={{
            //   width: "52rem",
            //   height: "25rem",
            //   backgroundColor: "#FFFFFF",
            // }}
            footer={null}
            centered={true}
          >
            <form onSubmit={props.handleSubmit(props.CreateProjectCategory)}>
              <S.NewCategory>
                <S.CategoryTitle>카테고리 추가</S.CategoryTitle>
                <S.AddCategory>
                  <S.CategoryInput
                    {...props.register("processName")}
                  ></S.CategoryInput>
                </S.AddCategory>
                <S.CategoryBtn>추가하기</S.CategoryBtn>
              </S.NewCategory>
            </form>
          </Modal>
        )}
        <S.AddCoulumnIcon
          onClick={props.onToggleModal}
          src="/detailPage/AddColumn.png"
        ></S.AddCoulumnIcon>
      </S.AddColumn>
    </S.Wrapper>
  );
}
