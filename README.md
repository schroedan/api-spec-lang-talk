# API Specification Languages

This repository contains the slides for a talk at the [JavaScript User Group Dresden](//dresdenjs.io/) concerning API
specification languages. It includes some API specification examples based on [OpenAPI](//openapis.org/) (f.k.a.
[Swagger](//swagger.io/)), [RAML](//raml.org/) and [API Blueprint](//apiblueprint.org/).

## Requirements

* [Node.js](//nodejs.org/) 7.5+
* [NPM](//nodejs.org/) or [YARN](//yarnpkg.com/)

Use `$ npm install` or `$ yarn install` to install the necessary dependencies. Afterward you can serve the slides
locally at [http://localhost:8000]() via `$ npm start` or `$ yarn start`.

### API documentation

In order to render HTML documentations from the examples you will need to install the following global packages.

```bash
$ npm -g install bootprint bootprint-openapi html-inline raml2html aglio
```

or

```bash
$ yarn global add bootprint bootprint-openapi html-inline raml2html aglio
```

- [bootprint](//github.com/bootprint/bootprint) and [bootprint-openapi](//github.com/bootprint/bootprint-openapi) for
  the HTML docs based on the OpenAPI example: `$ npm run docs:openapi` or `$ yarn run docs:openapi`
- [RAML to HTML](//github.com/raml2html/raml2html) for the HTML docs based on the RAML example: `$ npm run docs:raml` or
  `$ yarn run docs:raml`
- [aglio](//github.com/danielgtaylor/aglio) for the HTML docs based on the API Blueprint example: `$ npm run docs:apib`
  or `$ yarn run docs:apib`

### Mock server

You can also start mock servers based on the examples. The following packages need to be installed globally.

```bash
$ npm -g install pokemock github:mulesoft-labs/osprey-mock-service#raml1.0 drakov
```

or

```bash
$ yarn global add pokemock github:mulesoft-labs/osprey-mock-service#raml1.0 drakov
```

- [Pokemock](//github.com/mobilcom-debitel/pokemock) is a express based mock server for OpenAPI:
  `$ npm run mock:openapi` or `$ yarn run mock:openapi`
- Use the `raml1.0` branch of the [Osprey Mock Service](//github.com/mulesoft-labs/osprey-mock-service/tree/raml1.0) to
  start am mock server based on the RAML example: `$ npm run mock:raml` or `$ yarn run mock:raml`
- Try the [Drakov API Blueprint Mock Server](//github.com/Aconex/drakov) to serve the mocks from the API Blueprint
  example: `$ npm run mock:apib` or `$ yarn run mock:apib`
