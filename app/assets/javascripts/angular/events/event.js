app.factory('Event', ['$resource', function($resource){
	return {
		searchData : function (){
			return $resource('/api/events/:id.json', {id: '@id'}, {
				search: {
					method: 'GET',
					isArray: true,
					url: 'api/events/search.json',
					params: {
						query: '@query'
					}
				}
			})
		},
		updateData : function () {
			return $resource('/api/events/:id.json', { id: '@id' }, {
		    update: { method: 'PUT' }
		   });
		},
		saveData : function () {
			return $resource('/api/events.json', {
		    save: { method: 'POST' }
		  });
		}
	}
}]);

