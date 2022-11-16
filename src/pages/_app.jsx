import "../styles/globals.css";
import Layout from "@/components/Layout/layout";

function MyApp({ Component, pageProps }) {
  if (Component.Layout === "root") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
