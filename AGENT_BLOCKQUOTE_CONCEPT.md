# Hidden Blockquote For Agent Links

Some agents do not reliably follow relative links like `/faqs/observability/...`. Claude and similar tools work better when the page source includes full absolute URLs like `https://www.getmaxim.ai/docs/faqs/observability/...`.

This project implements that with a single Mintlify snippet, `snippets/AgentFaqLinks.jsx`, imported into each FAQ `.mdx` page:

```mdx
import { AgentFaqLinks } from '/snippets/AgentFaqLinks.jsx'

<AgentFaqLinks currentPath="/faqs/observability/is-maxim-ai-otel-compatible" />
```

The pattern:

- keep the visible frontend links relative (Mintlify renders normal nav)
- inject a hidden `sr-only` blockquote of related links as absolute URLs
- build the base URL on the client from `window.location.origin`
- hide it from screen readers too with `aria-hidden="true"` — it exists only for agents reading the DOM

## The Hidden Blockquote

The snippet returns one blockquote. It is in the DOM but visually hidden (`sr-only`) and removed from the accessibility tree (`aria-hidden="true"`), so neither sighted users nor screen-reader users see it. Agents scraping the rendered HTML still get clean, absolute links.

```jsx
<blockquote
  className="sr-only"
  data-agent-faq-links=""
  aria-hidden="true"
  suppressHydrationWarning
>
  <h2>Related FAQ pages</h2>
  <ul>
    <li>
      <a
        href="https://www.getmaxim.ai/docs/faqs/observability/..."
        data-agent-faq-href="/faqs/observability/..."
        data-agent-faq-title="What are Traces and Spans in Agent Observability?"
      >
        What are Traces and Spans in Agent Observability?: https://www.getmaxim.ai/docs/faqs/observability/...
      </a>
    </li>
  </ul>
</blockquote>
```

Notes on the markup:

- `aria-hidden="true"` replaces any `aria-label`. With `aria-hidden`, an `aria-label` would do nothing, so it is dropped.
- `suppressHydrationWarning` is set because the absolute href is resolved on the client, so server and client output differ on first render.
- Each link's text is `"${title}: ${absoluteHref}"` so the URL is present as plain text, not only in the `href`.

## Dynamic Base URL

Do not hardcode the production origin. The snippet reads it from the browser and prepends the docs base path (the portion of the path before `/faqs/`):

```js
function getBasePath() {
  if (typeof window === 'undefined') return '';
  const faqIndex = window.location.pathname.indexOf('/faqs/');
  return faqIndex >= 0 ? window.location.pathname.slice(0, faqIndex) : '';
}

function toAbsoluteFaqUrl(href) {
  if (typeof window === 'undefined') return href;
  return `${window.location.origin}${getBasePath()}${href}`;
}
```

Result:

```txt
http://localhost:3000/docs/faqs/observability/is-maxim-ai-otel-compatible
https://www.getmaxim.ai/docs/faqs/observability/is-maxim-ai-otel-compatible
```

During server render `window` is undefined, so the relative href is emitted first and upgraded to absolute on the client.

## Re-Sync After Render

Mintlify can re-render or rewrite anchors after the snippet runs. To keep the absolute URLs from being reverted to relative, the snippet stamps each anchor with `data-agent-faq-href` / `data-agent-faq-title` and re-applies the absolute href and link text on a timer:

```js
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
```

The data attributes are the source of truth for the original relative href, so re-syncing is always idempotent.

## Which Links Are Included

`currentPath` is normalized (sliced from `/faqs/`, trailing slash removed, lowercased) and matched against three FAQ groups defined in the snippet: Prompt Engineering, Simulation and Evaluation, Observability. For the current page the related set is:

- the next and previous page in the same group
- the remaining pages in the same group
- the first page of every other group, as an entry point

If the current path is not found in any group, the snippet renders nothing.

## Markdown Export

For `.md` output, mirror the same absolute URLs:

```md
> ## Related FAQ pages

> - [What are Traces and Spans in Agent Observability?](https://www.getmaxim.ai/docs/faqs/observability/...)
```

For `llms.txt`, link to the Markdown pages:

```md
- [Is Maxim AI OTel Compatible?](https://www.getmaxim.ai/docs/faqs/observability/is-maxim-ai-otel-compatible.md): OTel compatibility.
```

## Rule

Frontend links can stay relative. Agent-readable content should use absolute links because some tools, including Claude, may not resolve relative URLs correctly. Keep the blockquote `sr-only` and `aria-hidden="true"` so it is for agents only, and resolve the origin at runtime instead of hardcoding it.
