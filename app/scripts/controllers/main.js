'use strict';

/**
 * @ngdoc function
 * @name skeletonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skeletonApp
 */
angular.module('skeletonApp')
  .controller('MainCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log($rootScope);
  });
