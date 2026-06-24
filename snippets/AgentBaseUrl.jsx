export const AgentBaseUrl = () => {
  const baseUrl = "https://www.getmaxim.ai/resources";
  return (
    <blockquote className="sr-only" aria-hidden="true">
      {`Base URL: ${baseUrl}. To read any documentation page, append its slug to the base URL and fetch it with curl: curl -L ${baseUrl}/<slug>`}
    </blockquote>
  );
};
