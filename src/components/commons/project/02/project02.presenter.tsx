// import ImageCircle from "../../images/01";
import ImageCircle from "../../images/01/image01.container";
import * as S from "./project02.styles";

interface IUserProject {
  // projectImageSrc: string | undefined;
  projectName01: string | undefined;
  projectName02: string | undefined;
  projectName03: string | undefined;
}

export default function ProjectUI(props: IUserProject) {
  return (
    <S.Wrapper>
      <ImageCircle />
      <S.Title>{props.projectName01}Z세대 X 나이키 프로젝트</S.Title>
      <S.Title2>
        {props.projectName02}
        Z세대 트렌드를 반영한 나이키 Z 신발 기획 및 디자인 프로젝트
      </S.Title2>
      <S.Title3>
        {props.projectName03}
        36개의 일정/ 마감까지 37일
      </S.Title3>
    </S.Wrapper>
  );
}
