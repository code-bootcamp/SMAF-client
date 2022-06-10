import * as S from "./detailPage.styles";
import TeamMember from "../../commons/teamMember/teamMember.container";
import { IProjectDetailPageHTMLProps } from "./detailPage.types";
import AddColumnBtn from "./addColumnBtn/addColumnBtn.container";
import DetailPlanListColumn from "./detailPlanListColumn/detailPlanListColumn.container";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ProjectEditDropdown from "../../commons/dropdown/06.projectEditDropdown/projectEditDropdown";
import ErrorAlert from "../../commons/modal/errorModal/alert";
import { useState } from "react";
import ProjectFileUpload from "../../commons/uploads/fileuploads/fileUpload01.container";
import { ProcessCategory } from "../../../commons/types/generated/types";

export default function ProjectDetailPageHTML(
  props: IProjectDetailPageHTMLProps
) {
  const [isOpenProject, setIsOpenProject] = useState<boolean>(true);
  const [isOpenMember, setIsOpenMember] = useState<boolean>(false);
  const [isOpenFile, setIsOpenFile] = useState<boolean>(false);

  const OpenProject = () => {
    setIsOpenProject(true);
    setIsOpenMember(false);
    setIsOpenFile(false);
  };
  const OpenMember = () => {
    setIsOpenProject(false);
    setIsOpenMember(true);
    setIsOpenFile(false);
  };
  const OpenFile = () => {
    setIsOpenProject(false);
    setIsOpenMember(false);
    setIsOpenFile(true);
  };
  return (
    <>
      {props.errorAlertModal && (
        <ErrorAlert
          onClickExit={props.onClickExitErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.Wrapper>
        {props.projectData && (
          <>
            <S.LeftWrapper>
              <S.ProjectDetail>
                {props.projectData?.fetchProject?.projectImageURL ? (
                  <S.DetailImg
                    src={props.projectData?.fetchProject?.projectImageURL}
                  ></S.DetailImg>
                ) : (
                  <S.DetailImg src="/images/noimage.png"></S.DetailImg>
                )}
                <S.BasicLow>
                  <S.DetailProjectName>
                    {props.projectData?.fetchProject.projectName}
                  </S.DetailProjectName>
                  {props.myDataInProject?.position === "LEADER" && (
                    <ProjectEditDropdown projectData={props.projectData} />
                  )}
                </S.BasicLow>
                <S.DetailProjectContents>
                  {props.projectData?.fetchProject.projectIntro}
                </S.DetailProjectContents>
                <S.DetailProjectDay>
                  {props.projectData?.fetchProject.startDate.slice(0, 10)} ~{" "}
                  {props.projectData?.fetchProject.endDate.slice(0, 10)}
                </S.DetailProjectDay>
                <S.DetailProjectPosition>
                  <S.DetailProjectIcon src="/detailPage/position.png" />
                  {props.projectData?.fetchProject?.address?.address}
                  {` `}
                  {props.projectData?.fetchProject?.address?.detailAddress}
                </S.DetailProjectPosition>
                <S.BtnList>
                  <S.ShowBtn1
                    onClick={OpenProject}
                    isOpenProject={isOpenProject}
                  >
                    일정
                  </S.ShowBtn1>
                  <S.ShowBtn2 onClick={OpenMember} isOpenMember={isOpenMember}>
                    멤버
                  </S.ShowBtn2>
                  <S.ShowBtn3 onClick={OpenFile} isOpenFile={isOpenFile}>
                    파일
                  </S.ShowBtn3>
                </S.BtnList>
              </S.ProjectDetail>

              <S.MemberList isOpenMember={isOpenMember}>
                <TeamMember />
              </S.MemberList>
              <S.FileList isOpenFile={isOpenFile}>
                <ProjectFileUpload />
              </S.FileList>
            </S.LeftWrapper>
            <S.RightWrapper
              isOpenProject={isOpenProject}
              color={props.projectData?.fetchProject.projectColor}
            >
              {props.isLoading && (
                <DragDropContext
                  onDragEnd={props.handleDragEnd}
                  onDragStart={props.handleDragStart}
                >
                  {props.categoriesData?.fetchProcessCategories.map(
                    (el: ProcessCategory, index: number) => (
                      <Droppable
                        droppableId={String(el.processCategoryId)}
                        key={index}
                      >
                        {(provided, __) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <DetailPlanListColumn
                              key={el.processCategoryId}
                              el={el}
                              scheduleArray={props.scheduleArray[index]}
                              tableIndex={Number(index)}
                              dragItemId={props.dragItemId}
                            />
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    )
                  )}
                  <AddColumnBtn
                    projectId={props.projectData?.fetchProject.projectId}
                  />
                </DragDropContext>
              )}
            </S.RightWrapper>
          </>
        )}
      </S.Wrapper>
    </>
  );
}
