import * as S from "./detailPage.styles";
import TeamMember from "../../commons/teamMember/teamMember.container";
import { IProjectDetailPageHTMLProps } from "./detailPage.types";
import AddColumnBtn from "./addColumnBtn/addColumnBtn.container";
import DetailPlanListColumn from "./detailPlanListColumn/detailPlanListColumn.container";
export default function ProjectDetailPageHTML(
  props: IProjectDetailPageHTMLProps
) {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.ProjectDetail>
          <S.DetailImg src="/test.png"></S.DetailImg>
          <S.DetailProjectName>친환경 서비스 프로젝트</S.DetailProjectName>
          <S.DetailProjectContents>
            경기도와 함께하는 친환경 서비스 프로젝트{" "}
          </S.DetailProjectContents>
          <S.DetailProjectDay>2022.05.12 ~ 2022.06.24</S.DetailProjectDay>
          <S.DetailProjectPosition>
            <S.DetailProjectIcon src="/detailPage/position.png" />
            서울종로구
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
        <DetailPlanListColumn />
        <AddColumnBtn />
      </S.RightWrapper>
    </S.Wrapper>
  );
}
