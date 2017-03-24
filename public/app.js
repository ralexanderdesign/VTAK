angular.module("sentimently", [
  "sentimently.home",
  'sentimently.tone',
  'sentimently.render',
  "ui.router"
])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: './templates/home.html',
        controller: 'HomeController',
        data: {
           bodyClass: 'home'
       }
      })
      .state('tweet', {
        url: '/tweet',
        templateUrl: './templates/tweet.html',
        controller: 'HomeController',
        data: {
          bodyClass: 'default'
        }
      })
      .state('user', {
        url: '/user',
        templateUrl: './templates/user.html',
        controller: 'HomeController',
        data: {
          bodyClass: 'default'
        }
      })
      .state('archive', {
        url: '/archive',
        templateUrl: './templates/archive.html',
        controller: 'HomeController',
        data: {
          bodyClass: 'default'
        }
      })
  })
