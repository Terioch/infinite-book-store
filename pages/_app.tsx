import { AuthProvider } from "../auth/authContext";
import Layout from "../components/Layout";
import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
}

export default MyApp
