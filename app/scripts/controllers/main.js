'use strict';

angular.module('hacktagApp')
  .controller('MainCtrl', function ($scope, Tags) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Tags.search();

  });
