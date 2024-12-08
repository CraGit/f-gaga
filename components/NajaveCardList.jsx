import React from "react";
import NajavaCard from "./NajavaCard";

export default function NajaveCardList({ najave, limit }) {
  const sortedNajave = najave
    .slice()
    .sort(
      (a, b) =>
        new Date(b.first_publication_date) - new Date(a.first_publication_date)
    )
    .slice(0, limit);

  return (
    <section className="section-box">
      <div className="container mt-50">
        <div className="row">
          {sortedNajave.map((najava, index) => (
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
