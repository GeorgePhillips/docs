---
layout: container
---

<ul>
	{% for doc in site.resources %}
		<li><a href="{{ doc.url }}">{{ doc.method }} {{ doc.resource }}</a></li>
	{% endfor %}
</ul>
