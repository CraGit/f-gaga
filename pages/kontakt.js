import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <section className="section-box">
        <div className="banner-hero banner-breadcrums">
          <div className="container text-center">
            <h1 className="text-heading-2 color-gray-1000 mb-20">
              {page.data.heading}
            </h1>
            <p className="text-body-text color-gray-500">
              {page.data.subheading}
            </p>
          </div>
        </div>
      </section>
      <section className="section-box">
        <div className="container mb-20 mt-140">
          <div className="bdrd-58 box-gray-100 icon-wave">
            <div className="row">
              <div className="col-lg-12 mb-60">
                <span className="text-body-capitalized text-uppercase">
                  Kontakt forma
                </span>
                <h2 className="text-heading-3 color-gray-900 mt-10">
                  Imate pitanje?
                </h2>
              </div>
              <div className="col-lg-4 mb-40">
                <h4 className="text-heading-6 color-gray-900 mb-10 mt-10">
                  F-GAGA
                </h4>
                <p className="text-body-text color-gray-600">
                  Matice hrvatske 15
                  <br />
                  21000 Split
                </p>
                {/* <p className="text-body-text color-gray-600">(239) 555-0108</p> */}
                <p className="text-body-text color-gray-600">info@f-gaga.hr</p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" placeholder="Vaše ime" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Vaše prezime"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" placeholder="Vaš email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Vaš telefon"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Vaša poruka"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-15">
                    <button
                      className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                      type="submit"
                    >
                      Pošalji poruku
                    </button>
                    <br className="d-lg-none d-block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-box">
        <div className="container mb-20 mt-60 w-full">
          <div className="w-full leading-[0] border-0 mt-6">
            <iframe
              src={page.data.google_map_embed}
              allowFullScreen
              style={{
                border: 0,
                width: "100%",
                height: "450px",
                borderRadius: "40px",
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  // The query fetches the page's data based on the current URL.
  const page = await client.getSingle("kontakt");

  return {
    props: { page },
  };
}
