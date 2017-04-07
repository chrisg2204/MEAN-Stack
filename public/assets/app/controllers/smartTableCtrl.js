"use strict";

app.controller('smartTableCtrl', ($scope, $http) => {
	let arr = [];
	$http({
		url: '/users',
		method: 'GET'
	}).then(function successCallback(response) {
		$scope.data = response.data;

		for (let i = 0; i < $scope.data.length; i ++)  {
			arr[i] = $scope.data[i];
		}
	},
	function errorCallback(response) {
		console.log(response);
	});
	$scope.rowCollection = arr;

/*//add to the real data holder
$scope.addRandomItem = function addRandomItem() {
$scope.rowCollection.push(generateRandomItem(id));
id++;
};

//remove to the real data holder
$scope.removeItem = function removeItem(row) {
var index = $scope.rowCollection.indexOf(row);
if (index !== -1) {
$scope.rowCollection.splice(index, 1);
}*/

});