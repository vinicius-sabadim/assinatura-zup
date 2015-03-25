(function () {
	'use strict';

	angular
		.module('app', []);
	
	angular
		.module('app')
		.controller('MainController', ['$scope', MainController]);

	function MainController($scope) {
		$scope.mostrarTelefone = true;
		$scope.local = 'riopreto';
	}
	
}());