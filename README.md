# Gonzales C Service 4.0

Prototype mobile app built with React Native (Expo) to identify products via photo and description and suggest market prices.

## Features
- Capture product photo using device camera
- User description input
- Average market price calculation (placeholder API)
- Urgent price suggestion (10% below average)
- Custom price entry
- Firebase authentication (Google placeholder)
- Modular architecture prepared for future integrations
- Portuguese and Spanish support using `i18next`

## Project Structure
```
src/
  App.js                     Main navigation
  index.js                   Entry point for Expo
  core/
    config/
    hooks/
    utils/
  modules/
    product/                 Product capture and APIs
      components/
      services/
      screens/
    pricing/                 Price calculation flows
      strategies/
      market-data/
    auth/                    Authentication services
      components/
      services/
  locales/                   i18n resources
    pt/
    es/
  shared/                    Reusable components
    components/
    styles/
package.json                 Project dependencies
```

## Getting Started
1. Install dependencies with `npm install` (Expo CLI required).
2. Run `npm start` to launch the development server.
3. The app will open in Expo Go or an emulator.

Backend and delivery zone data are prepared separately in PostgreSQL and can be connected through the `fetchAveragePrice` service.
