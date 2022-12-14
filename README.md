# Cyscale Docs

This repo contains [docs.cyscale.com](https://docs.cyscale.com/). It is built with [Docusaurus](https://docusaurus.io/).

## Contributing to the Docs

First of all, this is all markdown. You might want to write the content in a dedicated word processor (e.g. on [Confluence](https://cyscale.atlassian.net/wiki/spaces/DOC/overview)) and, once you are happy with the content (the text is correct), copy it in the docs directory, in the corresponding file. Docusaurus generates the website with the structure following the directory structure.

To run the docs locally, you will need [Node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/getting-started/install). Run `yarn` to install the dependencies and `yarn start` to serve the website locally.

## Deployment

GitHub actions handle the entire deployment process. Currently, we host the docs on [GitHub Pages](https://pages.github.com/).
