import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta name="theme-color" content="#C4B28A" />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
