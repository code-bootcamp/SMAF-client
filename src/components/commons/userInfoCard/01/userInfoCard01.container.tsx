// import { card } from "../project/01/project01.styles";
import { useQuery } from "@apollo/client";
import { useRef } from "react";
import PaymentModal from "../../modal/paymentModal/paymentModal.container";
import { FETCH_LOGIN_USER } from "./userInfoCard01.queris";
import * as S from "./userInfoCard01.styles";

interface IUserCardProps {
  data?: any;
  onClickMoveToPaymentList: () => void;
  onClickMoveToMyPage: () => void;
}

export default function UserInfoCard01(props: IUserCardProps) {
  // const { data } = useQuery(FETCH_LOGIN_USER);
  const fileRef = useRef<HTMLInputElement>(null);

  // console.log("유저정보컴온📌", data);
  console.log("👺👺👺 3번 ", props.data);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <S.Wrapper>
      <S.CardTopWrapper>
        <S.Image src={props.data?.fetchLoginUser.userImageURL}></S.Image>
        <S.Name>{props.data?.fetchLoginUser.userName}</S.Name>
        <S.Email>{props.data?.fetchLoginUser.email}</S.Email>
      </S.CardTopWrapper>

      <S.CardBottomWrapper>
        <S.CardBottomContents>
          <S.Icon src={"images/pen.png"}></S.Icon>
          <S.Title onClick={props.onClickMoveToMyPage}>마이페이지</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/profile.png"}></S.Icon>
          <S.Title>프로필 편집</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon2 src={"images/card.png"}></S.Icon2>
          <S.Title onClick={props.onClickMoveToPaymentList}>결제내역</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/coupon.png"}></S.Icon>
          <S.Title onClick={onClickUpload}>이용권구매하기</S.Title>
          <PaymentModal fileRef={fileRef} />
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/setting.png"}></S.Icon>
          <S.Title>설정</S.Title>
        </S.CardBottomContents>
      </S.CardBottomWrapper>
    </S.Wrapper>
  );
}
