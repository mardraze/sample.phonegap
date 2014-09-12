(function () {

	var TaskQueue = function() {
		var id = (new Date()).getTime();
		this.id = id;
		this.queue = [];
		this.EVENT = 'EVENT_TaskQueue_'+id;

		TaskQueue.prototype.add = function(task){
			this.queue.push(task);
		};
		
		TaskQueue.prototype.EVENT = 'EVENT_TaskQueue_'+id;
		
		window.TaskQueue = TaskQueue;
	}

}());
