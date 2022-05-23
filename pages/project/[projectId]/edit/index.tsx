import ProjectSign from "../../../../src/components/units/projectSignPage/projectSignPage.container";

export default function ProjectEditPage(props) {

  return <ProjectSign isEdit={true} data={props.data} />;
}
