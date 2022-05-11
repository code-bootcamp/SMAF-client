import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

const Input = styled.input`
  border: none;
  box-shadow: 0px 4px 15px skyblue;
  color: skyblue;
  margin: 5px 0px;
  border-radius: 20px;
  padding: 5px 10px;
`;
export default function skyBlueShadowInput(props: IInputProps) {
  return (
    <>
      <Input type={props.type} {...props.register} />
    </>
  );
}
