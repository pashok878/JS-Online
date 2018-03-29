var div = document.querySelectorAll('*')
console.log()

var elem = document.querySelector('*')

var texts = 0, comments = 0

textAndCommentNodes(elem)

console.log("Tags: " + div.length + "\nText nodes: " + texts + "\nComment nodes: " + comments)


function textAndCommentNodes(node){
	var textAndCommNodes = []

	  for (node = node.firstChild; node; node = node.nextSibling) {
	    if (node.nodeType == 3) {
	    	texts++
	    } else if (node.nodeType == 8) {
	    	comments++
	    } else {
	    	textAndCommentNodes(node)
	    } 
	  }
}
