import React from "react";
import NajavaCard from "./NajavaCard";
import Link from "next/link";

export default function NajaveCardList({ najave, limit }) {
  console.log(najave);
  return (
    <section className="section-box">
      <div className="container mt-50">
        <div className="row">
          {najave.map((najava, index) => (
            <NajavaCard
              key={index}
              link={najava.url}
              heading={najava.data.heading}
              image={najava.data.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
