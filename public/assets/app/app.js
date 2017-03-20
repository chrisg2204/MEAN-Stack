'use strict';

let uiBootstrap = angular.module('ui.bootstrap');

	uiBootstrap.controller('panelCtlr', ($scope, $http) => {
		$scope.submitForm = () => {
			let encodedForm = [],
				formData = {
					userEmail: $scope.username,
					userPasswd: $scope.passwd
				};
				for (var i in formData) {
					let encodedKey = encodeURIComponent(i),
						encodedValue = encodeURIComponent(formData[i]);
							encodedForm.push(encodedKey + "=" + encodedValue);
				}
				encodedForm = encodedForm.join("&");
				$http({
					url: 'http://127.0.0.1:3000/users',
					method: 'POST',
					data: encodedForm,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
					}
				})
				.then(function successCallback(response) {
					console.log(response.data);
				},
				function errorCallback(response) {
					console.log(response);
				});
			}
		});
