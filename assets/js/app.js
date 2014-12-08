var nodes = document.querySelectorAll('samp')
for (var i = 0, l = nodes.length; i < l; i++) {
	var node = nodes[i]
	node.innerHTML = node.innerHTML.replace(/^\s+|\s+$/g, '')
	if (/(^|\s)lang-/.test(node.className)) {
		hljs.highlightBlock(node)
	}
}
