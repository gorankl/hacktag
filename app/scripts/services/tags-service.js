'use strict';

angular.module('hacktagApp')
  .service('Tags', function Tags($http, tags) {

    var search = function() {
      var url = "http://d1556/SEEK.Employment.API.Public/jobs/search?classification=1212&include=facets,nojobs&nothacktags=hotel,bakery&callback=JSON_CALLBACK";

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