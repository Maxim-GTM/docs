export const AgentFaqLinks = ({ currentPath }) => {
  const faqGroups = [
    {
      title: 'Prompt Engineering',
      pages: [
        { title: 'What is Prompt Engineering?', href: '/faqs/prompt-engineering/what-is-prompt-engineering' },
        { title: 'How does Maxim Streamline the Prompt Engineering Lifecycle?', href: '/faqs/prompt-engineering/how-does-maxim-streamline-the-prompt-engineering-lifecycle' },
        { title: 'How do I Version and Manage Prompts?', href: '/faqs/prompt-engineering/how-do-I-version-and-manage-prompts' },
        { title: 'How do I Test, Evaluate, and Optimize Prompts?', href: '/faqs/prompt-engineering/how-to-test-evaluate-and-optimize-prompts' },
        { title: 'How can I Evaluate the Performance of Prompts with Maxim AI?', href: '/faqs/prompt-engineering/how-can-I-evaluate-the-performance-of-the-prompts-with-Maxim-AI' },
        { title: 'Can I Build No-Code Agents and Chain Multiple Prompts for Exerimentation with Maxim?', href: '/faqs/prompt-engineering/Can-I-build-no-code-agents-for-experimentation-with-Maxim-AI' },
        { title: 'Does Maxim Support Multimodal Inputs for Prompt Evaluation?', href: '/faqs/prompt-engineering/does-Maxim-support-multimodal-inputs-for-prompt-evaluation' },
        { title: 'Can I Reuse Common Instructions Across Multiple Prompts?', href: '/faqs/prompt-engineering/can-I-reuse-common-instructions-across-multiple-prompts' },
        { title: 'How can I Evaluate the Context Retrieved by the Prompt?', href: '/faqs/prompt-engineering/how-can-I-evaluate-context-retrieved-by-prompts' },
        { title: 'How can I Compare and Evaluate Prompts Across Various Models?', href: '/faqs/prompt-engineering/how-can-I-compare-and-evaluate-prompts-across-various-models' },
        { title: 'How can I Evaluate Prompts Across Various Scenarios?', href: '/faqs/prompt-engineering/how-can-I-evaluate-prompts-across-various-scenarios' },
        { title: 'How can I Collaboratively Create, Review, Evaluate and Deploy Prompts at One Place?', href: '/faqs/prompt-engineering/how-can-i-collaboratively-create-review-evaluate-and-deploy-prompts-at-one-place' },
      ],
    },
    {
      title: 'Simulation and Evaluation',
      pages: [
        { title: 'How do I Evaluate AI Agents and Agentic Workflows?', href: '/faqs/simulation-and-evaluation/how-to-evaluate-ai-agents-and-agentic-workflows' },
        { title: 'How do I Create a Custom Evaluator?', href: '/faqs/simulation-and-evaluation/how-do-I-create-a-custom-evaluator' },
        { title: 'How does Agent Simulation Help Evaluate AI Agents?', href: '/faqs/simulation-and-evaluation/how-does-agent-simulation-help-evaluate-ai-agents' },
        { title: 'How can I Evaluate Voice AI Agents?', href: '/faqs/simulation-and-evaluation/how-can-I-evaluate-voice-ai-agents' },
        { title: 'How can I Evaluate Local AI Agents?', href: '/faqs/simulation-and-evaluation/how-can-I-evaluate-local-ai-agents' },
        { title: 'What is AI Agent Evaluation?', href: '/faqs/simulation-and-evaluation/what-is-AI-agent-evaluation' },
        { title: 'How does Maxim AI Evaluate Multi-Turn Agent Trajectories Before Deployment?', href: '/faqs/simulation-and-evaluation/how-does-Maxim-AI-evaluate-multi-turn-agent-trajectories-before-deployment' },
        { title: 'What Types of Evaluators does Maxim Provide?', href: '/faqs/simulation-and-evaluation/what-type-of-evaluators-does-Maxim-provide' },
        { title: 'How do I Integrate Evaluations into my CI/CD Pipeline?', href: '/faqs/simulation-and-evaluation/how-can-I-integrate-evaluations-into-myci-cd-pipeline' },
        { title: 'Can I Curate and Evolve Datasets for Agent Evals in Maxim?', href: '/faqs/simulation-and-evaluation/can-I-curate-and-evolve-datasets-for-agent-evals-in-Maxim-AI' },
        { title: 'Does Maxim Support Human-in-the-Loop Evaluation for Agents?', href: '/faqs/simulation-and-evaluation/does-Maxim-support-human-in-loop-evaluation-for-agents' },
        { title: 'What is Agent Simulation?', href: '/faqs/simulation-and-evaluation/what-is-agent-simulation' },
        { title: 'What is LLM-as-a-Judge Evaluation?', href: '/faqs/simulation-and-evaluation/what-is-LLM-as-a-judge-evaluation' },
        { title: 'How can I Detect Hallucinations in My AI Applications?', href: '/faqs/simulation-and-evaluation/how-can-i-detect-hallucinations-in-my-AI-applications' },
        { title: 'How can I Evaluate My RAG Application?', href: '/faqs/simulation-and-evaluation/how-can-I-evaluate-my-RAG-application' },
      ],
    },
    {
      title: 'Observability',
      pages: [
        { title: 'How can I Track Token Usage and Cost Across Different LLM Models?', href: '/faqs/observability/how-can-I-track-token-usage-and-cost-across-different-LLM-models' },
        { title: 'How can I Monitor Complex AI Agent Workflows in Production?', href: '/faqs/observability/how-can-I-monitor-complex-ai-agent-workflows-in-production' },
        { title: 'How do I Monitor Tool Calls in My AI Agents?', href: '/faqs/observability/how-do-I-monitor-tool-calls-in-my-AI-agents' },
        { title: 'Is Maxim AI Compatible with OpenTelemetry (OTel)?', href: '/faqs/observability/is-maxim-ai-otel-compatible' },
        { title: 'What is Agent Observability and Why do I Need It?', href: '/faqs/observability/what-is-agent-observability-and-why-do-iI-need-it' },
        { title: 'Can I Get Alerted for Any Regressions In Cost, Latency, or Any Other Evaluation Metrics?', href: '/faqs/observability/can-I-get-alerted-for-any-regressions-in-cost-latency-or-any-other-evaluation-metrics' },
        { title: 'How can I Observe and Evaluate Multi-Turn Trajectories with Maxim AI?', href: '/faqs/observability/how_can_I_observe_and_evaluate_multi-turn-trajectories-with-Maxim-AI' },
        { title: 'How can I Collect And Add User Feedback To A Trace?', href: '/faqs/observability/how-can-I-collect-and-add-user-feedback-to-a-trace' },
        { title: 'How can I Evaluate Voice Agents with Realistic Voice Simulations?', href: '/faqs/observability/how-can-I-evaluate-voice-agents-with-realistic-voice-simulations' },
        { title: 'How can I Integrate Maxim to Trace and Evaluate My Voice Agents?', href: '/faqs/observability/how-can-i-integrate-maxim-to-trace-and-evaluate-my-voice-agents' },
        { title: 'What are Traces and Spans in Agent Observability?', href: '/faqs/observability/what-are-traces-and-spans-in-agent-observability' },
        { title: 'How can I Curate Datasets From My Production Logs?', href: '/faqs/observability/how-can-I-curate-datasets-from-my-production-logs' },
        { title: 'Can I Track Evaluation Costs and Token Usage at the Eval and Repository Levels?', href: '/faqs/observability/can-I-track-evaluation-costs-and-token-usage-at-the-eval-and-repository-levels' },
      ],
    },
  ];

  function normalizeFaqPath(path) {
    if (!path) return '';

    const faqIndex = path.indexOf('/faqs/');
    const normalizedPath = faqIndex >= 0 ? path.slice(faqIndex) : path;

    return normalizedPath.replace(/\/$/, '').toLowerCase();
  }

  function getBasePath() {
    if (typeof window === 'undefined') return '';

    const faqIndex = window.location.pathname.indexOf('/faqs/');
    return faqIndex >= 0 ? window.location.pathname.slice(0, faqIndex) : '';
  }

  function toAbsoluteFaqUrl(href) {
    if (typeof window === 'undefined') return href;

    return `${window.location.origin}${getBasePath()}${href}`;
  }

  function formatAgentLinkText(link, href) {
    return `${link.title}: ${href}`;
  }

  function scheduleAgentFaqLinkSync() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    window.clearTimeout(window.__agentFaqLinksTimer);
    window.__agentFaqLinksTimer = window.setTimeout(() => {
      document
        .querySelectorAll('blockquote[data-agent-faq-links] a[data-agent-faq-href]')
        .forEach((anchor) => {
          const href = anchor.getAttribute('data-agent-faq-href');
          const title = anchor.getAttribute('data-agent-faq-title');

          if (!href || !title) return;

          const absoluteHref = toAbsoluteFaqUrl(href);
          anchor.setAttribute('href', absoluteHref);
          anchor.textContent = `${title}: ${absoluteHref}`;
        });
    }, 0);
  }

  function renderAgentLinkList(links) {
    if (!links.length) return null;

    return (
      <ul>
        {links.map((link) => {
          const absoluteHref = toAbsoluteFaqUrl(link.href);

          return (
            <li key={link.href}>
              <a
                href={absoluteHref}
                data-agent-faq-href={link.href}
                data-agent-faq-title={link.title}
              >
                {formatAgentLinkText(link, absoluteHref)}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  scheduleAgentFaqLinkSync();

  const detectedPath = typeof window !== 'undefined' ? window.location.pathname : currentPath;
  const currentKey = normalizeFaqPath(currentPath || detectedPath);
  const group = faqGroups.find((faqGroup) =>
    faqGroup.pages.some((page) => normalizeFaqPath(page.href) === currentKey)
  );

  if (!group) return null;

  const currentIndex = group.pages.findIndex((page) => normalizeFaqPath(page.href) === currentKey);
  const previousPage = currentIndex > 0 ? group.pages[currentIndex - 1] : null;
  const nextPage = currentIndex < group.pages.length - 1 ? group.pages[currentIndex + 1] : null;
  const adjacentLinks = [nextPage, previousPage].filter(Boolean);
  const adjacentHrefs = new Set(adjacentLinks.map((link) => link.href));
  const categoryLinks = group.pages
    .filter((page) => normalizeFaqPath(page.href) !== currentKey && !adjacentHrefs.has(page.href));
  const categoryEntryLinks = faqGroups
    .filter((faqGroup) => faqGroup.title !== group.title)
    .map((faqGroup) => faqGroup.pages[0]);
  const relatedLinks = [...adjacentLinks, ...categoryLinks, ...categoryEntryLinks];

  return (
    <blockquote
      className="sr-only"
      data-agent-faq-links=""
      aria-label="Related FAQ pages"
      suppressHydrationWarning
    >
      <h2>Related FAQ pages</h2>
      {renderAgentLinkList(relatedLinks)}
    </blockquote>
  );
};
