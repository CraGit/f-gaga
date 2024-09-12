import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function TekstSlika({
  heading,
  image,
  content,
  button_label,
  button_link,
}) {
  return (
    <section className="section-box">
      <div className="container">
        <div className="tab-content">
          <diva>
            <div className="bg-2 panel-box mt-50">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="box-optimized">
                    <h3 className="text-heading-2">{heading}</h3>
                    <p className="text-body-excerpt mt-30">{content}</p>
                    <div className="mt-40">
                      <PrismicNextLink
                        field={button_link}
                        className="btn btn-default btn-white icon-arrow-right"
                      >
                        {button_label}
                      </PrismicNextLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="block-video icon-pattern">
                    {/* <a
                      className="popup-youtube btn-play-video"
                      onClick={openModal}
                    ></a> */}
                    {/* <img
                      className="img-responsive"
                      src="assets/imgs/page/homepage1/img-1.png"
                      alt="Agon"
                    /> */}
                    <PrismicNextImage
                      field={image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </diva>
        </div>
      </div>
    </section>
  );
}
