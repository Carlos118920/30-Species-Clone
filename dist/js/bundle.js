'use strict';

angular.module('species', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './frontend/views/home.html'
  });
});
"use strict";

angular.module("species").controller("homeCtrl", function ($scope) {

  $scope.test = "TEST WORKS!!!";
});
//# sourceMappingURL=bundle.js.map
