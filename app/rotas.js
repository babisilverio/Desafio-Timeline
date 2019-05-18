angular.module('timeline')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
      
      $stateProvider
      .state('timeline', {
          url: '/',
          templateUrl: './html/timeline.html',
          controller: 'TimelineController'
        })
      
      $urlRouterProvider.otherwise('/');

  });
