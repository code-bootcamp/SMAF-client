import * as S from "./userInfoCard.styles";

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
}

export default function UserInfoCard(props: IUserCardProps) {
  return (
    <S.Wrapper>
      <S.CardTopWrapper>
        <S.Image src={props.userImageSrc}></S.Image>
        <S.Name>{props.userName}</S.Name>
        <S.Email>{props.userEmail}</S.Email>
      </S.CardTopWrapper>
      <S.CardBottomWrapper>
        <S.CardBottomContents>
          <S.Icon src={props.src1}></S.Icon>
          <div>{props.title1}</div>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={props.src2}></S.Icon>
          <div>{props.title2}</div>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={props.src3}></S.Icon>
          <div>{props.title3}</div>
        </S.CardBottomContents>
      </S.CardBottomWrapper>
    </S.Wrapper>
  );
}
