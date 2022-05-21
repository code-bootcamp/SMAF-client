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
  userEmail: string | undefined;
  userName: string | undefined;
  userImageSrc: string | undefined;
  src1: string | undefined;
  src2: string | undefined;
  src3: string | undefined;
  title1: string | undefined;
  title2: string | undefined;
  title3: string | undefined;
  data: any;
  userData?: any;
}

export default function UserInfoCard(props: IUserCardProps) {
  return (
    <S.Wrapper>
      <S.CardTopWrapper>
        <S.Image src={props.userImageSrc}></S.Image>
        <S.Name>{props.data?.userData.userName}</S.Name>
        <S.Email>{props.userEmail}aaa@aaa.com</S.Email>
      </S.CardTopWrapper>

      <S.CardBottomWrapper>
        <S.CardBottomContents>
          <S.Icon src={"images/card.png"}></S.Icon>
          <div> 결제내역</div>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={props.src2}></S.Icon>
          <div>{props.title2}</div>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={props.src3}></S.Icon>
          <div>설정</div>
        </S.CardBottomContents>
      </S.CardBottomWrapper>
    </S.Wrapper>
  );
}
