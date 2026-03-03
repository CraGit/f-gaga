import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const rtfComponents = {
  heading1: ({ children }) => (
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: "600",
        lineHeight: "1.3",
        margin: "1rem 0",
        color: "#1E293B",
      }}
    >
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "600",
        margin: "1rem 0",
        color: "#1E293B",
      }}
    >
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p
      style={{
        fontSize: "1.1rem",
        fontWeight: "normal",
        lineHeight: "1.8",
        margin: "0.75rem 0",
      }}
    >
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: "bold", color: "#1E293B" }}>{children}</strong>
  ),
  list: ({ children }) => (
    <ul
      style={{
        listStyleType: "disc", // Show the bullet points
        marginBottom: "1rem",
        paddingLeft: "1.5rem",
      }}
    >
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol
      style={{
        listStyleType: "decimal", // Show the numbering
        marginBottom: "1rem",
        paddingLeft: "1.5rem",
      }}
    >
      {children}
    </ol>
  ),
  listItem: ({ children }) => (
    <li
      style={{
        fontSize: "1.1rem", // Match paragraph font size
        fontWeight: "normal",
        lineHeight: "1.8",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </li>
  ),
  oListItem: ({ children }) => (
    <li
      style={{
        fontSize: "1.1rem", // Match paragraph font size
        fontWeight: "normal",
        lineHeight: "1.8",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </li>
  ),
  hyperlink: ({ node, children }) => (
    <PrismicNextLink
      field={node.data}
      style={{
        color: "#0070f3",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {children}
    </PrismicNextLink>
  ),
  image: ({ node }) => (
    <div style={{ textAlign: "center", margin: "1rem 0" }}>
      <PrismicNextImage
        field={node}
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
    </div>
  ),
};

export default rtfComponents;
