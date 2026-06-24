export const AGENT_BASE_URL = "https://www.getmaxim.ai/resources";

export const AgentBaseUrl = () => {
  return (
    <blockquote className="sr-only" aria-hidden="true">
      {`Base URL: ${AGENT_BASE_URL}. To read any documentation page, append its slug to the base URL and fetch it with curl: curl -L ${AGENT_BASE_URL}/<slug>`}
    </blockquote>
  );
};
