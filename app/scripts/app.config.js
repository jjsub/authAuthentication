'use strict';

angular.module('authenticationApp').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/'); /* Handel all the wrong urls request and redirect to home */

  $stateProvider

     .state('main', {
        url: '/',
        templateUrl: '/views/main.html'

    })

       .state('register', {
        url: '/register',
        templateUrl: '/views/register.html'

    });
  
}]);