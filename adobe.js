'use strict';
(function() {
  var Adobe = Adobe || {};
	var Model = Adobe.Model = function() {
		this.attributes = {};
		this.initialize.apply(this, arguments);
	};
	Model.fn = Model.prototype;
	extend(Model.fn, {
		initialize: function() {},
		set: function(obj) {
			extend(this.attributes, obj);
		},
		get: function(name) {
			return this.attributes[name];
		}
	});

	var Collection = Adobe.Collection = function() {
		this.models = [];
		this._byIds = {};
		this.initialize.apply(this, arguments);
	};
	Collection.fn = Collection.prototype;
	extend(Collection.fn, {
		initialize: function() {},
		get: function(id) {
			return this._byIds[id];
		},
		add: function(model) {
			this.models.push(model);
			var id = model.get('id');
			if (id) this._byIds[id] = model;
		},
		fetch: function(options) {
			var success = options.success;
			var that = this;
			options.success = function(data, res) {
				var result = JSON.parse(data);
				for (var index in result) {
					var model = result[index];
					var todo = new that.model();
					todo.set(model);
					that.models.push(todo);
				}
				success(that);
			};
			$.ajax({
				url: options.url,
				type: 'GET',
				success: options.success
			});
		},
		each: function(func) {
			for (var i in this.models) {
				var model = this.models[i];
				func(model);
			}
		}
	});

	var View = Adobe.View = function() {
		this.initialize.apply(this, arguments);
		this.bindEvents();
	};
	View.fn = View.prototype;
	extend(View.fn, {
		initialize: function() {},
		bindEvents: function() {
			var events = this.events || {};
			for (var e in events) {
				var arr = e.split(/\s+/);
				var eventName = arr[0];
				var el = $(arr[1]);
				var method = this[events[e]];
				el.bind(eventName, method);
			}
		}
	});

	View.extend = Collection.extend = Model.extend = function(options) {
		var parent = this;
		var child = function() {
			parent.apply(this, arguments);
		};
		var F = function() {};
		F.prototype = parent.prototype;
		child.prototype = new F();
		if (options) extend(child.prototype, options);
		child.prototype.__super__ = parent.prototype;
		return child;
	};

	function extend(obj) {
		var protoProps = Array.prototype.slice.call(arguments, 1);
		for (var index in protoProps) {
			var proto = protoProps[index];
			for (var attr in proto) {
				obj[attr] = proto[attr];
			}
		}
		return obj;
	}
	this.Adobe = Adobe;
}).call(this);
