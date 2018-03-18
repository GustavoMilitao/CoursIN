angular.module('coursin', ['ngRoute','coursinServicos', 'coursinDiretivas'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/cursos.html',
			controller: 'CursosController'
		});

		$routeProvider.when('/curso/:idCurso', {
			templateUrl: 'partials/curso.html',
			controller: 'CursoController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});