angular.module('coursin')
	.controller('CursoController',

		function ($scope, $routeParams, cursos) {
			$scope.cursos = [];
			$scope.ready = false;
			cursos.listarCursos().then(function (data) {
				$scope.cursos = data.data.data;
				$scope.curso = $scope.cursos[$routeParams.idCurso];
				$scope.startTime = $scope.getStartTime();
				$scope.endTime = $scope.getEndTime();
				$scope.diffTime = $scope.getDiffTime();
				$scope.ready = true;
			}, function (erro) {
				alert('erro ao tentar obter a lista de cursos.');
			});

			$scope.startTime = '';
			$scope.endTime = '';
			$scope.diffTime = '';

			$scope.getStartTime = function () {
				return new Date($scope.curso.start).toLocaleTimeString('pt-BR');
			}

			$scope.getEndTime = function () {
				return new Date($scope.curso.finish).toLocaleTimeString('pt-BR');
			}

			$scope.getDiffTime = function () {
				var difference = new Date($scope.curso.finish).getTime() - new Date($scope.curso.start).getTime();

				var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
				difference -= hoursDifference * 1000 * 60 * 60

				var minutesDifference = Math.floor(difference / 1000 / 60);
				difference -= minutesDifference * 1000 * 60

				return hoursDifference + ':' + minutesDifference.toString().padStart(2,'0');
			}

		});