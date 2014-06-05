'use strict';

angular.module('hacktagApp')
  .controller('TagsCtrl', function Tags($scope, Tags, tags, $timeout) {

    Tags.search();
    $scope.tags = tags;

    $timeout(function() {
      console.log($scope.tags);
    }, 3000)


  });