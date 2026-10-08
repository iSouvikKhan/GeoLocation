# GeoLocation

A small React app that shows the user's current location. It reads the latitude and longitude from the browser's Geolocation API and converts them into a readable street address using the [OpenCage Geocoding API](https://opencagedata.com/).

Deployed Link - https://getpresentlocation.web.app/

## Features

- Gets the current latitude and longitude with `navigator.geolocation.getCurrentPosition`
- Reverse-geocodes the coordinates into a formatted address through the OpenCage API
- Displays latitude, longitude and address on a single page

## Tech Stack

- React 18
- Vite 5
- ESLint
- Firebase Hosting (deployment)

## Project Structure

```
.
├── index.html          # HTML entry point
├── src/
│   ├── main.jsx        # Mounts the React app
│   ├── App.jsx         # Geolocation and reverse-geocoding logic
│   ├── App.css
│   └── index.css
├── public/
├── vite.config.js
├── firebase.json       # Firebase Hosting config (serves the dist folder)
└── .firebaserc         # Firebase project alias
```

## Prerequisites

- Node.js and npm
- A browser with location access allowed for the page

## Installation

```bash
git clone https://github.com/iSouvikKhan/GeoLocation.git
cd GeoLocation
npm install
```

## Running

```bash
npm run dev       # start the Vite dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

Open the URL printed by Vite and allow the browser to access your location. The coordinates appear first, followed by the address once the OpenCage request completes.

## Notes

- The OpenCage API key is currently hardcoded in `src/App.jsx`. To use your own key, replace it in the request URL there.
- Geolocation in browsers only works on `localhost` or over HTTPS.

## Deployment

The project is configured for Firebase Hosting, serving the `dist` folder as a single-page app. With the Firebase CLI installed and logged in:

```bash
npm run build
firebase deploy
```
