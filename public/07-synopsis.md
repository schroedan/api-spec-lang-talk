## Synopsis

* best tool set? Depends! <!-- .element: class="fragment" -->
  * All tools have integrations for common languages
* OpenAPI 2.0 seems quite old (late 2014) <!-- .element: class="fragment" -->
  * working draft for [version 3.0][1] on its way
* most RAML tools are not ready for version 1.0 yet <!-- .element: class="fragment" -->
  * use raml1.0 branch for mock service
  * [support for 1.0][2] issue for testing tool
* API Blueprint has some nice advantages <!-- .element: class="fragment" -->
  * human readable without conversion
  * built-in [JSON schema][3] support, thanks to [MSON][4]

[1]: https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.md
[2]: https://github.com/cybertk/abao/issues/57
[3]: http://json-schema.org/
[4]: https://github.com/apiaryio/mson
