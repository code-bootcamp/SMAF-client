import * as S from "./myPage.styles";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";
import Project01 from "../../commons/project/01/project01.container";
import Project02 from "../../commons/project/02/project02.containter";

export default function MyPageUI() {
  return (
    <S.Wrapper>
      {/* leftWrapper */}
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

      <S.RightWrapper>
        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>진행 중인 프로젝트</S.Title>
            <S.AddButton>+ 프로젝트 추가하기</S.AddButton>
          </S.ProjectTitle>
          {/* 맵돌릴거임 */}
          <S.ProjectBox>
            <Project01 />
            <Project01 />
            <Project01 />
          </S.ProjectBox>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>지난 프로젝트</S.Title>
            <S.DateButton>최신순</S.DateButton>
          </S.ProjectTitle>
          <S.ProjectBox>
            <Project02 />
            <Project02 />
            <Project02 />
          </S.ProjectBox>
        </S.InnerWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
