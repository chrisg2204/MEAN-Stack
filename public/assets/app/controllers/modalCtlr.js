"use strict";

app.controller('modalCtlr', ($scope, $uibModal, $log) => {
	$scope.showModal = () => {
		$uibModal.open({
			templateUrl: '/assets/app/templates/modal.html',
			controller: 'modalDialogCtrl',
			backdrop: 'static',
			size: 'md',
			keyboard: false
		})
		.result.then((result) => {
			$log.info('Modal closes at: ' + new Date());
		}, () => {
			$log.info('Modal dismissed at: ' + new Date());
		});
	}
	
});