'use strict';

angular.module('hacktagApp')
  .service('Jobs', function Jobs($http, jobs, tags) {

    var search = function() {

      var removedHacktags = "nothacktags=";

      angular.forEach(tags.removedTags, function(tag){
        removedHacktags += tag.description + ",";
        console.log(removedHacktags);
      });


      var url = "http://d1556/SEEK.Employment.API.Public/jobs/search?classification=1212&" + removedHacktags + "&callback=JSON_CALLBACK";

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