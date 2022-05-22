import { card } from "../project/01/project01.styles";
import * as S from "./userInfoCard.styles";

// interface IUserCardProps {
//   userEmail: string | undefined;
//   userName: string | undefined;
//   userImageSrc: string | undefined;
//   src1: string | undefined;
//   src2: string | undefined;
//   src3: string | undefined;
//   title1: string | undefined;
//   title2: string | undefined;
//   title3: string | undefined;
// }

interface IUserCardProps {
  data?: any;
  userData?: any;
  onClickMoveToPaymentList: () => void;
}

export default function UserInfoCard(props: IUserCardProps) {
  console.log("최종", props.userData?.fetchLoginUser.userName);
  return (
    <S.Wrapper>
      <S.CardTopWrapper>
        <S.Image></S.Image>
        <S.Name>{props.userData?.fetchLoginUser.userName}</S.Name>
        <S.Email>{props.userData?.fetchLoginUser.email}</S.Email>
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
