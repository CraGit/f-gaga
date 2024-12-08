import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import Hero from "@/components/Hero";

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
      <section className="mt-50">
        <div className="container">
          <ol className="lista">
            {page.data.clanovi.map((item, index) => (
              <li key={index}>
                {/* <span>{index + 1}. </span> */}
                {item.clan}
              </li>
            ))}
          </ol>
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
  const page = await client.getSingle("clanovi");

  return {
    props: { page },
  };
}
