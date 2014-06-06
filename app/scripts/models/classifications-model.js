'use strict';

angular.module('hacktagApp')
  .value('classifications', [
    {
      name: "Customer Facing",
      classifications: "1,2,3",
      style: "top: 100px;left: 400px;height: 300px;width: 300px;"
    },
    {
      name: "Some other bubble",
      classifications: "3,4,5",
      style: "top: 50px;left: 215px;"
    }
  ]

  );