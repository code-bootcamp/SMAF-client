import Dropdown01 from "../../dropdown/03/Dropdown04.container";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import Image02 from "../../images/02/image02";
import * as S from "./LayoutHeader.styles";

export default function HeaderUI(props: any) {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Icon src="/image/mainClick.png" onClick={props.onClickMain} />
        <S.Logo onClick={props.onClickMain}>SMAF</S.Logo>
      </S.LogoWrapper>

      <S.Search placeholder="프로젝트검색"></S.Search>

      <S.OptionWrapper>
        <S.Alarm src="/image/changealarm.png" alt="alarm" />
        <S.Qna src="/image/qna.png" alt="qna" onClick={props.onClickQna} />
        <Image02 src={props.data?.fetchLoginUser.userImageURL} />
        {props.data?.fetchLoginUser.userName === undefined ? (
          <S.Signup>회원가입</S.Signup>
        ) : (
          <S.WelcomeText>
            {props.data?.fetchLoginUser.userName} 님
          </S.WelcomeText>
        )}
        {props.data && <Dropdown01></Dropdown01>}
      </S.OptionWrapper>
    </S.Wrapper>
  );
}
