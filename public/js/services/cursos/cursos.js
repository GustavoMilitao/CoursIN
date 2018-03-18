angular.module('coursinServicos')
    .factory("cursos", function ($http) {

        var service = {};
        service.listarCursos = function () {
            return $http({
                url: 'https://git.sebraemg.com.br/publico/test-frontend/raw/master/api/courses.json',
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });
        }

        return service;
    });