(function () {
	if(typeof Function.prototype.bind === 'undefined'){
		Function.prototype.bind = function (thisArg) {
			var fn = this,
				slice = Array.prototype.slice,
				args = slice.call(arguments,1);

			return function () {
				return fn.apply(thisArg,args.concat(slice.call(arguments)));
			};
		};
	}
}());