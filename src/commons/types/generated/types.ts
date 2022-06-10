export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreateProjectInput = {
    endDate: Scalars["DateTime"];
    projectAddress: ProjectAddressInput;
    projectColor?: InputMaybe<Scalars["String"]>;
    projectDetailIntro: Scalars["String"];
    projectImageURL?: InputMaybe<Scalars["String"]>;
    projectIntro: Scalars["String"];
    projectName: Scalars["String"];
    startDate: Scalars["DateTime"];
    remarks?:Scalars["String"];
    contents?:Scalars["String"];
    detailAddress?:Scalars["String"]
};

export type CreateQuestionBoardInput = {
  contents: Scalars["String"];
  questionCategory: Scalars["String"];
  title: Scalars["String"];
};

export type CreateScheduleInput = {
  processCategoryId: Scalars["String"];
  projectId: Scalars["String"];
  scheduleContents: Scalars["String"];
  scheduleDate: Scalars["DateTime"];
  scheduleName: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  cancelPayment: Scalars["Boolean"];
  checkedToekn: Scalars["String"];
  createParticipant: ProjectParticipant;
  createPayment: Payment;
  createProcessCategory: ProcessCategory;
  createProject: Project;
  createProjectFile: ProjectFile;
  createQuestionBoard: QuestionBoard;
  createQuestionComment: QuestionComment;
  createSchedule: Schedule;
  createUser: User;
  deleteParticipant: Scalars["Boolean"];
  deleteProcessCategory: Scalars["Boolean"];
  deleteProject: Scalars["Boolean"];
  deleteProjectFile: Scalars["Boolean"];
  deleteQuestionBoard: Scalars["Boolean"];
  deleteQuestionComment: Scalars["Boolean"];
  deleteSchedule: Scalars["Boolean"];
  deleteUser: Scalars["Boolean"];
  login: Scalars["String"];
  logout: Scalars["String"];
  projectFileUpload: Scalars["String"];
  projectImageUpload: Scalars["String"];
  restoreAccessToken: Scalars["String"];
  sendInvitaionEmail: Scalars["String"];
  sendTokenPhone: Scalars["String"];
  updateParticipant: ProjectParticipant;
  updatePassword: Scalars["String"];
  updateProcessCategory: ProcessCategory;
  updateProject: Project;
  updateProjectFile: ProjectFile;
  updateQuestionBoard: QuestionBoard;
  updateQuestionComment: QuestionComment;
  updateSchedule: Schedule;
  userImageUpload: Scalars["String"];
};

export type MutationCancelPaymentArgs = {
  impUid: Scalars["String"];
};

export type MutationCheckedToeknArgs = {
  inputToken: Scalars["String"];
  phone: Scalars["String"];
};

