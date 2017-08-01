(function() {
"use strict";

angular.module('common', [])



// configuring $http service provider

.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
