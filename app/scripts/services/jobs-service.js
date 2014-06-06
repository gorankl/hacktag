'use strict';

angular.module('hacktagApp')
  .service('Jobs', function Jobs($http, jobs, tags, classifications) {

    var search = function() {

      var removedHacktags = "nothacktags=";

      angular.forEach(tags.removedTags, function(tag){
        removedHacktags += tag.description + ",";
        console.log(removedHacktags);
      });

      var classificationIds = "";
      angular.forEach(classifications, function(b) {
        if (b.selected) {
          classificationIds = b.classifications;
        }
      });


      var url = "http://d1556/SEEK.Employment.API.Public/jobs/search?location=1002&classification="+ classificationIds + "&" + removedHacktags + "&callback=JSON_CALLBACK";

      $http.jsonp(url).success(function(data) {
        console.log(data);
        console.log(data.data[0]);
        jobs.data = data.data;
        jobs.count = data.totalCount;
      });

    };

    return {
      search: search
    };

  });