'use strict';

/**
 * @ngdoc overview
 * @name skeletonApp
 * @description
 * # skeletonApp
 *
 * Main module of the application.
 */
angular
  .module('skeletonApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('ui', {
        url: '',
        templateUrl: 'views/main.html'
      });
  });
