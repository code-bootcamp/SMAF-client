import { Menu, Dropdown, Space, Modal } from "antd";
// import { DownOutlined } from "@ant-design/icons";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./detailPageDropdown.styles";
import { triger } from "../../../../commons/store/index";
import { useRecoilState } from "recoil";
import { DropdownDetailProps } from "../dropdown.types";

export const UPDATE_PROCESS_CATEGORY = gql`
  mutation updateProcessCategory(
    $processName: String!
    $processCategoryId: String!
  ) {
    updateProcessCategory(
      processName: $processName
      processCategoryId: $processCategoryId
    ) {
      processCategoryId
    }
  }
`;
export const FETCH_PROCESS_CATEGORIES = gql`
  query fetchProcessCategories($projectId: String!) {
    fetchProcessCategories(projectId: $projectId) {
      processCategoryId
      processName
      createAt
    }
  }
`;

const Img = styled.img`
  margin-bottom: 1.2rem;
`;
export default function DropdownDetail(props: DropdownDetailProps) {
  const [updataProcessCategory] = useMutation(UPDATE_PROCESS_CATEGORY);
  const [, setDataTriger] = useRecoilState(triger);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const UpdateCategory = async (data: any) => {
    try {
      await updataProcessCategory({
        variables: {
          processName: data.processName,
          processCategoryId: props.id,
        },
        refetchQueries: [
          {
            query: FETCH_PROCESS_CATEGORIES,
            variables: {
              projectId: router.query.projectId,
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
          footer={null}
          centered={true}
        >
          <form onSubmit={handleSubmit(UpdateCategory)}>
            <S.NewCategory>
              <S.CategoryTitle>카테고리 수정</S.CategoryTitle>
              <S.CategoryInput {...register("processName")}></S.CategoryInput>
              <S.CategoryBtn>수정하기</S.CategoryBtn>
            </S.NewCategory>
          </form>
        </Modal>
      )}
      <Menu.Item onClick={onToggleModal}>카테고리 수정</Menu.Item>
      <Menu.Item onClick={props.DeleteCategory}>카테고리 삭제</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div style={{ width: "1.3rem" }}></div>
          <Img src="/detailPage/spread.png"></Img>
          {/* <DownOutlined style={{ color: "#E5E5E5" }} /> */}
        </Space>
      </a>
    </Dropdown>
  );
}
