## Design First Approach

So why do we need to specify our API? <!-- .element: class="fragment" data-fragment-index="1" -->

![When the API is too much trouble...](../images/01-why.gif "When the API is too much trouble...") <!-- .element: class="fragment" data-fragment-index="3" -->

Because otherwise this will happen! <!-- .element: class="fragment" data-fragment-index="2" -->

---

## Benefits Of Specifying An API

* interface between two or more eco systems <!-- .element: class="fragment" -->
  * try-and-error is pain in the ass <!-- .element: class="fragment" -->
  * minimise future legacy payload <!-- .element: class="fragment" -->
  * better performance, usability and reliability <!-- .element: class="fragment" -->
  * optimize number of necessary API calls <!-- .element: class="fragment" -->
  * bigger changes often results in bc-breaks <!-- .element: class="fragment" -->
  * easier human and machine consumption <!-- .element: class="fragment" -->

---

## API Specification Contents 

* Metadata <!-- .element: class="fragment" -->
* Versioning <!-- .element: class="fragment" -->
* Caching <!-- .element: class="fragment" -->
* Authorization (access policy definition) <!-- .element: class="fragment" -->
* Authentication (identity verification) <!-- .element: class="fragment" -->
* Request methods and parameters <!-- .element: class="fragment" -->
* Response status and payload <!-- .element: class="fragment" -->
* Error handling <!-- .element: class="fragment" -->

---

## Advantages Of Not Using Notepad For Specification

* tools are using standardized source formats <!-- .element: class="fragment" -->
  * linting, syntax checks, validation, ...
  * can be rendered as HTML for end users
* is readable by machines <!-- .element: class="fragment" -->
  * to serve some mock data
  * available for code generators (interfaces, schemas, ...)
  * ready to get used for automated tests
