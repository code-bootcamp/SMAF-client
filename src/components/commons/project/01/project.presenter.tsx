import * as S from "./project01.styles";


interface IUserProject {
    projectImageSrc: string | undefined;
    projectName: string | undefined;
    projectName2: string | undefined;
}

export default function ProjectUI(props:IUserProject) {
    return(
        <S.Wrapper>
            <S.ImgBox src={props.projectImageSrc}></S.ImgBox>
            <S.TextBox>
                <S.Title>{props.projectName}코카콜라 리디자인 프로젝트</S.Title>
                <S.SubTitle>{props.projectName2}코카콜라 브랜드 로고 디자인</S.SubTitle>
            </S.TextBox>
        </S.Wrapper>
    )
} 