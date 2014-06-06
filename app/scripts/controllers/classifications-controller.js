'use strict';

angular.module('hacktagApp')
  .controller('ClassificationCtrl', function ClassificationCtrl($scope, classifications) {
    $scope.classifications = classifications;

    $scope.toggle = function(bubble) {
      if (bubble.selected) {
        console.log("bubble selected");
        bubble.selected = false;
      } else {
        console.log("bubble not selected");
        angular.forEach($scope.classifications, function(b) {
          b.selected = false;
        });
        bubble.selected = true;
      }
    };
  });