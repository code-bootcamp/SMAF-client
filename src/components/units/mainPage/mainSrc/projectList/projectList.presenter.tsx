import * as S from './projectList.styles.ts'

export default function ProjectListUI(){

    return(
        <S.Wrapper>
            <S.TitleBox>
                <S.Title>Project</S.Title>
                <S.Add>+</S.Add>
            </S.TitleBox>
            <S.ListBox>
                <S.Check src="/mainPageImages/check1.png" />
                <S.ProjectName>프로젝트 1</S.ProjectName>
            </S.ListBox>
            <S.ListBox>
                <S.Check src="/mainPageImages/check2.png" />
                <S.ProjectName>프로젝트 2</S.ProjectName>
            </S.ListBox>
            <S.ListBox>
                <S.Check src="/mainPageImages/check3.png" />
                <S.ProjectName>프로젝트 3</S.ProjectName>
            </S.ListBox>
        </S.Wrapper>
    )
}