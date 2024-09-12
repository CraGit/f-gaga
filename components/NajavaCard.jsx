import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import React from "react";

export default function NajavaCard({ link, heading, image, overtitle }) {
  return (
    <div className="col-lg-4 col-sm-12 pr-30">
      <div className="card-grid-style-4">
        <span className="tag-dot">{overtitle}</span>
        <Link href={link} className="text-heading-4">
          {heading}
        </Link>
        <div className="grid-4-img">
          <Link href={link}>
            <PrismicNextImage
              field={image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
