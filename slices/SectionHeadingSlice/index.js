import SectionHeading from "@/components/SectionHeading";

/**
 * @typedef {import("@prismicio/client").Content.SectionHeadingSliceSlice} SectionHeadingSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionHeadingSliceSlice>} SectionHeadingSliceProps
 * @param {SectionHeadingSliceProps}
 */
const SectionHeadingSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionHeading
        heading={slice.primary.heading}
        subheading={slice.primary.subheading}
      />
    </section>
  );
};

export default SectionHeadingSlice;
