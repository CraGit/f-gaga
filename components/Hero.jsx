import React from "react";
import { PrismicNextLink } from "@prismicio/next";

export default function Hero({
  heading,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  secondaryButtonLabel,
  secondaryButtonLink,
}) {
  return (
    <section className="section-box">
      <div className="banner-hero banner-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="text-display-2">{heading}</h1>
              {/* <h1 className="text-display-2">
                Udruga
                <span className="color-green-900"> studenata </span>
                FGAG-a Split
              </h1> */}
              <p className="text-body-lead-large color-gray-950 mt-40 pr-40">
                {subtitle}
              </p>
              {primaryButtonLabel && secondaryButtonLabel && (
                <div className="mt-40">
                  <PrismicNextLink
                    field={primaryButtonLink}
                    className="btn btn-black icon-arrow-right-white"
                  >
                    {primaryButtonLabel}
                  </PrismicNextLink>
                  {/* <PrismicNextLink
                    field={secondaryButtonLink}
                    className="btn btn-link icon-arrow-right color-gray-900 text-heading-6"
                  >
                    {secondaryButtonLabel}
                  </PrismicNextLink> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
