import * as S from "./project.styles";

export default function ProjectUI() {
    return(
        <S.Wrapper>
            <S.ImgBox>이미지영역</S.ImgBox>
            <S.TextBox>
                <S.Title>코카콜라 리디자인 프로젝트</S.Title>
                <div>코카콜라 브랜드 로고 디자인</div>
            </S.TextBox>
        </S.Wrapper>
    )
}