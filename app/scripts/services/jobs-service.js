'use strict';

angular.module('hacktagApp')
  .service('Jobs', function Jobs($http, jobs) {

    var search = function() {
      var url = "http://public.api.seek.com.au.dev/v2/jobs/search?location=1000&keywords=bar&callback=JSON_CALLBACK";

      $http.jsonp(url).success(function(data) {
        console.log(data);
        console.log(data.data[0]);
        jobs.data = data.data;
      });

    };

    return {
      search: search
    };

  });