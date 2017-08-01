(function() {
"use strict";

/**
 * Isn website module that includes the public module as a dependency
 */
angular.module('isn', ['public'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}
  console.log("app loaded at " + new Date())
})();
