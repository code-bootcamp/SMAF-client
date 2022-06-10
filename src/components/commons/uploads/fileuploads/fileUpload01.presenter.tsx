import Alert from "../../modal/alert/alert";
import ErrorAlert from "../../modal/errorModal/alert";
import * as S from "./fileUpload01.styles";
import { IProjectFileUploadUIProps } from "./fileUpload01.types";

export default function ProjectFileUploadUI(props: IProjectFileUploadUIProps) {
    return (
        <>
            {props.alertModal && (
                <Alert onClickExit={props.onClickExitSubmitModal} contents={props.modalContents} />
            )}
            {props.errorAlertModal && (
                <ErrorAlert
                    onClickExit={props.onClickExitErrorModal}
                    contents={props.modalContents}
                />
            )}

            <S.Wrapper>
                <S.TitleBox>
                    <S.Title>File</S.Title>
                    <S.FileHiddenIcon
                        src="/detailPage/hiddenBtn.png"
                        // onClick={props.OpenList}
                    ></S.FileHiddenIcon>
                </S.TitleBox>
                {props.fetchProjectFiles?.fetchProjectFiles.map((el: any) => (
                    <S.Files key={el.projectFileId}>
                        <S.Filename>
                            <div>
                                <S.FileImg src="/images/file.png" />
                                {el.filename}
                            </div>
                            <a type="#" href={el.fileURL} download={el.name}>
                                <S.DownImg src="/images/download.png" />
                            </a>
                        </S.Filename>
                    </S.Files>
                ))}

                {props.urls.length ? (
                    <S.SubmitBtnBox>
                        <S.SubmitBtn onClick={props.onClickSubmit}>등록하기</S.SubmitBtn>
                    </S.SubmitBtnBox>
                ) : (
                    <S.AddFile onClick={props.onClickFileUpload}>
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={props.onChangeFile}
                            ref={props.fileRef}
                        />
                        {/* <FileUploadModal fileRef={props.fileRef}/> */}
                        <S.ProjectFileAdd>+</S.ProjectFileAdd>
                        <S.FileName>파일추가</S.FileName>
                    </S.AddFile>
                )}
            </S.Wrapper>
        </>
    );
}
