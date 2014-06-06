'use strict';

angular.module('hacktagApp')
  .controller('ClassificationCtrl', function ClassificationCtrl($scope, classifications) {
    $scope.classifications = classifications;
  });