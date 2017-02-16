## Design First Approach: Why?

So why do we need to specify our API? <!-- .element: class="fragment" data-fragment-index="1" -->

![When the API is too much trouble...](../images/01-why.gif "When the API is too much trouble...") <!-- .element: class="fragment" data-fragment-index="3" -->

Because f** that's why! <!-- .element: class="fragment" data-fragment-index="2" -->

---

## Benefits of good API design

* better human and machine consumption <!-- .element: class="fragment" -->
  * humans: good end user API documentation means better acceptance
  * machines: better testability, reusability and reliability
* contract between backend and frontend <!-- .element: class="fragment" -->
  * hard to change (bc breaks)
  * minimise legacy payload

---

## API specification contents 

* Metadata <!-- .element: class="fragment" -->
* Versioning <!-- .element: class="fragment" -->
* Caching <!-- .element: class="fragment" -->
* Authorization (access policy definition) <!-- .element: class="fragment" -->
* Authentication (identity verification) <!-- .element: class="fragment" -->
* Request methods and parameters <!-- .element: class="fragment" -->
* Response status and payload <!-- .element: class="fragment" -->
* Error handling <!-- .element: class="fragment" -->
