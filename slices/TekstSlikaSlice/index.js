/**
 * @typedef {import("@prismicio/client").Content.TekstSlikaSlice} TekstSlikaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TekstSlikaSlice>} TekstSlikaProps
 * @param {TekstSlikaProps}
 */

import TekstSlika from "@/components/TekstSlika";
const TekstSlikaSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TekstSlika
        heading={slice.primary.heading}
        image={slice.primary.image}
        content={slice.primary.content}
        button_label={slice.primary.button_label}
        button_link={slice.primary.button_link}
      />
    </section>
  );
};

export default TekstSlikaSlice;
