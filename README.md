# Amazon Essence

This repository contains a simple e-commerce layout aimed at a U.S. audience. The site showcases high-conversion Amazonian products using a clean design and intuitive navigation.

## Structure
- `index.html` – landing page with hero section and call to action.
- `products.html` – overview of available products.
- `product.html` – template for individual product pages.
- `checkout.html` – simple checkout using PayPal in BRL.
- `assets/css/style.css` – styling for the site.
- `docs/` – additional documentation including product list and dropshipping details.

Update `checkout.html` with your own PayPal `client-id` before going live. Replace the `YOUR_CLIENT_ID` placeholder in the script tag so payments are processed correctly.

The layout is optimized for quick navigation and a streamlined purchase flow. Payments are handled through PayPal with support for international credit cards, allowing transactions in Brazilian Real (BRL).

For details about the dropshipping model and product information, see `docs/dropshipping.md` and `docs/products.md`.

## Dynamic product data

Products are stored in `data/products.json`. The list is loaded on the `products.html` and `product.html` pages using JavaScript. To add new items, update the JSON file and the pages will automatically display them. Each product entry includes a price in BRL, displayed on the site with the `R$` prefix using locale formatting so visitors know the cost before heading to checkout.

## Dashboard feed

A simple script in `dashboard/logger.js` writes an update to `dashboard/feed.json` every 5 minutes. Run `node dashboard/logger.js` to keep this file refreshed. It can be consumed by an external dashboard.

The generated `feed.json` is ignored by git (see `.gitignore`), so running the logger won't create untracked files in your repository.

## Local preview

To view the site locally, open `index.html` in a browser or use a static file server such as `npx serve` from the project root. This lets you navigate through the product pages and test the checkout flow before deploying.
