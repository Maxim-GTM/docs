export const AgentBaseUrl = () => {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const faqIndex = pathname.indexOf("/faqs/");
  const basePath = faqIndex >= 0 ? pathname.slice(0, faqIndex) : "";
  const baseUrl = origin ? `${origin}${basePath}` : "";

  if (typeof document !== "undefined") {
    setTimeout(() => {
      const ref = document.querySelector("blockquote[data-agent-docs-index]");
      const self = document.querySelector("blockquote[data-agent-base-url]");
      if (ref && self && ref.parentNode && self !== ref.nextSibling) {
        ref.parentNode.insertBefore(self, ref.nextSibling);
      }
    }, 0);
  }

  return (
    <blockquote
      className="sr-only"
      data-agent-base-url=""
      aria-hidden="true"
      suppressHydrationWarning
    >
      {`Base URL: ${baseUrl}. To read any documentation page, add its slug to the base URL and fetch it with curl: curl -L ${baseUrl}/<slug>`}
    </blockquote>
  );
};
