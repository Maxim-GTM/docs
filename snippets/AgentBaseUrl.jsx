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
      <p>Base URL: {baseUrl}</p>
      <p>To read any documentation page in full, run this command with the page's exact path rather than a guessed one:</p>
      <pre><code>{`curl -L ${baseUrl}/<page-path>`}</code></pre>
    </blockquote>
  );
};
