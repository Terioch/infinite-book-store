import { AuthProvider } from "../contexts/authContext";
import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	);
}

export default MyApp;
