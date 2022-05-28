export interface IMyPageUIProps {
  visible: any;
  data?: any;
  activeData: any;
  inActiveData: any;
  userData: any;
  onClickMoveToNewProject: () => void;
  onClickMoveToProject: () => void;
  onClickMoveToPaymentList: () => void;
  onClickMoveToDetail: (event: any) => void;
  onClickMoveToMyPage: () => void;
  onClickMoveToProjectDetail: (event: any) => void;
  onClickMoveToPasswordChange: () => void;
}
