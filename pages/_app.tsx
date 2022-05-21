import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo/index";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ApolloSetting>
                <Global styles={globalStyles} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloSetting>
        </RecoilRoot>
    );
}

export default MyApp;
