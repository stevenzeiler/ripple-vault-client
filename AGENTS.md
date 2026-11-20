# AGENTS.md

Historical repo on the `legacy` profile. It is a 2014 JavaScript client for Ripple Vault servers, kept for the record.

## Stack
JavaScript (CommonJS), Node 0.10 era. Mocha 1.x for specs, Grunt + Webpack 1 for the browser build, superagent for HTTP, ripple-lib 0.7.

## Layout
`src/` library (index, authinfo, rippletxt, crypt, blob, base58, types); `spec/client.js` specs; `Gruntfile.js` build; `docs/` status and README art.

## Commands (as they were)
```sh
npm install
npm test        # mocha -R spec spec/  (on Node 22 use: node node_modules/mocha/bin/_mocha -R spec spec/)
grunt           # Webpack browser bundle into build/
```
Most specs need a live Ripple Vault, which no longer exists.

## Rules
- Docs-only changes unless the repo is revived; no code edits without Steven's decision.
- Never commit secrets or real account data.
- Conventional Commits (`docs:`, `fix:`, `chore:`).
- Update `docs/STATUS.md` with any change.
- Credit the Ripple engineers (Matthew Fettig, Stefan Thomas, Vahe Hovhannisyan) in history notes.
