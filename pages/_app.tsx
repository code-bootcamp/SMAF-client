import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

// hello
export default MyApp;
