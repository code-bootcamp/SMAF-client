// import { card } from "../project/01/project01.styles";
import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "./userInfoCard02.queris";
import * as S from "./userInfoCard02.styles";

interface IUserCardProps {
  data?: any;
  onClickMoveToMyPage: () => void;
}

export default function UserInfoCard02(props: IUserCardProps) {
  const { data } = useQuery(FETCH_LOGIN_USER);
  console.log("프로필사진", data?.fetchLoginUser.userImageURL); // undefined

  return (
    <S.Wrapper>
      <S.CardTopWrapper>
        <S.Image src={data?.fetchLoginUser.userImageURL}></S.Image>
        <S.Name>{data?.fetchLoginUser.userName}</S.Name>
        <S.Email>{data?.fetchLoginUser.email}</S.Email>
      </S.CardTopWrapper>

      <S.CardBottomWrapper>
        <S.CardBottomContents>
          <S.Icon2 src={"images/profile.png"}></S.Icon2>
          <S.Title onClick={props.onClickMoveToMyPage}>마이페이지</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/profile.png"}></S.Icon>
          <S.Title>프로필 편집</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/coupon.png"}></S.Icon>
          <S.Title>이용권구매하기</S.Title>
        </S.CardBottomContents>
        <S.CardBottomContents>
          <S.Icon src={"images/setting.png"}></S.Icon>
          <S.Title>설정</S.Title>
        </S.CardBottomContents>
      </S.CardBottomWrapper>
    </S.Wrapper>
  );
}
