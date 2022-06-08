import * as S from "./teamMember.styles";
import { TeamMemberUIProps } from "./teamMember.types";
import AddMemberModal from "./addMemberModal/addMemberModal.container";
import { useState } from "react";
import { Modal } from "antd";
import { ProjectParticipant } from "../../../commons/types/generated/types";

export default function TeamMemberUI(props: TeamMemberUIProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMember, setIsOpenMember] = useState(true);
    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };
    const OpenList = () => {
        setIsOpenMember((prev) => !prev);
    };
    return (
        <S.Wrapper>
            <S.TitleBox>
                <S.Title>Members</S.Title>
                <S.FileHiddenIcon
                    src="/detailPage/hiddenBtn.png"
                    onClick={OpenList}
                ></S.FileHiddenIcon>
            </S.TitleBox>
            {isOpenMember && (
                <S.TeamPeople>
                    {props.partcipatingData?.fetchParticipatingUser?.map(
                        (el: ProjectParticipant) => (
                            <div key={el.user.userId}>
                                {el.position === "LEADER" && (
                                    <>
                                        <S.Team>
                                            <S.Member>
                                                {el.user.userImageURL && !null && !undefined ? (
                                                    <S.TeamPerson src={el.user.userImageURL} />
                                                ) : (
                                                    <S.TeamPerson src="/mainPageImages/dog1.jpg" />
                                                )}
                                                <S.Name>{el.user.userName}</S.Name>
                                            </S.Member>
                                        </S.Team>
                                        <S.Line></S.Line>
                                    </>
                                )}
                                {el.position === "MEMBER" && (
                                    <S.Member>
                                        <S.BasicRow>
                                            {el.user.userImageURL && !null && !undefined ? (
                                                <S.TeamPerson src={el.user.userImageURL} />
                                            ) : (
                                                <S.TeamPerson src="/mainPageImages/dog2.jpg" />
                                            )}
                                            <S.Name>{el.user.userName}</S.Name>
                                        </S.BasicRow>
                                        {props.myData?.fetchLoginUser.userId ===
                                        props.partcipatingData?.fetchParticipatingUser?.[0].user
                                            .userId ? (
                                            <S.RemoveBtn
                                                id={el.projectParticipantId}
                                                onClick={props.DeleteParticipant}
                                            >
                                                삭제
                                            </S.RemoveBtn>
                                        ) : (
                                            <div></div>
                                        )}
                                    </S.Member>
                                )}
                            </div>
                        )
                    )}
                    <S.Team>
                        {isOpen && (
                            <Modal
                                visible={true}
                                onOk={onToggleModal}
                                onCancel={onToggleModal}
                                maskStyle={{
                                    height: "100%",
                                }}
                                bodyStyle={{
                                    // width: "52rem",
                                    // height: "50rem",
                                    backgroundColor: "#FFFFFF",
                                }}
                                footer={null}
                                centered={true}
                            >
                                <AddMemberModal onToggleModal={onToggleModal} />
                            </Modal>
                        )}
                        {props.myData?.fetchLoginUser.userId ===
                        props.partcipatingData?.fetchParticipatingUser?.[0].user.userId ? (
                            <S.AddMember>
                                <S.TeamPersonAdd onClick={onToggleModal}>+</S.TeamPersonAdd>
                                <S.Name>팀원초대하기</S.Name>
                            </S.AddMember>
                        ) : (
                            <div></div>
                        )}
                    </S.Team>
                </S.TeamPeople>
            )}
        </S.Wrapper>
    );
}
