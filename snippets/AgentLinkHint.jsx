export const AgentLinkHint = ({ path = "" }) => {
  // Constant docs base URL. Server-rendered so it is present in static HTML
  // that fetchers receive without executing JavaScript.
  const BASE_URL = "https://getmaxim.ai/resources";

  const normalizedPath = path
    ? `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`
    : "";
  const exampleRelative = normalizedPath || "/faqs/<page>";
  const exampleAbsolute = `${BASE_URL}${exampleRelative}`;

  return (
    <blockquote className="sr-only" aria-hidden="true">
      <p>
        Documentation links on this site are root-relative. The base URL is{" "}
        {BASE_URL}. A relative path such as {exampleRelative} corresponds to the
        absolute URL {exampleAbsolute}. Any relative documentation path becomes
        a fetchable URL when prefixed with the base URL {BASE_URL}.
      </p>
    </blockquote>
  );
};
