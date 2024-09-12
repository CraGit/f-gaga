import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Hero from "@/components/Hero";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <Hero heading={page.data.heading} subheading={page.data.subheading} />
      <section className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12">
              <div className="text-start mb-25">
                <span className="tag-1 bg-6 color-green-900">
                  {page.data.overtitle}
                </span>
              </div>
              <h2 className="text-heading-2 color-gray-900 mb-50">
                {page.data.small_heading}
              </h2>
            </div>
          </div>
        </div>
        <div className="container mt-20">
          <div className="row">
            {page.data.documents.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <PrismicNextLink field={item.file}>
                      <span className="icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="60"
                          height="60"
                          viewBox="0 0 64 64"
                        >
                          <ellipse
                            cx="32"
                            cy="61"
                            opacity=".3"
                            rx="20.125"
                            ry="3"
                          ></ellipse>
                          <path
                            fill="#37d0ee"
                            d="M48,52H17c-2.209,0-4-1.791-4-4V8c0-2.209,1.791-4,4-4h21.311c1.06,0,2.077,0.421,2.827,1.17	l9.689,9.68C51.578,15.601,52,16.619,52,17.68V48C52,50.209,50.209,52,48,52z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M13,8v18c2.762,0,5-2.238,5-5V9.652c0-0.42,0.264-0.795,0.66-0.934 C20.605,8.033,22,6.18,22,4h-5C14.791,4,13,5.791,13,8z"
                            opacity=".3"
                          ></path>
                          <path
                            d="M52,48V25c-2.762,0-5,2.238-5,5v16c0,0.552-0.448,1-1,1h-9c-2.762,0-5,2.238-5,5h16 C50.209,52,52,50.209,52,48z"
                            opacity=".15"
                          ></path>
                          <line
                            x1="16.5"
                            x2="16.5"
                            y1="9.5"
                            y2="16.5"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="3"
                          ></line>
                          <path
                            fill="#008aa9"
                            d="M50.827,14.851l-9.689-9.68C40.806,4.839,40.417,4.584,40,4.389V12c0,2.209,1.791,4,4,4h7.616	C51.42,15.579,51.162,15.185,50.827,14.851z"
                          ></path>
                          <path
                            fill="#008aa9"
                            d="M25,24h15c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2H25c-1.105,0-2,0.895-2,2v0	C23,23.105,23.895,24,25,24z"
                          ></path>
                          <path
                            fill="#008aa9"
                            d="M25,32h15c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2H25c-1.105,0-2,0.895-2,2v0	C23,31.105,23.895,32,25,32z"
                          ></path>
                          <path
                            fill="#008aa9"
                            d="M25,40h15c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2H25c-1.105,0-2,0.895-2,2v0	C23,39.105,23.895,40,25,40z"
                          ></path>
                        </svg>
                      </span>

                      <h4 className="text-heading-6">{item.document_title}</h4>

                      <p className="text-body-text color-gray-600 mt-15">
                        {item.document_description}
                      </p>
                    </PrismicNextLink>
                  </div>
                </div>
              </div>
            ))}
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
  const page = await client.getSingle("dokumenti");

  return {
    props: { page },
  };
}
