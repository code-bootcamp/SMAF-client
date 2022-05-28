import * as S from "./fileUpload01.styles";
import { v4 as uuidv4 } from "uuid";

export default function ProjectFileUploadUI(props: any) {
    // console.log(props.projectFileUrl);

    return (
        <S.Wrapper>
            <S.TitleBox>
                <S.Title>File</S.Title>
                <S.FileHiddenIcon
                    src="/detailPage/hiddenBtn.png"
                    onClick={props.OpenList}
                ></S.FileHiddenIcon>
            </S.TitleBox>
            {/* {props.isProjectFile ?   (
                <S.ProjectFiles>
                    {props.fetchProjectFiles?.map((el) => (
                        <div key={el.fileUrls}></div>
                    ))}
                </S.ProjectFiles>
            )} */}

            {/* {props..map((el: any) => (
                <div key={el.data}></div>
            ))} */}

            <S.AddFile>
                <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={props.onChangeFile}
                    ref={props.fileRef}
                />
                <S.ProjectFileAdd onClick={props.onClickFileUpload}>+</S.ProjectFileAdd>
                <S.FileName>파일추가</S.FileName>
            </S.AddFile>
        </S.Wrapper>
    );
}
