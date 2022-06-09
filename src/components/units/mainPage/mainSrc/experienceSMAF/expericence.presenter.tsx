import * as S from "./expericence.styles";
import ExperienceSMAFDetail from "./experienceSMAFDetail/experienceSMAFDetail.container";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { ExperienceSMAFHTMLProps } from "./expericence.types";

export default function ExperienceSMAFHTML(props: ExperienceSMAFHTMLProps) {
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
    <S.Wrapper>
      <S.LeftWrapper>
        <S.ProjectDetail>
          <S.DetailImg src="/images/noimage.png"></S.DetailImg>
          <S.BasicLow>
            <S.DetailProjectName>체험 프로젝트</S.DetailProjectName>
            {/* {props.myDataInProject?.position === "LEADER" && (
                    <ProjectEditDropdown projectData={props.projectData} />
                  )} */}
          </S.BasicLow>
          <S.DetailProjectContents>
            짧은 소개가 들어가요!
          </S.DetailProjectContents>
          <S.DetailProjectDay>2022-06-01 ~ 2022-06-30</S.DetailProjectDay>
          <S.DetailProjectPosition>
            <S.DetailProjectIcon src="/detailPage/position.png" />
            주소 - 상세주소
          </S.DetailProjectPosition>
          <S.BtnList>
            <S.ShowBtn1 onClick={OpenProject} isOpenProject={isOpenProject}>
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

        <S.MemberList>
          <S.Title>Members</S.Title>
          <S.Team>
            <S.Member>
              <S.TeamPerson src="/mainPageImages/dog1.jpg" />
              <S.Name>회원이름</S.Name>
            </S.Member>
          </S.Team>
        </S.MemberList>
        <S.FileList>
          <S.TitleBox>
            <S.Title>File</S.Title>
            {/* <S.FileHiddenIcon src="/detailPage/hiddenBtn.png"></S.FileHiddenIcon> */}
            <S.Files>
              <S.Filename>
                <div>
                  <S.FileImg src="/images/file.png" />
                </div>
                파일 이름이 나와요
                <a type="#">
                  <S.DownImg src="/images/download.png" />
                </a>
              </S.Filename>
              <S.Filename>
                <div>
                  <S.FileImg src="/images/file.png" />
                </div>
                파일 이름이 나와요
                <a type="#">
                  <S.DownImg src="/images/download.png" />
                </a>
              </S.Filename>
              <S.Filename>
                <div>
                  <S.FileImg src="/images/file.png" />
                </div>
                파일 이름이 나와요
                <a type="#">
                  <S.DownImg src="/images/download.png" />
                </a>
              </S.Filename>
            </S.Files>
          </S.TitleBox>
        </S.FileList>
      </S.LeftWrapper>
      <DragDropContext
        onDragEnd={props.handleDragEnd}
        onDragStart={props.handleDragStart}
      >
        {props.categoryName?.map((el: string[], index: number) => (
          <Droppable droppableId={el[0]} key={index}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ExperienceSMAFDetail
                  key={index}
                  el={el}
                  index={index}
                  number={index}
                  scheduleArray={props.scheduleArray}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
        <S.AddcolumnBtn>
          항목추가
          <S.AddCoulumnIcon
            onClick={props.AddColumn}
            src="/detailPage/addcolumn.png"
          ></S.AddCoulumnIcon>
        </S.AddcolumnBtn>
      </DragDropContext>
    </S.Wrapper>
  );
}
