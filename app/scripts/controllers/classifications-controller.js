'use strict';

angular.module('hacktagApp')
  .controller('ClassificationCtrl', function ClassificationCtrl($scope, classifications) {
    $scope.classifications = classifications;

    $scope.bubbleSelected = false;
    angular.forEach($scope.classifications, function(b) {
      if (b.selected) $scope.bubbleSelected = true;
    });

    $scope.toggle = function(bubble) {
      if (bubble.selected) {
        bubble.selected = false;
        $scope.bubbleSelected = false;
      } else {
        angular.forEach($scope.classifications, function(b) {
          b.selected = false;
        });
        bubble.selected = true;
        $scope.bubbleSelected = true;
      }
    };
  });