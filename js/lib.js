// general method
let app = {
	evts: {},
	search: {},
	testGo: {},
	log:{},
	rotate:{},
	article:{}
};
// core operations
app.get = function (selector) {
	return document.querySelector(selector);
};
