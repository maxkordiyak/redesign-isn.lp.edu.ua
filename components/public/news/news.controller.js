(function () {
"use strict";

angular.module('public')
.controller('DemoController', ['$window','$scope','$http', DemoController]);

function DemoController($window, $scope, $http) {

    $scope.articles1 = [];
    $scope.articles2 = [];

      performSearchRequest($scope, $http, 31);

}

function performSearchRequest ($scope, $http, $limit) {

var url = "https://api.reddit.com/hot?after=" +''+ "&limit=" + $limit;


$http({
method: 'GET',
url: url
}).then(function successCallback(response) {
console.log(response.data);


var columnIndex = (($scope.articles1.length > $scope.articles2.length) ? 1 : 0);

var articles = response.data.data.children;

for (var i = 0; i < articles.length; i++) {
  if(columnIndex % 2 == 0) {
      $scope.articles1.push(articles[i]);
  } else {
      $scope.articles2.push(articles[i]);
  }

  columnIndex++;
}

}, function errorCallback(response) {

});



}



})();
