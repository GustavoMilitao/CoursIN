angular.module('coursinServicos')
    .factory("cursos", function ($http) {

        var service = {};
        service.listarCursos = function () {
            return $http.get('https://git.sebraemg.com.br/publico/test-frontend/raw/master/api/courses.json', { withCredentials: true })
        }

        return service;
    });