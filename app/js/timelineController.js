angular.module('timeline')
    .controller('TimelineController', function ($scope, TimelineService) {
       
        TimelineService.getHistory().then(function (returnApi) {
            console.log(returnApi);
            $scope.historicos = returnApi.events;

            $scope.events = [{
                badgeClass: 'basic',
                badgeIconClass: 'glyphicon-check',
                title: 'First heading',
                content: 'Some awesome content.'
              }, {
                badgeClass: 'basic',
                badgeIconClass: 'app/icons/check.svg',
                title: 'Second heading',
                content: 'More awesome content.'
              }];
        })
    })