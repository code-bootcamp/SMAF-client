import * as S from "./myPage.styles";
import styled from "@emotion/styled";
import { IMyPageUIProps } from "./myPage.types";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project01 from "../../commons/project/01/project01.container";
import Project02 from "../../commons/project/02/project02.container";
import Project03 from "../../commons/project/03/project03.container";
import UserInfoCard01 from "../../commons/userInfoCard/01/userInfoCard01.container";
import PaymentList from "../paymentList/paymentListMenu.contatiner";

const SliderWrapper = styled(Slider)`
  .slick-list {
    margin-right: -19px;
  }
  height: 24rem;
  width: 97rem;
`;

export default function MyPageUI(props: IMyPageUIProps) {
  const showMaxCnt = 3;
  const arr = Array.from(new Array(3));
  const settings = {
    dots: false, // dots 사진 밑에 버튼 false 하면 사라진다
    infinite: arr.length > showMaxCnt,
    rows: 1,
    speed: 500, // 콘텐츠를 넘어갈 때 속도
    slidesToShow: showMaxCnt, // 한 화면에 보이는 콘텐츠 수
    slidesToScroll: showMaxCnt, // 한 번에 넘어가는 콘텐츠 수
  };
  // console.log("👺👺 2번", props.userData?.fetchLoginUser);
  // console.log("진행중인프로젝트2", props.activeData?.fetchActivatedProject);
  // console.log("지난프로젝트2", props.inActiveData?.fetchInactivatedProject);

  return (
    <>
      <S.Wrapper>
        <UserInfoCard01
          onClickMoveToPaymentList={props.onClickMoveToPaymentList}
          onClickMoveToMyPage={props.onClickMoveToMyPage}
          data={props.userData}
        />
        {props.visible ? (
          <S.RightWrapper>
            <S.InnerWrapper>
              <S.ProjectTitle>
                <S.Title>진행 중인 프로젝트</S.Title>
                <S.AddButton onClick={props.onClickMoveToNewProject}>
                  + 프로젝트 추가하기
                </S.AddButton>
              </S.ProjectTitle>
              {props.activeData?.fetchActivatedProject ? (
                <SliderWrapper {...settings}>
                  {/* 진행중인프로젝트 */}
                  {props.activeData?.fetchActivatedProject.map((el: any) => (
                    <Project01
                      key={uuidv4()}
                      el={el}
                      onClick={props.onClickMoveToProjectDetail}
                    />
                  ))}
                </SliderWrapper>
              ) : (
                <Project03 />
              )}
            </S.InnerWrapper>
            <S.InnerWrapper>
              <S.ProjectTitle>
                <S.Title>지난 프로젝트</S.Title>
                <S.DateButton>최신순</S.DateButton>
              </S.ProjectTitle>
              {props.inActiveData?.fetchInactivatedProject ? (
                <SliderWrapper {...settings}>
                  {/* 진행완료된프로젝트 */}
                  {props.inActiveData?.fetchInactivatedProject.map(
                    (el: any) => (
                      <Project02 key={uuidv4()} el={el} />
                    )
                  )}
                </SliderWrapper>
              ) : (
                <Project03 />
              )}
            </S.InnerWrapper>
          </S.RightWrapper>
        ) : (
          <PaymentList />
        )}
      </S.Wrapper>
    </>
  );
}
