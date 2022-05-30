import * as S from "./addColumnBtn.style";
// import { IAddColumnBtnProps } from "./addColumnbtn.types";
import { Modal } from "antd";
import { useEffect } from "react";
import ErrorAlert from "../../../commons/modal/errorModal/alert";
// IAddColumnBtnProps
export default function AddColumnBtnHTML(props: any) {
    useEffect(() => {
        props.reset({ processName: "" });
    }, [props.isOpen]);
    return (
        <>
            {props.errorAlertModal && (
                <ErrorAlert
                    onClick={props.onClickAlertModal}
                    onClickExit={props.onClickErrorModal}
                    contents={props.modalContents}
                />
            )}

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
                            footer={null}
                            centered={true}
                        >
                            <form onSubmit={props.handleSubmit(props.CreateProjectCategory)}>
                                <S.NewCategory>
                                    <S.CategoryTitle>카테고리 추가</S.CategoryTitle>
                                    <S.CategoryInput
                                        {...props.register("processName")}
                                    ></S.CategoryInput>
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
        </>
    );
}
