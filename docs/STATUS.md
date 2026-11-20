# Status

Historical repo (2014), `legacy` profile. Last commit 2014-05-20, version 1.1.0. Checked 2026-11-20 on Node 22 in a scratch copy.

## Works
- `npm install` succeeds on Node 22 (212 packages, many deprecated).
- The module loads and `VaultClient` constructs; the two initialization specs pass (using `_mocha` directly).

## Broken
- The live-vault specs fail (5 of 7): "No ripple.txt found". The Ripple Vault service it talks to is gone.
- `npm test` uses the `mocha` launcher, which on Node 22 with mocha 1.x prints nothing and exits 0. That is a false pass. Run `node node_modules/mocha/bin/_mocha -R spec spec/` instead.
- `ripple-lib` ^0.7 is deprecated (replaced by xrpl.js).
- `getRippleName` in `src/index.js` reads an undefined variable `id`.

## Unknown
- Whether the Webpack build (`grunt`, webpack 1) still runs; not tried.
- Whether the blob crypto matches the final Ripple Vault format; there is no server to test against.

## Next (only if revived)
Decide whether to revive at all. If so: pick a real profile (ts), replace superagent/ripple-lib, mock the vault in tests, add CI.

## Not yet from the standard
CONTRIBUTING.md, SECURITY.md, docs/ARCHITECTURE.md, CHANGELOG.md, `.github/`, CI, API docs, events/CATALOG.md. They wait for revival. A LICENSE (Unlicense text) already exists.
