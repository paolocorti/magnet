'use strict';

angular.module('magnetApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
