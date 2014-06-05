'use strict';

angular.module('hacktagApp')
  .controller('JobsCtrl', function JobsCtrl($scope, jobs, Jobs, tags, $interval) {

    Jobs.search();
    $scope.jobs = jobs;

    $scope.tags = tags;

    $scope.$watch('tags.removedTags.length', function() {
      Jobs.search();
      $scope.jobs = jobs;
    });

  });