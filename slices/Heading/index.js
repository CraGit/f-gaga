/**
 * @typedef {import("@prismicio/client").Content.HeadingSlice} HeadingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingSlice>} HeadingProps
 * @param {HeadingProps}
 */
const Heading = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for heading (variation: {slice.variation}) Slices
    </section>
  );
};

export default Heading;
