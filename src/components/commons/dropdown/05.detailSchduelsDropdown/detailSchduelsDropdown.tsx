import { Menu, Dropdown, Space, Modal } from "antd";
import { useMutation, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./detailSchduelsDropdown.styles";
import { triger } from "../../../../commons/store/index";
import { useRecoilState } from "recoil";
import { DropdownSchduelsProps } from "../dropdown.types";

export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule(
    $scheduleId: String!
    $updateScheduleInput: UpdateScheduleInput!
  ) {
    updateSchedule(
      scheduleId: $scheduleId
      updateScheduleInput: $updateScheduleInput
    ) {
      scheduleId
    }
  }
`;

export const DELETE_SCHEDULE = gql`
  mutation deleteSchedule($scheduleId: String!) {
    deleteSchedule(scheduleId: $scheduleId)
  }
`;
export const FETCH_PROJECT_SCHEDULES_CATEGORY = gql`
  query fetchCategorySchedules($processCategoryId: String!) {
    fetchCategorySchedules(processCategoryId: $processCategoryId) {
      scheduleId
      scheduleName
      scheduleDate
      status
      processCategory {
        processCategoryId
      }
      project {
        projectId
      }
      createAt
    }
  }
`;

export const FETCH_PROCESS_CATEGORY = gql`
  query fetchprocessCategory($processCategoryId: String!) {
    fetchprocessCategory(processCategoryId: $processCategoryId) {
      processCategoryId
    }
  }
`;

export const FETCH_SCHEDULE = gql`
  query fetchSchedule($scheduleId: String!) {
    fetchSchedule(scheduleId: $scheduleId) {
      scheduleId
    }
  }
`;

const Img = styled.img`
  margin-bottom: 1.2rem;
`;
export default function DropdownSchduels(props: DropdownSchduelsProps) {
  const [updataSchedule] = useMutation(UPDATE_SCHEDULE);
  const [deleteSchedule] = useMutation(DELETE_SCHEDULE);
  const [isOpen, setIsOpen] = useState(false);
  const [, setDataTriger] = useRecoilState(triger);
  const onToggleModal = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const DeleteSchedule = async () => {
    await deleteSchedule({
      variables: {
        scheduleId: props.id,
      },
      refetchQueries: [
        {
          query: FETCH_SCHEDULE,
          variables: {
            scheduleId: props.id,
          },
        },
      ],
    });
    setDataTriger((prev) => !prev);
  };
  const UpdataSchedule = async (data: any) => {
    try {
      await updataSchedule({
        variables: {
          scheduleId: props.id,
          updateScheduleInput: {
            ...data,
            processCategoryId: props.categoryId,
            status: true,
          },
        },
        refetchQueries: [
          {
            query: FETCH_SCHEDULE,
            variables: {
              scheduleId: props.id,
            },
          },
        ],
      });

      onToggleModal();
    } catch (error) {
      alert(error);
    } finally {
      setDataTriger((prev) => !prev);
    }
  };

  const EndSchedule = async () => {
    try {
      await updataSchedule({
        variables: {
          scheduleId: props.id,
          updateScheduleInput: {
            scheduleName: props.el?.scheduleName,
            scheduleContents: props.el?.scheduleContents,
            scheduleDate: props.el?.scheduleDate,
            processCategoryId: props.categoryId,
            status: false,
          },
        },
        refetchQueries: [
          {
            query: FETCH_SCHEDULE,
            variables: {
              scheduleId: props.id,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    } finally {
      setDataTriger((prev) => !prev);
    }
  };

  const ReOpenSchedule = async () => {
    try {
      await updataSchedule({
        variables: {
          scheduleId: props.id,
          updateScheduleInput: {
            scheduleName: props.el?.scheduleName,
            scheduleContents: props.el?.scheduleContents,
            scheduleDate: props.el?.scheduleDate,
            processCategoryId: props.categoryId,
            status: true,
          },
        },
        refetchQueries: [
          {
            query: FETCH_SCHEDULE,
            variables: {
              scheduleId: props.id,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    } finally {
      setDataTriger((prev) => !prev);
    }
  };

  const menu = (
    <Menu style={{ borderRadius: "8px" }}>
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
          <form onSubmit={handleSubmit(UpdataSchedule)}>
            <S.Basic>
              <S.ProjectName>
                <S.Word>프로젝트 명</S.Word>
                <S.ProjectNameInput
                  {...register("scheduleName")}
                ></S.ProjectNameInput>
              </S.ProjectName>
              <S.ProjectContents>
                <S.Word>일정내용</S.Word>

                <S.ContentsArea
                  {...register("scheduleContents")}
                ></S.ContentsArea>
              </S.ProjectContents>
              <S.EndDate>
                <S.Word>마감일</S.Word>
                <S.Date {...register("scheduleDate")}></S.Date>
              </S.EndDate>
              <S.ConfirmBtn>일정 수정하기</S.ConfirmBtn>
            </S.Basic>
          </form>
        </Modal>
      )}
      <Menu.Item onClick={onToggleModal}>일정 수정하기</Menu.Item>
      <Menu.Item onClick={DeleteSchedule}>일정 삭제하기</Menu.Item>
      <Menu.Item onClick={props.el?.status ? EndSchedule : ReOpenSchedule}>
        {props.el?.status ? "일정 종료하기" : "일정 재시작"}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div style={{ width: "1.3rem" }}></div>
          <Img src="/detailPage/spread.png"></Img>
        </Space>
      </a>
    </Dropdown>
  );
}
