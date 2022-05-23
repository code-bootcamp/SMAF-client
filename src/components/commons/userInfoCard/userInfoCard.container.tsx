// import { card } from "../project/01/project01.styles";
import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "./userInfoCard.queris";
import * as S from "./userInfoCard.styles";

interface IUserCardProps {
  data?: any;
  onClickMoveToPaymentList: () => void;
}

export default function UserInfoCard(props: IUserCardProps) {
  const { data } = useQuery(FETCH_LOGIN_USER);

  return (
    <S.Wrapper>
      <S.CardTopWrapper>
        <S.Image></S.Image>
        <S.Name>{data?.fetchLoginUser.userName}</S.Name>
        <S.Email>{data?.fetchLoginUser.email}</S.Email>
      </S.CardTopWrapper>

      <S.CardBottomWrapper>
        <S.CardBottomContents>
          <S.Icon2 src={"images/card.png"}></S.Icon2>
          <S.Title onClick={props.onClickMoveToPaymentList}> 결제내역</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/profile.png"}></S.Icon>
          <S.Title>프로필 편집</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/setting.png"}></S.Icon>
          <S.Title>설정</S.Title>
        </S.CardBottomContents>
      </S.CardBottomWrapper>
    </S.Wrapper>
  );
}
