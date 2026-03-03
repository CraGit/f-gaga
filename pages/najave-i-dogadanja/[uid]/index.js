import Head from "next/head";
import { isFilled, asLink } from "@prismicio/client";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import Hero from "@/components/Hero";
import rtfComponents from "@/util/richText";
import ImageGallery from "@/components/ImageGallery";

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>

      <Hero heading={page.data.heading} />
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="row">
            <PrismicRichText
              field={page.data.content}
              components={rtfComponents}
            />
            {page.data.gallery && page.data.gallery.length > 0 ? (
              <div style={{ marginTop: 24 }}>
                <ImageGallery images={page.data.gallery} />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const page = await client.getByUID("najava_ili_dogadanje_single", params.uid);

  return {
    props: { page },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("najava_ili_dogadanje_single");

  return {
    paths: pages.map((page) => {
      return asLink(page);
    }),
    fallback: false,
  };
}
