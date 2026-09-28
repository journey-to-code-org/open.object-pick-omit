# open.object-pick-omit

Dependency-free object pick and omit utilities preserving own enumerable properties.

## Install

```bash
npm install @journey-to-code/open-object-pick-omit
```

## Usage

```js
pick(user, ["id", "name"]);
omit(user, ["password"]);
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
