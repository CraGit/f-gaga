import React, { useState, useEffect, useRef } from "react";
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

  // swipe refs
  const pointerStartX = useRef(null);
  const pointerStartY = useRef(null);
  const pointerDown = useRef(false);

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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "90%", maxHeight: "90%", touchAction: "pan-y" }}
            onPointerDown={(e) => {
              pointerDown.current = true;
              pointerStartX.current = e.clientX;
              pointerStartY.current = e.clientY;
              try {
                e.currentTarget.setPointerCapture(e.pointerId);
              } catch (err) {}
            }}
            onPointerMove={(e) => {
              if (!pointerDown.current || pointerStartX.current === null) return;
            }}
            onPointerUp={(e) => {
              if (!pointerDown.current || pointerStartX.current === null) return;
              const dx = e.clientX - pointerStartX.current;
              const dy = e.clientY - pointerStartY.current;
              const absDx = Math.abs(dx);
              const absDy = Math.abs(dy);
              const SWIPE_THRESHOLD = 50;
              if (absDx > SWIPE_THRESHOLD && absDx > absDy) {
                if (dx < 0) next();
                else prev();
              }
              pointerDown.current = false;
              pointerStartX.current = null;
              pointerStartY.current = null;
              try {
                e.currentTarget.releasePointerCapture(e.pointerId);
              } catch (err) {}
            }}
            onPointerCancel={() => {
              pointerDown.current = false;
              pointerStartX.current = null;
              pointerStartY.current = null;
            }}
          >
            {items[index].field ? (
              <PrismicNextImage
                field={items[index].field}
                alt={items[index].alt}
                style={{ width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain", borderRadius: 0 }}
              />
            ) : (
              <img
                src={items[index].url}
                alt={items[index].alt}
                style={{ width: "100%", height: "auto", maxHeight: "80vh", display: "block", margin: "0 auto", objectFit: "contain", borderRadius: 0 }}
              />
            )}

            {items[index].caption ? <div style={{ color: "#fff", textAlign: "center", marginTop: 8 }}>{items[index].caption}</div> : null}

            <button className="lightbox-prev" aria-label="Previous" onClick={prev} style={{ position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)" }}>‹</button>
            <button className="lightbox-next" aria-label="Next" onClick={next} style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)" }}>›</button>
            <button className="lightbox-close" aria-label="Close" onClick={() => setIsOpen(false)} style={{ position: "absolute", right: -10, top: -30, color: "#fff", background: "transparent", border: "none", fontSize: 28 }}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}
