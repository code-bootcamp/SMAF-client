import * as S from "./myPage.styles";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { IMyPageUIProps } from "./myPage.types";
import { ProjectParticipant } from "../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserInfoCard01 from "../../commons/userInfoCard/01/userInfoCard01.container";
import PaymentList from "../paymentList/paymentListMenu.contatiner";
import PaymentModal from "../../commons/modal/paymentModal/paymentModal.container";
import Project01 from "../../commons/project/01/project01.container";
import Project02 from "../../commons/project/02/project02.container";
import Project03 from "../../commons/project/03/project03.container";
import Project04 from "../../commons/project/04/project04.container";
import Project05 from "../../commons/project/05/project05.container";
import Project06 from "../../commons/project/06/project06.container";

const SliderWrapper = styled(Slider)`
  height: 24rem;
  width: 97rem;
  @media ${breakPoints.mobile} {
    width: 36rem;
    display: none;
  }
  .slick-list {
    height: 24rem;
    width: 97rem;
    padding-left: 5px;
    @media ${breakPoints.mobile} {
      width: 36rem;
    }
  }
  .slick-track {
    margin: 0;
    @media ${breakPoints.mobile} {
      margin-left: 20px;
      padding-right: 20px;
    }
  }
`;

export default function MyPageUI(props: IMyPageUIProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const OpenMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const showMaxCnt = 3;
  const arr = Array.from(new Array(3));

  const settings = {
    dots: false,
    infinite: arr.length > showMaxCnt,
    rows: 1,
    speed: 500,
    slidesToShow: showMaxCnt,
    slidesToScroll: showMaxCnt,
  };

  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <UserInfoCard01
          isOpen={isOpen}
          onClickMoveToPaymentList={props.onClickMoveToPaymentList}
          onClickMoveToMyPage={props.onClickMoveToMyPage}
          onClickMoveToPasswordChange={props.onClickMoveToPasswordChange}
          data={props.userData}
          OpenMenu={OpenMenu}
        />
        {props.visible ? (
          <S.RightWrapper isOpen={isOpen}>
            <S.InnerWrapper>
              <S.ProjectTitle>
                <S.Title>진행 중인 프로젝트</S.Title>
                {props.userData !== undefined &&
                !(props.userData?.fetchLoginUser.projectTicket <= 0) ? (
                  <S.AddButton onClick={props.onClickMoveToNewProject}>
                    프로젝트 추가하기
                  </S.AddButton>
                ) : (
                  <>
                    <S.AddButton onClick={onClickUpload}>
                      프로젝트 추가하기
                    </S.AddButton>
                    <PaymentModal fileRef={fileRef} />
                  </>
                )}
              </S.ProjectTitle>

              {props.activeData?.fetchActivatedProject.length ? (
                <SliderWrapper {...settings}>
                  {/* 진행완료된프로젝트 */}
                  {props.activeData?.fetchActivatedProject.map(
                    (el: ProjectParticipant) => (
                      <Project01 key={uuidv4()} el={el} />
                    )
                  )}
                </SliderWrapper>
              ) : (
                <Project03 />
              )}

              {/* --------360px-------- */}
              {props.activeData?.fetchActivatedProject.length ? (
                <S.SliderFake>
                  {props.activeData?.fetchActivatedProject.map(
                    (el: ProjectParticipant) => (
                      <Project04 key={el.project.projectId} el={el} />
                    )
                  )}
                </S.SliderFake>
              ) : (
                <Project06 />
              )}
              {/* --------360px-------- */}
            </S.InnerWrapper>

            <S.InnerWrapper>
              <S.ProjectTitle>
                <S.Title>지난 프로젝트</S.Title>
                <S.DateButton>
                  최신순 <img src="/images/more.png"></img>
                </S.DateButton>
              </S.ProjectTitle>

              {props.inActiveData?.fetchInactivatedProject.length ? (
                <SliderWrapper {...settings}>
                  {/* 진행완료된프로젝트 */}
                  {props.inActiveData?.fetchInactivatedProject.map(
                    (el: ProjectParticipant) => (
                      <Project02 key={uuidv4()} el={el} />
                    )
                  )}
                </SliderWrapper>
              ) : (
                <Project03 />
              )}
              {/* --------360px-------- */}
              {props.inActiveData?.fetchInactivatedProject.length ? (
                <S.SliderFake>
                  {props.inActiveData?.fetchInactivatedProject.map(
                    (el: ProjectParticipant) => (
                      <Project05 key={el.project.projectId} el={el} />
                    )
                  )}
                </S.SliderFake>
              ) : (
                <Project06 />
              )}
              {/* --------360px-------- */}
            </S.InnerWrapper>
          </S.RightWrapper>
        ) : (
          <PaymentList isOpen={false} />
        )}
      </S.Wrapper>
    </>
  );
}
