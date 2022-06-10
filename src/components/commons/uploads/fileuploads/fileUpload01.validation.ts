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

  return file;
}
