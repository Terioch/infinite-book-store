import { AuthProvider } from "../contexts/authContext";
import { ScreenSizeProvider } from "../contexts/screenSizeContext";
import { CheckoutDisabledProvider } from "../contexts/checkoutDisabledContext";
import Layout from "../components/Layout";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<ScreenSizeProvider>
				<CheckoutDisabledProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CheckoutDisabledProvider>
			</ScreenSizeProvider>
		</AuthProvider>
	);
}

export default MyApp;
