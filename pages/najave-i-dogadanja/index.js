import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";
import Hero from "@/components/Hero";
import NajaveCardList from "@/components/NajaveCardList";

export default function Page({ page, najave }) {
  console.log(najave);
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <Hero heading={page.data.heading} />
      <NajaveCardList najave={najave} />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  // The query fetches the page's data based on the current URL.
  const page = await client.getSingle("najave_i_dogadanja");
  const najave = await client.getAllByType("najava_ili_dogadanje_single");

  return {
    props: { page, najave },
  };
}
