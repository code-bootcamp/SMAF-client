export interface IMyPageUIProps {
  data?: any;
  activeData: any;
  inActiveData: any;
  onClickMoveToNewProject: () => void;
  onClickMoveToProject: () => void;
  onClickMoveToPaymentList: () => void;
  onClickMoveToDetail: (event: any) => void;
}
