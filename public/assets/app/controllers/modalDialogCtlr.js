"use strict";

app.controller('modalDialogCtrl', ($scope, $http, $uibModalInstance) => {

	$scope.submitUserForm = () => {
		if ($scope.userForm.$valid) {
			let encodedForm = [],
				formData = {
					userEmail: $scope.textEmail,
					userPasswd: $scope.textPasswd,
					userPasswdConfirm: $scope.textPasswdConfirm,
					userFirstName: $scope.textFirstName,
					userLastName: $scope.textLastName
				};
			for (let i in formData) {
				let encodedKey = encodeURIComponent(i),
					encodedValue = encodeURIComponent(formData[i]);
				encodedForm.push(encodedKey + '=' + encodedValue);
			}
			encodedForm = encodedForm.join('&');

			$http({
				url: '/users',
				method: 'POST',
				data: encodedForm,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				}
			})
			.then(function successCallback(success) {
				alert(`Usuario ${success.data._id} agregado exitosamente.`);
				$uibModalInstance.close();
			},
			function errorCallback(err) {
				console.log(err);
			});
		} else {
			console.log('not valid');
		}
	}

	$scope.cancel = () => {
		$uibModalInstance.dismiss('cancel');
	}

});