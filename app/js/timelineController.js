angular.module('timeline')
    .controller('TimelineController', function ($scope, TimelineService) {
       
        TimelineService.getHistory().then(function (returnApi) {
            console.log(returnApi);
            $scope.history = returnApi;
        })
    })