'use strict';

angular.module('hacktagApp')
  .value('classifications', [
    {
      name: "Customer Facing",
      classifications: "1,2,3",
      x: "15",
      y: "15"
    },
    {
      name: "Some other bubble",
      classifications: "3,4,5",
      x: "50",
      y: "50"
    }
  ]

  );