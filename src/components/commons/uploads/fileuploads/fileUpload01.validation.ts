import { Modal } from "antd";

export function checkValidationFile(file: File | undefined) {
    if (!file?.size) {
        Modal.error({ content: "파일이 없습니다." });
        return false;
    }
    if (file.size > 1 * 1024 * 1024) {
        Modal.error({ content: "파일이 너무 큽니다.(제한: 1MB)" });
        return false;
    }
    // if (
    //     !file.type.includes("png") &&
    //     !file.type.includes("jpeg") &&
    //     !file.type.includes("doc") &&
    //     !file.type.includes("hwp") &&
    //     !file.type.includes("txt")
    // )
    // {
    //     Modal.error({
    //         content: "파일 확장자가 올바르지 않습니다.(png, jpeg, doc, hwp , txt) 가능",
    //     });
    //     return false;
    // }
    return file;
}
