const rtfComponents = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-semibold leading-tight font-display text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
      {children}
    </h1>
  ),
  heading2: ({ children }) => <h2 className="text-heading-3">{children}</h2>,
  paragraph: ({ children }) => (
    <p className="py-4 leading-8 text-xl font-normal text-slate-700 ">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-medium text-xl tracking-normal leading-10 font-display">
      {children}
    </strong>
  ),
};

export default rtfComponents;
