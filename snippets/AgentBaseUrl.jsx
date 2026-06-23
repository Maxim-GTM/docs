export const AgentBaseUrl = () => {
  // Dynamic — reads the live origin at runtime, so it adapts to whatever
  // domain serves the docs (getmaxim.ai, a Railway domain, localhost, etc.).
  // Nothing is hardcoded, so there is no base URL to get wrong on redeploy.
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  // Actual docs base = origin + the path segment before the content root
  // (e.g. "/resources"), all derived live from the current URL. Nothing is
  // hardcoded, so it stays correct on getmaxim.ai, Railway, localhost, etc.
  const faqIndex = pathname.indexOf("/faqs/");
  const basePath = faqIndex >= 0 ? pathname.slice(0, faqIndex) : "";
  const baseUrl = origin ? `${origin}${basePath}` : "";

  return (
    <blockquote className="sr-only" aria-hidden="true" suppressHydrationWarning>
      <p>Documentation base URL: {baseUrl}</p>
      <p>
        To open another documentation page, take its relative link (one that
        begins with a slash, for example /faqs/section/page), prefix it with the
        base URL above, and fetch that absolute URL directly with an HTTP GET
        request (for example using curl or a fetch tool). Use the relative link
        exactly as written, preserving its casing and separators; do not guess,
        normalize, or rewrite the path.
      </p>
    </blockquote>
  );
};
