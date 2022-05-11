import styled from "@emotion/styled";

interface Iprops {
  isActive: boolean;
}
interface IButtonProps {
  isActive: boolean;
  title: string;
}
const Button = styled.button`
  width: 150px;
  background-color: ${(props: Iprops) =>
    props.isActive ? "skyblue" : "white"};
  border: none;
  box-shadow: 0px 4px 10px skyblue;
  color: ${(props: Iprops) => (props.isActive ? "white" : "skyblue")};
  font-weight: 700;
  border-radius: 20px;
  padding: 10px;

  cursor: pointer;
  :hover {
    background-color: skyblue;
    color: white;
  }
`;

export default function SkyBlueButton(props: IButtonProps) {
  return (
    <>
      <Button isActive={props.isActive}>{props.title}</Button>
    </>
  );
}
