angular.module("myApp", [
  "sentiment.ly",
  "ui.router"
])
.run([
  "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams){
    $rootScope.$state = $state;
    return $rootScope.$stateParams = $stateParams;
  }
])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: './templates/home.html',
        controller: 'sentimentController',
      })
      .state('tweet', {
        url: '/tweet',
        templateUrl: './templates/tweet.html',
        controller: 'sentimentController',
      })
      .state('user', {
        url: '/user',
        templateUrl: './templates/user.html',
        controller: 'sentimentController',
      })
      .state('archive', {
        url: '/archive',
        templateUrl: './templates/archive.html',
        controller: 'sentimentController',
      })
  })
