import styled from "@emotion/styled";
import { ReactNode } from "react";
import Layoutheader from "./header/LayoutHeader.container";
import { useRouter } from "next/router";
import LayoutFooterBottom from "./footer/footerBottom/LayutFooterBottom.container";
import LayoutFooterTop from "./footer/footerTop/LayoutFooterTop.container";

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
    const router = useRouter();
    console.log(router);

    return (
        <>
            <Layoutheader />
            <BodyWrapper>
                <Body>{props.children}</Body>
            </BodyWrapper>
            <LayoutFooterTop />
            <LayoutFooterBottom />
        </>
    );
}
