import * as S from "./detailPage.styles";
import TeamMember from "../../commons/teamMember/teamMember.container";
import { IProjectDetailPageHTMLProps } from "./detailPage.types";
import AddColumnBtn from "./addColumnBtn/addColumnBtn.container";
import DetailPlanListColumn from "./detailPlanListColumn/detailPlanListColumn.container";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useRouter } from "next/router";
export default function ProjectDetailPageHTML(
  props: IProjectDetailPageHTMLProps
) {
  // console.log(props.projectData, "projectData");
  // console.log(props.categoriesData, "categoriesData");

  const router = useRouter();

  const MoveEdit = () => {
    router.push(`./${router.query.projectId}/edit`);
  };
  return (
    <S.Wrapper>
      {props.projectData && (
        <>
          <S.LeftWrapper>
            <button onClick={MoveEdit}>수정하기</button>
            <S.ProjectDetail>
              {props.projectData?.fetchProject?.projectImageURL ? (
                <S.DetailImg
                  src={props.projectData?.fetchProject?.projectImageURL}
                ></S.DetailImg>
              ) : (
                <S.DetailImg src="/test.png"></S.DetailImg>
              )}
              <S.DetailProjectName>
                {props.projectData?.fetchProject.projectName}
              </S.DetailProjectName>
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
              </S.DetailProjectPosition>
            </S.ProjectDetail>
            <TeamMember />
            <S.FileList>
              <S.FileListName>
                <div>File</div>
                <S.FileHiddenIcon
                  src="/detailPage/hiddenBtn.png"
                  onClick={props.OpenFileList}
                ></S.FileHiddenIcon>
              </S.FileListName>
              {/* data.map 부분 */}
              {props.isOpen && (
                <>
                  <S.FileListUpload>
                    <S.FileListUploadIcon src="/detailPage/file.png"></S.FileListUploadIcon>
                    <S.FileListContents>
                      대한민국 환경오염 문제asdas
                    </S.FileListContents>
                  </S.FileListUpload>
                  <S.FileListUpload>
                    <S.FileListUploadIcon src="/detailPage/file.png"></S.FileListUploadIcon>
                    <S.FileListContents>
                      대한민국 환경오염 문제asdas
                    </S.FileListContents>
                  </S.FileListUpload>
                </>
              )}
            </S.FileList>
          </S.LeftWrapper>

          <S.RightWrapper>
            {props.isLoading && (
              <DragDropContext onDragEnd={props.handleDragEnd}>
                {props.categoriesData?.fetchProcessCategories.map(
                  (el: any, index: any) => (
                    <Droppable
                      droppableId={String(el.processCategoryId)}
                      key={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          // style={{backgroundColor: snapshot.isDraggingOver ? 'white' : 'grey'}}
                        >
                          <DetailPlanListColumn
                            key={el.processCategoryId}
                            el={el}
                            tableIndex={index}
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
  );
}
