// import Project from "../../commons/project/project.container";
import * as S from "./myPage.styles";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";
// import Project from "../../commons/project/01/project01.container";
import Project01 from "../../commons/project/01/project01.container";
import Project02 from "../../commons/project/02/project02.containter";

export default function MyPageUI() {
  return (
    <S.Wrapper>
      <S.Container>
        <UserInfoCard
          userEmail={undefined}
          userName={undefined}
          userImageSrc={undefined}
          src1={undefined}
          src2={undefined}
          src3={undefined}
          title1={undefined}
          title2={undefined}
          title3={undefined}
        />
        <S.ProjectWrapper>
          <S.ProjectWrapper2>
            <S.Wrapper2>
              <S.Title>진행 중인 프로젝트</S.Title>
              <S.AddButton>+ 프로젝트 추가하기</S.AddButton>
            </S.Wrapper2>
            {/* 맵돌릴거임 */}
            <Project01 />
          </S.ProjectWrapper2>
          <S.ProjectWrapper2>
            <S.Wrapper2>
              <S.Title>지난 프로젝트</S.Title>
              <S.DateButton>최신순</S.DateButton>
            </S.Wrapper2>
            <Project02 />
          </S.ProjectWrapper2>
        </S.ProjectWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
