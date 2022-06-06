import { useRef } from "react";
import { User } from "../../../../commons/types/generated/types";
import PaymentModal from "../../modal/paymentModal/paymentModal.container";
import * as S from "./userInfoCard01.styles";

interface IUserCardProps {
  data?: { fetchLoginUser: User };
  isOpen: boolean;
  OpenMenu: () => void;
  onClickMoveToPaymentList: () => void;
  onClickMoveToMyPage: () => void;
  onClickMoveToPasswordChange: () => void;
}

export default function UserInfoCard01(props: IUserCardProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <S.Wrapper>
      <S.CardTopWrapper>
        <S.Image src={props.data?.fetchLoginUser.userImageURL}></S.Image>
        <S.Name>{props.data?.fetchLoginUser.userName}</S.Name>
        <S.Email>{props.data?.fetchLoginUser.email}</S.Email>
        <S.Ticket>
          <S.Coupon src="/images/ticket.png"></S.Coupon>남은 티켓 수{" "}
          {props.data?.fetchLoginUser.projectTicket} 개
        </S.Ticket>
      </S.CardTopWrapper>
      <S.MenuBtn onClick={props.OpenMenu}>메뉴</S.MenuBtn>
      <S.CardBottomWrapper isOpen={props.isOpen}>
        <S.CardBottomContents onClick={props.OpenMenu}>
          <S.Icon src={"/images/pen.png"}></S.Icon>
          <S.Title onClick={props.onClickMoveToMyPage}>마이페이지</S.Title>
        </S.CardBottomContents>
        <S.Line></S.Line>
        <S.CardBottomContents onClick={props.OpenMenu}>
          <S.Icon2 src={"/images/card.png"}></S.Icon2>
          <S.Title onClick={props.onClickMoveToPaymentList}>결제내역</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"/images/coupon.png"}></S.Icon>
          <S.Title onClick={onClickUpload}>이용권구매하기</S.Title>
          <PaymentModal fileRef={fileRef} />
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"/images/save.png"}></S.Icon>
          <S.Title>저장한 파일</S.Title>
        </S.CardBottomContents>
        <S.Line></S.Line>
        <S.CardBottomContents>
          <S.Icon src={"/images/profile.png"}></S.Icon>
          <S.Title>프로필 편집</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"/images/setting.png"}></S.Icon>
          <S.Title onClick={props.onClickMoveToPasswordChange}>설정</S.Title>
        </S.CardBottomContents>
      </S.CardBottomWrapper>
    </S.Wrapper>
  );
}
