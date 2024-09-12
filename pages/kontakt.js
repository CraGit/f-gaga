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
                <p className="text-body-text color-gray-600">
                  udrugafgaga@gmail.com
                </p>
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
      {/* <section className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
              <h2 className="text-heading-1 color-gray-900 mb-20">
                Our Location
              </h2>
              <p className="text-body-lead-large color-gray-600 mt-20">
                In a professional context it often happens that private or
                <br className="d-lg-block d-none" />
                corporate clients order a publication to publish news.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-100">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons hover-up">
                <div className="item-icon">
                  <span className="icon-left">
                    <img
                      src="/assets/imgs/page/homepage2/icon-acquis.svg"
                      alt="Agon"
                    />
                  </span>
                  <h4 className="text-heading-4">Ofice</h4>
                  <p className="text-body-text color-gray-1100 mt-15">
                    205 North Michigan Avenue, Suite 810
                    <br />
                    Chicago, 60601, USA
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Email: contact@Evara.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons hover-up">
                <div className="item-icon">
                  <span className="icon-left">
                    <img
                      src="/assets/imgs/page/homepage2/icon-active.svg"
                      alt="Agon"
                    />
                  </span>
                  <h4 className="text-heading-4">Studio</h4>
                  <p className="text-body-text color-gray-1100 mt-15">
                    205 North Michigan Avenue, Suite 810
                    <br />
                    Chicago, 60601, USA
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Email: contact@Evara.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons hover-up">
                <div className="item-icon">
                  <span className="icon-left">
                    <img
                      src="/assets/imgs/page/homepage2/icon-retent.svg"
                      alt="Agon"
                    />
                  </span>
                  <h4 className="text-heading-4">Factory</h4>
                  <p className="text-body-text color-gray-1100 mt-15">
                    205 North Michigan Avenue, Suite 810
                    <br />
                    Chicago, 60601, USA
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Email: contact@Evara.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
