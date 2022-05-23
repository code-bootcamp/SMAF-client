import DetailWriteBtnHTML from "./addColumnBtn.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_PROCESS_CATEGORY } from "../detailPage.querys";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FETCH_PROCESS_CATEGORIES } from "./addColumnbtn.querys";
export default function AddColumnBtn(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  const [createCategory] = useMutation(CREATE_PROCESS_CATEGORY);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const CreateProjectCategory = async (data: any) => {
    try {
      await createCategory({
        variables: {
          processName: data.processName,
          projectId: props.projectId,
        },
        refetchQueries: [
          {
            query: FETCH_PROCESS_CATEGORIES,
            variables: {
              projectId: props.projectId,
            },
          },
        ],
      });

      // console.log(result);
      onToggleModal();
    } catch (error) {
      alert("error");
    }
  };

  return (
    <DetailWriteBtnHTML
      CreateProjectCategory={CreateProjectCategory}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
    />
  );
}
