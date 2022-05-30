export interface IDetailPlanAddModalProps {
  register: any;
  handleSubmit: any;
  alertModal: any;
  modalContents: any;
  errorAlertModal: any;
  onClickAlertModal: () => any;
  onClickConfirmModal: () => void;
  onClickErrorModal: () => void;
  onClickRoutingModal: () => void;
  setErrorAlertModal: () => any;
  CreateNewSchedule: (data: any) => void;
}
