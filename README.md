This module lets you easily detect if we're running npm4 for publish operations.

```json
"scripts": {
  "prepublish": "require-npm4-to-publish",
  "prepublishOnly": "work-that-should-only-happen-on-publish-and-not-install"
},
```