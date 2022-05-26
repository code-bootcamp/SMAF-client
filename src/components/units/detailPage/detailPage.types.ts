export interface IProjectDetailPageHTMLProps {
  OpenFileList: () => any;
  handleDragEnd: (result: any) => any;
  handleDragStart: (initial: any) => void;
  onClickExitErrorModal: () => any;
  errorAlertModal: any;
  modalContents: any;
  isOpen: boolean;
  projectData: any;
  categoriesData: any;
  isLoading: boolean;
  dragItemId: string;
}
