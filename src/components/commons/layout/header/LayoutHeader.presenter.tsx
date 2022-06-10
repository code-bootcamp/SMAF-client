import Dropdown01 from "../../dropdown/03/Dropdown04.container";
import Image02 from "../../images/01/image02";
import * as S from "./LayoutHeader.styles";
import { Tooltip } from "antd";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function HeaderUI(props: ILayoutHeaderUIProps) {
    return (
        <S.Wrapper>
            <S.LogoWrapper>
                <S.Icon src="/image/mainClick.png" onClick={props.onClickMain} />
                <S.Logo onClick={props.onClickMain}>SMAF</S.Logo>
            </S.LogoWrapper>
      <S.Search placeholder="프로젝트검색"></S.Search>

      <S.OptionWrapper>
        <S.Alarm src="/image/changealarm.png" alt="alarm" />
        <Tooltip
          color="#FAC38B"
          overlayInnerStyle={{
            color: "#6D2F2F",
            fontWeight: "600",
            borderRadius: "12px",
          }}
          placement="bottom"
          title="문의하기"
        >
          <span>
            <S.Qna src="/image/qna.png" alt="qna" onClick={props.onClickQna} />
          </span>
        </Tooltip>
        {/* {props.data?.fetchLoginUser?.projectTicket ? : } */}
        <Tooltip
          color="#FAC38B"
          overlayInnerStyle={{
            color: "#6D2F2F",
            fontWeight: "600",
            borderRadius: "12px",
          }}
          placement="bottom"
          title={`무료체험이 ${
            props.data?.fetchLoginUser.projectTicket
              ? props.data?.fetchLoginUser.projectTicket
              : 0
          }회 남았습니다`}
        >
          <span>
            {props.data?.fetchLoginUser.userImageURL ? (
              <Image02 src={props.data?.fetchLoginUser.userImageURL} />
            ) : (
              <Image02 src={"/image/noprofile.jpg"} />
            )}
          </span>
        </Tooltip>
        {props.data?.fetchLoginUser.userName === undefined ? (
          <S.Signup onClick={props.onClickSignUp}>회원가입</S.Signup>
        ) : (
          <S.WelcomeText>
            {props.data?.fetchLoginUser.userName} 님
          </S.WelcomeText>
        )}
        {props.data && <Dropdown01 />}
      </S.OptionWrapper>
    </S.Wrapper>
  );
}
