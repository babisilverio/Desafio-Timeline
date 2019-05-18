angular.module('timeline')
    .service('TimelineService', function ($http, $q) {
        let url = 'https://storage.googleapis.com/dito-questions/events.json'

        this.getHistory = function () {
            let deferred = $q.defer();

            $http.get(url).then(function (returnApi) {
                deferred.resolve(returnApi.data);
            }).catch(function (error) {
                deferred.reject('Erro ao executar o serviço');
            })

            return deferred.promise;
        }
})