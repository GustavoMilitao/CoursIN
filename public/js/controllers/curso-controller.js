angular.module('coursein')
	.controller('CursoController',
		['$scope', 'coursinServicos', '$routeParams',
			function ($scope, $routeParams, cursos) {

				$scope.curso = {};

				$scope.getStartTime = function () {
					return new Date($scope.curso.start);
				}

				$scope.getEndTime = function(){
					return new Date($scope.curso.finish);
				}

				$scope.getDifTime = function(){}

			}]);