,
  "dataGroups": [{
    "name": "api-freshness",
    "urls": [
      "/new"
    ],
    "cacheConfig": {
      "maxSize": 100,
      "maxAge": "1h",
      "timeout": "1m",
      "strategy": "freshness"
    }
  }, {
    "name": "api-performance",
    "urls": [
      "/",
      "/jobs",
      "/show",
      "/ask"
    ],
    "cacheConfig": {
      "maxSize": 100,
      "maxAge": "1d",
      "strategy": "performance"
    }
  }]