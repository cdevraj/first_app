app.controller('EventsCtrl', ['$scope', 'Event', function($scope, Event){
	$scope.events = {} //not compulsary to declare
	$scope.addEvent = function() {
		if (!valid()) { return false; }

		Event.saveData().save($scope.event,
			function(response, _headers) {
				$scope.events.push(response);
			},
			function(response) {
				alert('Errors: ' + response.data.errors.join('. '));
			}
			);

		$scope.event = {};
	};
	valid = function() {
		return !!$scope.event &&
		!!$scope.event.name && !!$scope.event.event_date &&
		!!$scope.event.description && !!$scope.event.place;
	};

  $scope.filterEvents = function(){
  	Event.searchData().search({query: $scope.search}, function(response, _headers){
  		$scope.events = response;
  	});
  };
  $scope.filterEvents();

 // form inline edit 
 $scope.editing = {};
	$scope.toggleForm =  function(event){
		if(event.id === $scope.editing.id){
			return 'form';
		}else{
			return 'row';
		}
	};

	$scope.editEvent = function(event) {
		$scope.editing = angular.copy(event);
	}
 $scope.updateEvent = function(index) {
    Event.updateData().update($scope.editing,
      function(response, _headers) {
        $scope.events[index] = angular.copy($scope.editing);
        $scope.hideForm();
      },
      function(response) {
        alert('Errors: ' + reponse.data.errors.join('. '));
      }
    );
  };

  $scope.hideForm = function() {
    $scope.editing = {};
  };
}]);