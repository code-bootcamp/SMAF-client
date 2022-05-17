import Image02 from "../../images/02/image02";
import * as S from "./LayoutHeader.styles";

export default function HeaderUI() {
  return (
    <S.Wrapper>
      <S.InnerWrap>
        <S.LogoWrapper>
          <S.Icon src="/image/mainClick.png" />
          <S.Logo>SMAF</S.Logo>
        </S.LogoWrapper>

        <S.Search placeholder="프로젝트검색"></S.Search>

        <S.OptionWrapper>
          <S.Alarm src="/image/changealarm.png" alt="alarm" />
          <S.Qna src="/image/qna.png" alt="qna" />
          <Image02 src={undefined} />
          <S.Signup>회원가입</S.Signup>
        </S.OptionWrapper>
      </S.InnerWrap>
    </S.Wrapper>
  );
}
