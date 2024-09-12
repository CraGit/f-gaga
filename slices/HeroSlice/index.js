import Hero from "../../components/Hero";

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param {HeroSliceProps}
 */
const HeroSlice = ({ slice }) => {
  console.log(slice.primary);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero {...slice.primary} />
    </section>
  );
};

export default HeroSlice;
