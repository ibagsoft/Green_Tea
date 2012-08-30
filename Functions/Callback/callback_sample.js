//反模式
var findNodes = function () {
	var i = 10000,
		nodes = [],
		found;

	while(i){
		i -= 1;
		//found = document.getElementById(condition);
		nodes.push(found);
	}
	return nodes;
};

var hide = function (nodes) {
	var i = 0,max = nodes.length;
	for (; i >= 0; i--) {
		//nodes[i].style.display = 'none';
	};
}

hide(findNodes());

//callback 
var findNodes_callback = function (callback) {
	var i = 10000,
		nodes = [],
		found;

	if(typeof callback !== 'function'){
		callback = false;
	}

	while(i){
		i -= 1;

		//found = document.getElementById('page');

		if(callback){
			callback(found);
		}

		nodes.push(found);
	}

	return nodes;
};

var hide_callback = function (node) {
	//node.style.display = 'none';
};

findNodes_callback(hide_callback);

findNodes_callback(function(node){
	//node.style.display = 'block';
});