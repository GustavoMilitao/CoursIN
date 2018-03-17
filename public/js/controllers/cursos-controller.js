angular.module('coursin')
	.controller('CursosController', function ($scope, cursos) {
			$scope.cursos = [];
			cursos.listarCursos().then(function (data) {
				$scope.cursos = data;
			}, function (erro) {
				alert('erro ao tentar obter a lista de cursos.');
			});
		});