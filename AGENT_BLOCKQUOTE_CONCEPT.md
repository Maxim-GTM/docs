# Hidden Blockquote For Agent Links

Some agents do not reliably follow relative links like `/docs/setup`. Claude and similar tools work better when the page source includes full absolute URLs like `https://example.com/docs/setup`.

The simple pattern:

- keep visible frontend links relative
- add hidden `sr-only` blockquote links as absolute URLs
- build the base URL dynamically from the current request
- mirror the same absolute links in `.md` exports and `llms.txt`

## HTML Page

Visible link for humans:

```tsx
<a href="/docs/setup">Setup</a>
```

Hidden link for agents:

```tsx
<blockquote className="sr-only">
  <h2>Related Pages</h2>
  <ul>
    <li>
      <a href="https://example.com/docs/setup">
        Setup: https://example.com/docs/setup
      </a>
    </li>
  </ul>
</blockquote>
```

## Dynamic Base URL

Do not hardcode production URLs. Build the origin from request headers:

```ts
export function getOriginFromHeaders(headersList: Headers) {
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
  const proto =
    headersList.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") || host?.startsWith("127.")
      ? "http"
      : "https");

  return `${proto}://${host}`;
}
```

Then create absolute links:

```ts
const origin = getOriginFromHeaders(await headers());
const absoluteHref = new URL("/docs/setup", origin).toString();
```

Result:

```txt
http://localhost:3000/docs/setup
https://example.com/docs/setup
```

## Markdown Export

For `.md` output, use the same absolute URLs:

```md
> ## Related Pages

> - [Setup](https://example.com/docs/setup)
> - [API Reference](https://example.com/docs/api)
```

For `llms.txt`, link to Markdown pages:

```md
- [Setup](https://example.com/docs/setup.md): Setup guide.
```

## Rule

Frontend can use relative links. Agent-readable content should use absolute links because some tools, including Claude, may not resolve relative URLs correctly.
