'use strict';

/**
 * @ngdoc function
 * @name authenticationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the authenticationApp
 */
angular.module('authenticationApp',[ 'ui.router'])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
