import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta name="theme-color" content="#C4B28A" />
      </Head>
      <body>
        <Layout>
          <Main />

          <NextScript />
          {/* <script async src="assets/js/app.js" /> */}
        </Layout>
      </body>
    </Html>
  );
}
