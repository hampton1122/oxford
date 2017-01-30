angular.module('app', [])
    .controller('oxfordDataController', ['$scope','$https', function($scope,$https) {

        $scope.searchText = "pituitary";

        $https.get(
          {
            method:'GET',
            url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + $scope.searchText, 
            headers:
              {
                'content-type': 'application/json',
                'app_key': '2754542991433e83db6232d9fd2ca66d',
                'app_id': '5c5342d3'
              }
            })
            .success(function (data) {
                $scope.results = data;
                console.log($scope.results);
                loadRepos();
            });

        var loadRepos = function () {
            $https.get($scope.results.id)
                .success(function (data) {
                    $scope.results = data;
                });
        };

}]);