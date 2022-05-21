import * as S from "./myPage.styles";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";
import { IMyPageUIProps } from "./myPage.types";
import { v4 as uuidv4 } from "uuid";
import Project01 from "../../commons/project/01/project01.container";
// import InfiniteScroll from "react-infinite-scroller";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false, // dots 사진 밑에 버튼 false 하면 사라진다
  // fade: true,
  // rows: 1,
  // infinite: false, // infinite 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복
  // speed: 500, // 콘텐츠를 넘어갈 때 속도
  slidesToShow: 3, // 한 화면에 보이는 콘텐츠 수
  // slidesToScroll: 3, // 한 번에 넘어가는 콘텐츠 수
};

export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <S.Wrapper>
      {/* leftWrapper */}
      <UserInfoCard {...props.data?.userData} />

      <S.RightWrapper>
        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>진행 중인 프로젝트</S.Title>
            <S.AddButton onClick={props.onClickMoveToNewProject}>
              + 프로젝트 추가하기
            </S.AddButton>
          </S.ProjectTitle>

          {/* map 돌림 */}
          <Slider {...settings}>
            {props.data?.fetchProjectsAll.map((el: any) => (
              <Project01 key={uuidv4()} el={el} />
            ))}
          </Slider>
        </S.InnerWrapper>

        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>지난 프로젝트</S.Title>
            <S.DateButton>최신순</S.DateButton>
          </S.ProjectTitle>
          {/* map 돌림 */}
          <Slider {...settings}>
            {props.data?.fetchProjectsAll.map((el: any) => (
              <Project01 key={uuidv4()} el={el} />
            ))}
          </Slider>
        </S.InnerWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
