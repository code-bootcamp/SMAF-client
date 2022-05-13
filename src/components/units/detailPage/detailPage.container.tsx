import ProjectDetailPageHTML from "./detailPage.presenter";
import { useState } from "react";

export default function ProjectDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const OpenFileList = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return <ProjectDetailPageHTML isOpen={isOpen} OpenFileList={OpenFileList} />;
}
