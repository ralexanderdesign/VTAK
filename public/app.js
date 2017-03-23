angular.module("myApp", [
  "sentiment.ly",
  "ui.router"
])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: './templates/home.html',
        controller: 'sentimentController',
        data: {
           bodyClass: 'home'
       }
      })
      .state('tweet', {
        url: '/tweet',
        templateUrl: './templates/tweet.html',
        controller: 'sentimentController',
        data: {
          bodyClass: 'default'
        }
      })
      .state('user', {
        url: '/user',
        templateUrl: './templates/user.html',
        controller: 'sentimentController',
        data: {
          bodyClass: 'default'
        }
      })
      .state('archive', {
        url: '/archive',
        templateUrl: './templates/archive.html',
        controller: 'sentimentController',
        data: {
          bodyClass: 'default'
        }
      })
  })
