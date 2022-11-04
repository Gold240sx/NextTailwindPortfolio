import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
//import { useStateContext } from '../context/ContextProvider';
import { ContextProvider } from "../context/ContextProvider";

import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	);
}
