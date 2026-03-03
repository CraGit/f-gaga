import React, { useState, useEffect } from "react";
import { PrismicNextImage } from "@prismicio/next";

export default function ImageGallery({ images }) {
  const items = (images || []).map((it) => ({
    field: it.image || null,
    url: it.image?.url || "",
    alt: it.image?.alt || it.caption || "",
    caption: it.caption || "",
  }));

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function onKey(e) {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, items.length]);

  function open(i) {
    setIndex(i);
    setIsOpen(true);
  }

  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }

  if (items.length === 0) return null;

  return (
    <div className="najava-gallery">
      <div className="block-gallery-1 gallery-grid">
        {items.map((it, i) => (
          <div key={i} className="detail-gallery gallery-item" onClick={() => open(i)}>
            {it.field ? (
              <PrismicNextImage field={it.field} alt={it.alt} className="gallery-thumb" />
            ) : (
              <img src={it.url} alt={it.alt} className="gallery-thumb" />
            )}
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}>
            {items[index].field ? (
              <PrismicNextImage
                field={items[index].field}
                alt={items[index].alt}
                style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }}
              />
            ) : (
              <img
                src={items[index].url}
                alt={items[index].alt}
                style={{ maxWidth: "100%", maxHeight: "80vh", display: "block", margin: "0 auto", objectFit: "contain" }}
              />
            )}
            {items[index].caption ? (
              <div style={{ color: "#fff", textAlign: "center", marginTop: 8 }}>{items[index].caption}</div>
            ) : null}

            <button aria-label="Previous" onClick={prev} style={{ position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)" }}>
              ‹
            </button>
            <button aria-label="Next" onClick={next} style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)" }}>
              ›
            </button>
            <button aria-label="Close" onClick={() => setIsOpen(false)} style={{ position: "absolute", right: -10, top: -30, color: "#fff", background: "transparent", border: "none", fontSize: 28 }}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
