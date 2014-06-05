'use strict';

angular.module('hacktagApp')
  .controller('TagsCtrl', function TagsCtrl($scope, Tags, tags) {

    Tags.search();
    $scope.tags = tags;

    $scope.removeTag = function(tag) {
      $scope.tags.facets.splice($scope.tags.facets.indexOf(tag), 1);
      tags.removedTags.push(tag);
    }

  });