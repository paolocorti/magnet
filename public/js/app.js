'use strict';

angular.module('magnetApp', [])
  .config(function ($routeProvider,$locationProvider) {
    console.log($routeProvider)
    $routeProvider
      .when('/', {
        templateUrl: 'views/main',
        controller: 'MainCtrl'
      })
      .when('/login-form', {
        templateUrl: 'views/login',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
