export interface IMyPageUIProps {
  visible: boolean;
  data?: any;
  activeData: any;
  inActiveData: any;
  userData: any;
  onClickMoveToNewProject: () => void;
  onClickMoveToPaymentList: () => void;
  onClickMoveToMyPage: () => void;
  onClickMoveToProjectDetail: (event: any) => void;
  onClickMoveToPasswordChange: () => void;
}
