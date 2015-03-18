// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  // $stateProvider
  //   .state('home', {
  //     url: "/",
  //     templateUrl: "templates/video.html",
  //     controller: 'videoCtrl'
  //   })
  //   .state('slide', {
  //     url: "/:slideId",
  //     tempalteUrl: "templates/slide.html",
  //     controller: 'mainCtrl'
  //   });
  // // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/');
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/home.html",
      controller: 'mainCtrl as main'
    })
    .state('app.video', {
      url: "/video",
      templateUrl: "templates/video.html",
      controller: 'videoCtrl'
    })
    .state('app.rcp', {
      url: "/rcp",
      templateUrl: "templates/rcp.html"
    })
    .state('app.slide-1', {
      url: "/slide-1",
      templateUrl: "templates/slide-1.html"
    })
    .state('app.slide-2', {
      url: "/slide-2",
      templateUrl: "templates/slide-2.html"
    })
    .state('app.slide-3', {
      url: "/slide-3",
      templateUrl: "templates/slide-3.html"
    })
    .state('app.slide-4', {
      url: "/slide-4",
      templateUrl: "templates/slide-4.html"
    })
    .state('app.slide-5', {
      url: "/slide-5",
      templateUrl: "templates/slide-5.html"
    })
    .state('app.slide-6', {
      url: "/slide-6",
      templateUrl: "templates/slide-6.html"
    })
    .state('app.slide-7', {
      url: "/slide-7",
      templateUrl: "templates/slide-7.html"
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/video');
});
