'use strict';

angular
  .module('hacktagApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'itemSwipe'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html'
      })
      .when('/classification', {
        templateUrl: 'views/intro.html'
      })
      .when('/knockout', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
