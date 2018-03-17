angular.module('coursein')
	.controller('CursoController',
		['$scope', 'coursinServicos', '$routeParams',
			function ($scope, $routeParams, cursos) {

				$scope.curso = {};

			}]);