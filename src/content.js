
const observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		const newNodes = mutation.addedNodes;
		if (newNodes !== null) {

			const nodes = document.querySelectorAll('.fbUserPost');
			[...nodes].map((element) => {
				var text = element ? element.textContent.toLowerCase() : '';
				if (text &&  text.indexOf('sarahah') >= 0 && text.indexOf('sarahah') >= 0 && element.style.display != 'none') {
					element.style.display = 'none';
				}

			})
		}
	});
});

observer.observe(document, {
	childList: true,
	subtree: true,
	attributes: false,
	characterData: false,
});
