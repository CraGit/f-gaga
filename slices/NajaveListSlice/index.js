/**
 * @typedef {import("@prismicio/client").Content.NajaveListSliceSlice} NajaveListSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NajaveListSliceSlice>} NajaveListSliceProps
 * @param {NajaveListSliceProps}
 */

import NajaveCardList from "@/components/NajaveCardList";
import Link from "next/link";
import Heading from "../Heading";
import SectionHeading from "@/components/SectionHeading";

const NajaveListSlice = ({ slice, context }) => {
  const { najavaData } = context;
  console.log(context);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mt-16">
        <SectionHeading
          heading={slice.primary.heading}
          subheading={slice.primary.overheading}
        />
        {/* <div className="row">
          <div className="col-lg-8">
            <h3 className="text-heading-1">{slice.primary.heading}</h3>
            <p className="text-body-lead-large color-gray-600">
              {slice.primary.overheading}
            </p>
          </div> */}

        {/* <div className="col-lg-4 text-lg-end text-start pt-30">
            <Link
              href="/najave-i-dogadanja"
              className="btn btn-black icon-arrow-right-white"
            >
              Vidi sve
            </Link>
          </div> */}
        {/* </div> */}
      </div>
      <NajaveCardList najave={najavaData} />
    </section>
  );
};

export default NajaveListSlice;
