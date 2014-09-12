var Kernel = Kernel || (function () {

	var queue = [];
	
	var addToQuere = function(onDone){
		
	};
	var _r = new Object();
	
	var html = document.getElementsByTagName('html')[0];
	var env;
	_r.env = env = (html.hasAttribute('env') ? html.getAttribute('env') : 'prod');
	
	require(["queue"], function() {
		var queue = new TaskQueue();
		alert('ok');
		require(["config/config_"+env], function(config) {
			_r.config = config;
		});

		require(["config/routing_"+env], function(routing) {
			_r.routing = routing;
		});
		
		require(["config/security"], function(security) {
			_r.security = security;
		});

		_r.bundles = [
		    'angular/angular.min',
		    'angular/angular-route.min'
		];
		
		if(env == "dev"){
			
		}
		
		
	});
	
	
	
	
	return _r;
})();