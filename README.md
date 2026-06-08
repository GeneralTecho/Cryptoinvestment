# CryptoCustomerSupportHelp Clone

This folder contains a local clone of https://cryptocustomersupporthelp.vercel.app.

Files:
- `index.html` — cloned homepage with the same layout, buttons, feature grid, and widgets.
- `wallets.html` — cloned wallet connection page with search, wallet cards, modal form flow, and validation.
- `end.html` — final local landing page after the wallet form submission flow.
- `assets/default.svg` — fallback image for any wallet logo load failure.

How to use:
- Open `index.html` in a browser.
- Click `Connect Wallet`, `Claim Airdrop`, or `DeFI Market AI Signals` to reach `wallets.html`.
- Search wallets and choose one to open the manual connect modal.

Note:
- Wallet logos load from the live site domain to preserve the original visuals.
- The wallet form submission is wired to the original `submit-form.com` endpoint and redirects to `end.html`.
