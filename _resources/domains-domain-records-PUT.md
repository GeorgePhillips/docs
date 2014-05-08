---
layout: resource
permalink: /PUT/domains/:domain/records/

method: PUT
resource: /domains/:domain/records
summary: Replace all DNS records for a domain with a new set of records. This is effectively DELETE on each exisiting record and POST for each new record.
---

# Request

~~~
{{ page.method }} {{ page.resource }}
~~~

# Response

~~~
200
~~~
