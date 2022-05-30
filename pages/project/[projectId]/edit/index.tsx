import ProjectSign from "../../../../src/components/units/projectSignPage/projectSignPage.container";

export default function ProjectEditPage(props: any) {
    return <ProjectSign isEdit={true} data={props.data} />;
}
