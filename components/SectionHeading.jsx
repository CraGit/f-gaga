import React from "react";

export default function SectionHeading({ heading, subheading }) {
  return (
    <section className="section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
            <h2 className="text-heading-1 color-gray-900">{heading}</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {subheading}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
    </section>
  );
}
