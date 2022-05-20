import * as S from "./myPage.styles";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";
import Project01 from "../../commons/project/01/project01.container";
import { IMyPageUIProps } from "./myPage.types";

export default function MyPageUI(props: IMyPageUIProps) {
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
            <S.AddButton onClick={props.onClickMoveToNewProject}>
              + 프로젝트 추가하기
            </S.AddButton>
          </S.ProjectTitle>
          {/* 맵돌릴거임 하드코딩함 */}
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
            <Project01 />
            <Project01 />
            <Project01 />
          </S.ProjectBox>
        </S.InnerWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
