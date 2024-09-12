import "../public/assets/css/style.css";
import "../public/assets/css/modal.css";
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Preloader from "../components/elements/Preloader";
import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      {!loading ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
