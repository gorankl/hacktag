'use strict';

angular.module('hacktagApp')
  .controller('JobsCtrl', function JobsCtrl($scope, jobs, Jobs) {

    $scope.removedTags = [];

    Jobs.search();
    $scope.jobs = jobs;

  });