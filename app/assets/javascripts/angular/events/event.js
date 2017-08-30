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
		},
		deleteData: function(){
			return $resource('/api/events/:id.json', { id: '@id' }, {
				delete: {
					action: 'destroy',
					method: 'DELETE',
					url: '/api/events/:id.json',
					params: {
						id: '@id'
					}	
				}
			});	
		},
		sortData: function(){
			return $resource('/api/events/:id.json',{id: '@id'} ,{
				sort: {
					method: 'GET',
					isArray: true,
					url: '/api/events.json',
					params: '@sortable'
				}
			});
		}
	}
}]);

