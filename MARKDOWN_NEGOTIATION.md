# HTML And Markdown Negotiation

This file explains how the same public URL can serve HTML to humans and Markdown to tools that explicitly ask for Markdown.

## Where It Is Defined

The behavior is defined in `next.config.ts` inside `rewrites()`.

```ts
{
  source: "/blog/agent-infrastructure/:slug",
  has: [
    {
      type: "header",
      key: "accept",
      value: ".*(?:text/markdown|text/plain).*",
    },
  ],
  destination: "/api/markdown/agent-infrastructure/:slug",
}
```

## Human Request

A normal browser asks for HTML:

```txt
GET /blog/agent-infrastructure/semantic-cache-controls
Accept: text/html
```

The rewrite does not match, so Next serves the normal page:

```txt
app/blog/agent-infrastructure/[slug]/page.tsx
```

Response:

```txt
Content-Type: text/html
```

## Agent Or Tool Request

An AI tool can ask for Markdown:

```txt
GET /blog/agent-infrastructure/semantic-cache-controls
Accept: text/markdown, text/plain, */*
```

The rewrite matches, so Next internally serves:

```txt
app/api/markdown/agent-infrastructure/[slug]/route.ts
```

Response:

```txt
Content-Type: text/markdown
```

## Explicit Markdown URL

This URL always returns Markdown:

```txt
/blog/agent-infrastructure/semantic-cache-controls.md
```

It is defined by this rewrite:

```ts
{
  source: "/blog/agent-infrastructure/:slug.md",
  destination: "/api/markdown/agent-infrastructure/:slug",
}
```

## Rule

Do not switch only from `User-Agent`. Use explicit `.md` URLs, `llms.txt`, or the `Accept` header.
