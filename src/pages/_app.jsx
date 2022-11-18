import "../styles/globals.css";
import Layout from "@/components/Layout/layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  if (Component.Layout === "root") {
    return (
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    );
  }
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
