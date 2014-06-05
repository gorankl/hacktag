'use strict';

angular.module('hacktagApp')
  .service('Tags', function Tags($http, tags) {

    var search = function() {
      var url = "https://api.seek.com.au.web-indigo-int1/v2/jobs/search?include=facets&location=1000&keywords=bar&callback=JSON_CALLBACK";

      $http.jsonp(url).success(function(data) {
        console.log(data);
        console.log(data.facets[0]);
        tags.facets = data.facets[0].items;
      });

    };

    return {
      search: search
    };

  });