## API Specification Examples

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
    "http"
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
baseUri: http://api.todomvc.com

types:
  ...

...
```

---

## Examples

### API Blueprint

```markdown
FORMAT: 1A
HOST: http://api.todomvc.com

# TodoMVC API documentation

TodoMVC API is a Todo storage backend.

# Data Structures

...
```
