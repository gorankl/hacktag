'use strict';

angular.module('hacktagApp')
  .service('Jobs', function Jobs($http, jobs, tags) {

    var search = function() {

      var removedHacktags = "&Q=";



      angular.forEach(tags.removedTags, function(value, key){
        console.log("aaaaaa", key, value);
      });


      var url = "https://api.seek.com.au.web-indigo-int1/v2/jobs/search?location=1000&keywords=bar" + removedHacktags + "&callback=JSON_CALLBACK";

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