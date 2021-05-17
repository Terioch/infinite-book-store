import { AuthProvider } from "../contexts/authContext";
import { ScreenSizeProvider } from "../contexts/screenSizeContext";
import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<ScreenSizeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ScreenSizeProvider>
		</AuthProvider>
	);
}

export default MyApp;
