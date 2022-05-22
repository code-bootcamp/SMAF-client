import * as S from "./myPage.styles";
import styled from "@emotion/styled";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";
import { IMyPageUIProps } from "./myPage.types";
import { v4 as uuidv4 } from "uuid";
import Project01 from "../../commons/project/01/project01.container";
// import InfiniteScroll from "react-infinite-scroller";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project02 from "../../commons/project/02/project02.container";

const SliderWrapper = styled(Slider)`
  .slick-list {
    margin-right: -19px;
  }
  height: 24rem;
  width: 97rem;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
`;

const settings = {
  dots: false, // dots 사진 밑에 버튼 false 하면 사라진다
  rows: 1,
  speed: 500, // 콘텐츠를 넘어갈 때 속도
  slidesToShow: 3, // 한 화면에 보이는 콘텐츠 수
  slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 수
};

export default function MyPageUI(props: IMyPageUIProps) {
  console.log(props.userData);
  return (
    <S.Wrapper>
      {/* leftWrapper */}
      <UserInfoCard
        userData={props.userData}
        onClickMoveToPaymentList={props.onClickMoveToPaymentList}
      />

      <S.RightWrapper>
        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>진행 중인 프로젝트</S.Title>
            <S.AddButton onClick={props.onClickMoveToNewProject}>
              + 프로젝트 추가하기
            </S.AddButton>
          </S.ProjectTitle>

          {/* map 돌림 */}
          <SliderWrapper {...settings}>
            {props.activeData?.fetchActivatedProject.map((el: any) => (
              <Project01 key={uuidv4()} el={el} />
            ))}
          </SliderWrapper>
        </S.InnerWrapper>

        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>지난 프로젝트</S.Title>
            <S.DateButton>최신순</S.DateButton>
          </S.ProjectTitle>

          {/* map 돌림 */}
          {/* 데이터가 3개일때 캐러셀 적용  */}
          <SliderWrapper {...settings}>
            {props.inActiveData?.fetchInactivatedProject.map((el: any) => (
              <Project02 key={uuidv4()} el={el} />
            ))}
          </SliderWrapper>
        </S.InnerWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
