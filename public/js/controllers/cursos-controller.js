angular.module('coursin')
	.controller('CursosController', function ($scope, cursos) {
		$scope.cursos = [];
		$scope.ready = false;
		cursos.listarCursos().then(function (data) {
			$scope.cursos = data.data.data;
			$scope.ready = true;
		}, function (erro) {
			alert('erro ao tentar obter a lista de cursos.');
		});
	});