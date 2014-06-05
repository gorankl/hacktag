'use strict';

angular.module('hacktagApp')
  .controller('TagsCtrl', function Tags($scope, Tags, tags) {

    $scope.removedTags = [];

    Tags.search();
    $scope.tags = tags;

    $scope.removeTag = function(tag) {
      $scope.removedTags.push(tag);
    }



  });