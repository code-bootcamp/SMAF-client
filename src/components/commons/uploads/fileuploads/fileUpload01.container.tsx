import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { Query, QueryFetchProjectFilesArgs } from "../../../../commons/types/generated/types";
import ProjectFileUploadUI from "./fileUpload01.presenter";
import {
    CREATE_PROJECT_FILE,
    PROJECT_FILES_FETCH,
    PROJECT_FILE_UPLOAD,
} from "./fileUpload01.queries";
import { checkValidationFile } from "./fileUpload01.validation";

export default function ProjectFileUpload(_props: any) {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);
    const [urls, setUrls] = useState("");

    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);

    const [projectFileUpload] = useMutation(PROJECT_FILE_UPLOAD);
    const [createProjectFile] = useMutation(CREATE_PROJECT_FILE);

    const { data: fetchProjectFiles } = useQuery<
        Pick<Query, "fetchProjectFiles">,
        QueryFetchProjectFilesArgs
    >(PROJECT_FILES_FETCH, {
        variables: {
            projectId: String(router.query.projectId),
        },
    });

    // 등록하기 모달
    const onClickExitSubmitModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = checkValidationFile(event.target.files?.[0]);
        if (!file) return;

        try {
            const result = await projectFileUpload({
                variables: { file },
            });
            setUrls(result.data.projectFileUpload);
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    const onClickFileUpload = () => {
        fileRef.current?.click();
    };

    const aa = urls.split("/");
    const fname = aa[aa.length - 1];

    const onClickSubmit = async () => {
        try {
            await createProjectFile({
                variables: {
                    filename: decodeURIComponent(fname),
                    fileURL: urls,
                    projectId: router.query.projectId,
                },
                refetchQueries: [
                    {
                        query: PROJECT_FILES_FETCH,
                        variables: {
                            projectId: router.query.projectId,
                        },
                    },
                ],
            });

            setUrls("");

            setModalContents("파일 등록이 완료되었습니다!");
            setAlertModal(true);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    return (
        <ProjectFileUploadUI
            fileRef={fileRef}
            urls={urls}
            onClickFileUpload={onClickFileUpload}
            onChangeFile={onChangeFile}
            onClickSubmit={onClickSubmit}
            fetchProjectFiles={fetchProjectFiles}
            alertModal={alertModal}
            modalContents={modalContents}
            errorAlertModal={errorAlertModal}
            onClickExitSubmitModal={onClickExitSubmitModal}
            onClickExitErrorModal={onClickExitErrorModal}
        />
    );
}
