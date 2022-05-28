import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import ProjectFileUploadUI from "./fileUpload01.presenter";
import { PROJECT_FILES_FETCH, PROJECT_FILE_UPLOAD } from "./fileUpload01.queries";
import { checkValidationFile } from "./fileUpload01.validation";

export default function ProjectFileUpload(props) {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);
    const [projectFileUpload] = useMutation(PROJECT_FILE_UPLOAD);
    const { data: fetchProjectFiles } = useQuery(PROJECT_FILES_FETCH, {
        variables: {
            projectId: String(router.query.projectId),
        },
    });

    // const [urls, setUrls] = useState<string[]>([]);
    const [urls, setUrls] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isProjectFile, setisProjectFile] = useState(true);
    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };
    const OpenList = () => {
        setisProjectFile((prev) => !prev);
    };

    const onClickFileUpload = () => {
        fileRef.current?.click();
    };

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = checkValidationFile(event.target.files?.[0]);
        if (!file) return;

        try {
            const result = await projectFileUpload({
                variables: { projectId: props.projectId },
            });
            setUrls(result.data.projectFileUpload);
            console.log(result, "파일결과값");
        } catch (error: any) {
            Modal.error({ content: error.message });
        }
    };

    return (
        <ProjectFileUploadUI
            fileRef={fileRef}
            urls={urls}
            onClickFileUpload={onClickFileUpload}
            onChangeFile={onChangeFile}
            onToggleModal={onToggleModal}
            OpenList={OpenList}
            isOpen={isOpen}
            isProjectFile={isProjectFile}
            fetchProjectFiles={fetchProjectFiles}
        />
    );
}
