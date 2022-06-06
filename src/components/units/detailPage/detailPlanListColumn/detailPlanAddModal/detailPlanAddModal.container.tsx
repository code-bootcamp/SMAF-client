import DetailPlanAddModalHTML from "./detailPlanAddModal.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import {
  CREATE_SCHEDULE,
  FETCH_PROJECT_SCHEDULES_CATEGORY,
} from "./detailPlanAddModal.querys";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { selectedDate, triger } from "../../../../../commons/store/index";
import { useState } from "react";
import moment from "moment";
import { DetailPlanAddModalProps } from "./detailPlanAddModal.tpyes";
import {
  Mutation,
  ProcessCategory,
} from "../../../../../commons/types/generated/types";

export default function DetailPlanAddModal(props: DetailPlanAddModalProps) {
  const router = useRouter();
  const [createSchedule] =
    useMutation<Pick<Mutation, "createSchedule">>(CREATE_SCHEDULE);
  const [, setDataTriger] = useRecoilState(triger);
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState<string>();
  const [errorAlertModal, setErrorAlertModal] = useState(false);

  const [selectedDay, setSelectedDay] = useRecoilState<Date>(selectedDate);

  // 확인 모달
  const onClickConfirmModal = () => {
    setAlertModal(false);
  };

  // 에러 모달
  const onClickErrorModal = () => {
    setErrorAlertModal(false);
  };
  const dDay = moment(selectedDay).format("YYYY-MM-DD");
  const CreateNewSchedule = async (data: ProcessCategory) => {
    try {
      await createSchedule({
        variables: {
          createScheduleInput: {
            ...data,
            scheduleDate: dDay,
            processCategoryId: props.categoryId,
            projectId: String(router.query.projectId),
          },
        },
        refetchQueries: [
          {
            query: FETCH_PROJECT_SCHEDULES_CATEGORY,
            variables: {
              processCategoryId: props.categoryId,
            },
          },
        ],
      });
      setModalContents("일정이 등록되었습니다.");
      setAlertModal(true);
      props.onToggleModal();
      setSelectedDay(new Date());
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      setModalContents(message);
      setErrorAlertModal(true);
    } finally {
      setDataTriger((prev) => !prev);
    }
  };
  return (
    <DetailPlanAddModalHTML
      register={register}
      handleSubmit={handleSubmit}
      CreateNewSchedule={CreateNewSchedule}
      alertModal={alertModal}
      modalContents={modalContents}
      errorAlertModal={errorAlertModal}
      onClickConfirmModal={onClickConfirmModal}
      onClickErrorModal={onClickErrorModal}
    />
  );
}
