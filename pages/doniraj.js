import Head from "next/head";
import { isFilled } from "@prismicio/client";

import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Hero from "@/components/Hero";
import rtfComponents from "@/util/richText";

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
  const page = await client.getSingle("doniraj");

  return {
    props: { page },
  };
}
