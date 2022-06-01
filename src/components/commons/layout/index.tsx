import styled from "@emotion/styled";
import Layoutheader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayutFooter.container";
import { ReactNode } from "react";

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ededed;
`;
const BodyWrapper = styled.div`
  display: flex;
  background-color: #ededed;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Layoutheader />
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <footer>
        <LayoutFooter />
      </footer>
    </>
  );
}
