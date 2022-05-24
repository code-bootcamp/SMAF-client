import * as S from "./teamMember.styles";
import { TeamMemberUIProps } from "./teamMember.types";
import AddMemberModal from "./addMemberModal/addMemberModal.container";
import { useState } from "react";
import { Modal } from "antd";

export default function TeamMemberUI(props: TeamMemberUIProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>Members</S.Title>
      </S.TitleBox>
      <S.TeamPeople>
        {props.partcipatingData?.fetchParticipatingUser?.map((el: any) => (
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
        ))}
        <S.Team>
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
              <AddMemberModal onToggleModal={onToggleModal} />
            </Modal>
          )}
          <S.Member>
            <S.TeamPersonAdd onClick={onToggleModal}>+</S.TeamPersonAdd>
            <S.Name>팀원초대하기</S.Name>
          </S.Member>
        </S.Team>
      </S.TeamPeople>
    </S.Wrapper>
  );
}
