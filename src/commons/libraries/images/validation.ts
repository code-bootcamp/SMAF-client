export const checkFileValidation = (myfile?: File) => {
  if (!myfile?.size) {
    alert("파일이 없습니다!");
    return false;
  }

  if (myfile.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다(제한 : 5MB!!)");
    return false;
  }

  if (!myfile.type.includes("jepg") && !myfile.type.includes("png")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
