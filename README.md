# API Specification Language Essentials

This repository contains the slides for a meet-up at
[Web Developer Chemnitz](//www.meetup.com/de-DE/Web-Developer-Chemnitz/) concerning API specification language
essentials. It includes some API specification examples based on [OpenAPI](//openapis.org/) (f.k.a.
[Swagger](//swagger.io/)), [RAML](//raml.org/) and [API Blueprint](//apiblueprint.org/).

## Requirements

* [Node.js](//nodejs.org/) 7.5+
* [YARN](//yarnpkg.com/)

Use `$ yarn install` to install all the necessary dependencies. Afterward you can serve the slides locally at
[http://localhost:8000]() via `$ yarn start`.

### API Documentation

* [Spectacle](//github.com/sourcey/spectacle) will be used for the HTML docs based on the OpenAPI example:
  `$ yarn run openapi:docs`
* [RAML to HTML](//github.com/raml2html/raml2html) is the tool for the HTML docs based on the RAML example:
  `$ yarn run raml:docs`
* [aglio](//github.com/danielgtaylor/aglio) renders the HTML docs based on the API Blueprint example:
  `$ yarn run apib:docs`

### Mock Server

* [Pokemock](//github.com/mobilcom-debitel/pokemock) is a express based mock server for OpenAPI:
  `$ yarn run openapi:mocks`
* [Drakov API Blueprint Mock Server](//github.com/Aconex/drakov) will start a mock server based on the API Blueprint example:
  `$ yarn run apib:mocks`
