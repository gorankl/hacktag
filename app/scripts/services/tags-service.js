'use strict';

angular.module('hacktagApp')
  .service('Tags', function Tags($http, tags, classifications) {

    var search = function() {

      var classificationIds = "";
      angular.forEach(classifications, function(b) {
        if (b.selected) {
          classificationIds = b.classifications;
        }
      });

      var url = "http://d1556/SEEK.Employment.API.Public/jobs/search?location=1002&classification=" + classificationIds + "&include=facets,nojobs&nothacktags=hotel,bakery&callback=JSON_CALLBACK";

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