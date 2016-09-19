angular.module("listPeople").controller("peopleCtrl", function ($scope, $http) {
	$scope.app = "People List";
	$scope.screenResolution = ["Full Hd", "HD", "Wide VGA"];

	$http.get("rest/people").then(function(response) {
		$scope.peoples = response.data;
	});
});