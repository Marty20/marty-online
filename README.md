## marty-online

A personal PWA using Ionic and Stencil.

## Features

* `@ionic/core` for the UI.
* Stencil for the application logic and routing
* Push Notifications
* Unit Tests
* Pre-rendering
* Lazy-loading and code splitting
* Intelligent Polyfills
* Modern mode: ES6/ESM for new browser, ES5 for older
* Service Worker, App manifest, iOS meta tags
* Theming using CSS variables

## Getting Started

To start building, clone this repo to a new directory:

```bash
npm init stencil ionic-pwa
```


## Production

To build for production, run:

```bash
npm run build
```

A production build includes:

* Minified code bundles
* Generated Service workers
* App manifest

## Hosting

Hosted over HTTPS through firebase.
[Firebase Hosting](https://firebase.google.com/docs/hosting/).

## H2 Push

To learn about it, take a look at this [article](https://en.wikipedia.org/wiki/HTTP/2_Server_Push).

To set this up for `marty-online`:

* Do a production build of the app: `npm run build`
* Serve your WWW folder locally using a local http server and open in your browser.
  * https://www.npmjs.com/package/http-server works pretty well for this. You can serve your www folder by running `http-server www`.
* Open the DevTools and look at the network tab.
  * Reload the page and you should see all of your files show up in the network tab. Excluding the `sw.js` file, these are the files you want to H2 push.
* List these files in the link headers of your firebase.json file. For a syntax reference, review this [article](https://w3c.github.io/preload/#server-push-http-2)

## Service Workers

Service workers are generated via the Stencil build tool. For more information on how they can be configured, see the [Service Worker docs](https://stenciljs.com/docs/service-workers).

## Developing with a Service Worker

To generate a Service Worker during dev builds, we've added the npm script:

```
npm run start.sw
```

This will start a dev build and generate a Service Worker as well.

## Unit Tests

To run the unit tests once, run:

```bash
npm test
```

To run the unit tests and watch for file changes during development, run:

```bash
npm run test.watch
```