export type MutationCreateParticipantArgs = {
  email: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreatePaymentArgs = {
  amount: Scalars["Float"];
  impUid: Scalars["String"];
};

export type MutationCreateProcessCategoryArgs = {
  processName: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};

export type MutationCreateProjectFileArgs = {
  fileURL: Scalars["String"];
  filename: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationCreateQuestionBoardArgs = {
  createquestionBoardInput: CreateQuestionBoardInput;
};

export type MutationCreateQuestionCommentArgs = {
  contents: Scalars["String"];
  questionboardId: Scalars["String"];
};

export type MutationCreateScheduleArgs = {
  createScheduleInput: CreateScheduleInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDeleteParticipantArgs = {
  projectParticipantId: Scalars["String"];
};

export type MutationDeleteProcessCategoryArgs = {
  processCategoryId: Scalars["String"];
};

export type MutationDeleteProjectArgs = {
  projectId: Scalars["String"];
};

export type MutationDeleteProjectFileArgs = {
  projectFileId: Scalars["String"];
};

export type MutationDeleteQuestionBoardArgs = {
  boardId: Scalars["String"];
};

export type MutationDeleteQuestionCommentArgs = {
  questionCommentId: Scalars["String"];
};

export type MutationDeleteScheduleArgs = {
  scheduleId: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationProjectFileUploadArgs = {
  file: Scalars["Upload"];
};

export type MutationProjectImageUploadArgs = {
  file: Scalars["Upload"];
};

export type MutationSendInvitaionEmailArgs = {
  email: Array<Scalars["String"]>;
};

export type MutationSendTokenPhoneArgs = {
  phone: Scalars["String"];
};

export type MutationUpdateParticipantArgs = {
  isActivated: Scalars["Boolean"];
  projectParticipantId: Scalars["String"];
};

export type MutationUpdatePasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationUpdateProcessCategoryArgs = {
  processCategoryId: Scalars["String"];
  processName: Scalars["String"];
};

export type MutationUpdateProjectArgs = {
  projectId: Scalars["String"];
  updateProjectInput: UpdateProjectInput;
};

export type MutationUpdateProjectFileArgs = {
  projectFileId: Scalars["String"];
  updateProjectFile: UpdateProjectFile;
};

export type MutationUpdateQuestionBoardArgs = {
  questionBoardID: Scalars["String"];
  updatequestionBoardInput: UpdateQuestionBoardInput;
};

export type MutationUpdateQuestionCommentArgs = {
  questionCommentId: Scalars["String"];
  updatequestionCommentInput: UpdateQuestionCommentInput;
};

export type MutationUpdateScheduleArgs = {
  scheduleId: Scalars["String"];
  updateScheduleInput: UpdateScheduleInput;
};

export type MutationUserImageUploadArgs = {
  file: Scalars["Upload"];
};

export enum Participant_Position_Enum {
  Leader = "LEADER",
  Member = "MEMBER",
}

export enum Payment_Transaction_Status_Enum {
  Cancel = "CANCEL",
  Payment = "PAYMENT",
}

export type Payment = {
  __typename?: "Payment";
  amount: Scalars["Int"];
  createAt: Scalars["DateTime"];
  impUid: Scalars["String"];
  paymentId: Scalars["String"];
  product_name: Scalars["String"];
  status: Payment_Transaction_Status_Enum;
  user: User;
};

export type ProcessCategory = {
  __typename?: "ProcessCategory";
  createAt: Scalars["DateTime"];
  processCategoryId: Scalars["String"];
  processName: Scalars["String"];
  project: Project;
};

export type Project = {
    __typename?: "Project";
    address: ProjectAddress;
    createAt: Scalars["DateTime"];
    deletedAt: Scalars["DateTime"];
    endDate: Scalars["DateTime"];
    projectColor: Scalars["String"];
    projectDetailIntro: Scalars["String"];
    projectId: Scalars["String"];
    projectImageURL: Scalars["String"];
    projectIntro: Scalars["String"];
    projectName: Scalars["String"];
    startDate: Scalars["DateTime"];
    status: Scalars["Boolean"];
    updateAt: Scalars["DateTime"];
    remarks: Scalars["String"]
};

export type ProjectAddress = {
  __typename?: "ProjectAddress";
  address: Scalars["String"];
  detailAddress: Scalars["String"];
  projectAddressId: Scalars["String"];
};

export type ProjectAddressInput = {
  address?: InputMaybe<Scalars["String"]>;
  detailAddress?: InputMaybe<Scalars["String"]>;
};

export type ProjectFile = {
  __typename?: "ProjectFile";
  fileURL: Scalars["String"];
  filename: Scalars["String"];
  project: Project;
  projectFileId: Scalars["String"];
  user: User;
};

export type ProjectParticipant = {
  __typename?: "ProjectParticipant";
  createdAt: Scalars["DateTime"];
  isActivated: Scalars["Boolean"];
  position: Participant_Position_Enum;
  project: Project;
  projectParticipantId: Scalars["String"];
  user: User;
};

export type Query = {
  __typename?: "Query";
  fetchActivatedProject: Array<ProjectParticipant>;
  fetchCategorySchedules: Array<Schedule>;
  fetchInactivatedProject: Array<ProjectParticipant>;
  fetchLoginUser: User;
  fetchParticipatingProject: Array<ProjectParticipant>;
  fetchParticipatingUser: Array<ProjectParticipant>;
  fetchPayment: Payment;
  fetchPayments: Array<Payment>;
  fetchPaymentsCount: Scalars["Int"];
  fetchProcessCategories: Array<ProcessCategory>;
  fetchProject: Project;
  fetchProjectFile: ProjectFile;
  fetchProjectFiles: Array<ProjectFile>;
  fetchProjectSchedules: Array<Schedule>;
  fetchProjectsAll: Array<Project>;
  fetchQuestionBoard: QuestionBoard;
  fetchQuestionBoards: Array<QuestionBoard>;
  fetchQuestionBoardsCount: Scalars["Int"];
  fetchQuestionComment: QuestionComment;
  fetchQuestionComments: Array<QuestionComment>;
  fetchSchedule: Schedule;
  fetchSchedules: Array<Schedule>;
  fetchUser: User;
  fetchUserEmail: Array<User>;
  fetchUsers: Array<User>;
  fetchprocessCategory: Array<ProcessCategory>;
};

export type QueryFetchCategorySchedulesArgs = {
  processCategoryId: Scalars["String"];
};

export type QueryFetchInactivatedProjectArgs = {
  standard: Scalars["String"];
};

export type QueryFetchParticipatingUserArgs = {
  projectId: Scalars["String"];
};

export type QueryFetchPaymentArgs = {
  paymentId: Scalars["String"];
};

export type QueryFetchPaymentsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryFetchProcessCategoriesArgs = {
  projectId: Scalars["String"];
};

export type QueryFetchProjectArgs = {
  projectId: Scalars["String"];
};

export type QueryFetchProjectFileArgs = {
  projectFileId: Scalars["String"];
};

export type QueryFetchProjectFilesArgs = {
  projectId: Scalars["String"];
};

export type QueryFetchProjectSchedulesArgs = {
  projectId: Scalars["String"];
};

export type QueryFetchQuestionBoardArgs = {
  questionboardId: Scalars["String"];
};

export type QueryFetchQuestionBoardsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryFetchQuestionCommentArgs = {
  questionCommentId: Scalars["String"];
};

export type QueryFetchQuestionCommentsArgs = {
  questionBoardId: Scalars["String"];
};

export type QueryFetchScheduleArgs = {
  scheduleId: Scalars["String"];
};

export type QueryFetchUserArgs = {
  userId: Scalars["String"];
};

export type QueryFetchUserEmailArgs = {
  userOremail: Scalars["String"];
};

export type QueryFetchprocessCategoryArgs = {
  processCategoryId: Scalars["String"];
};

export type QuestionBoard = {
  __typename?: "QuestionBoard";
  contents: Scalars["String"];
  createAt: Scalars["DateTime"];
  questionBoardId: Scalars["String"];
  questionCategory: Scalars["String"];
  title: Scalars["String"];
  user: User;
};

export type QuestionComment = {
  __typename?: "QuestionComment";
  contents: Scalars["String"];
  createAt: Scalars["DateTime"];
  questionBoard: QuestionBoard;
  questionCommentId: Scalars["String"];
  user: User;
};

export type Schedule = {
  __typename?: "Schedule";
  createAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  processCategory: ProcessCategory;
  project: Project;
  scheduleContents: Scalars["String"];
  scheduleDate: Scalars["DateTime"];
  scheduleId: Scalars["String"];
  scheduleName: Scalars["String"];
  status: Scalars["Boolean"];
  updateAt: Scalars["DateTime"];
  user: User;
};

export type UpdateProjectFile = {
  fileURL?: InputMaybe<Scalars["String"]>;
  filename?: InputMaybe<Scalars["String"]>;
  project?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectInput = {
    endDate?: InputMaybe<Scalars["DateTime"]>;
    projectAddress?: InputMaybe<ProjectAddressInput>;
    projectColor?: InputMaybe<Scalars["String"]>;
    projectDetailIntro?: InputMaybe<Scalars["String"]>;
    projectImageURL?: InputMaybe<Scalars["String"]>;
    projectIntro?: InputMaybe<Scalars["String"]>;
    projectName?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["DateTime"]>;
    status?: InputMaybe<Scalars["Boolean"]>;
    remarks?:InputMaybe<Scalars["String"]>;
    contents?:InputMaybe<Scalars["String"]>;
    detailAddress?:InputMaybe<Scalars["String"]>;
    fetchProject?: any;
};

export type UpdateQuestionBoardInput = {
  contents?: InputMaybe<Scalars["String"]>;
  questionCategory?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateQuestionCommentInput = {
  contents?: InputMaybe<Scalars["String"]>;
  questionBoard?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
};

export type UpdateScheduleInput = {
  processCategoryId: Scalars["String"];
  scheduleContents: Scalars["String"];
  scheduleDate: Scalars["DateTime"];
  scheduleName: Scalars["String"];
  status: Scalars["Boolean"];
};

export type User = {
  __typename?: "User";
  admin: Scalars["Boolean"];
  createAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  email: Scalars["String"];
  phone: Scalars["String"];
  projectTicket: Scalars["Int"];
  updateAt: Scalars["DateTime"];
  userId: Scalars["String"];
  userImageURL: Scalars["String"];
  userName: Scalars["String"];
};

export type CreateUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
  userImageURL?: InputMaybe<Scalars["String"]>;
  userName: Scalars["String"];
};
