## Examples

### OpenAPI

```json
{
  "swagger": "2.0",
  "info": {
    "title": "TodoMVC",
    "description": "TodoMVC API is a Todo storage backend.",
    "version": "1.0.0"
  },
  "host": "api.todomvc.com",
  "schemes": [
    "https"
  ],
  "definitions": {},
  "paths": {}
}
```

---

## Examples

### RAML

```yaml
#%RAML 1.0
title: TodoMVC
description: TodoMVC API is a Todo storage backend.
version: 1.0.0
baseUri: https://api.todomvc.com

types:
  ...

...
```

---

## Examples

### API Blueprint

```markdown
FORMAT: 1A
HOST: https://api.todomvc.com

# TodoMVC API documentation

TodoMVC API is a Todo storage backend.

# Data Structures

...
```
