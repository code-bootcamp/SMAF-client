import styled from "@emotion/styled";
import { ReactNode } from "react";
import Layoutheader from "./header";
import { useRouter } from "next/router";
import LayoutFooterBottom from "./footer/footerBottom";
import LayoutFooterTop from "./footer/footerTop";

const Body = styled.div`
    height: 800px;
`;
const BodyWrapper = styled.div`
    display: flex;
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
