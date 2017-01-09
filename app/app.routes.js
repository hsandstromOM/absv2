var uiRouter = require('angular-ui-router');

var absApp = angular.module('absRouter', ['ui.router']);

absApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode({enabled: true});

    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: './app/components/home/homeView.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
      })

      .state('team', {
        url: '/team',
        templateUrl: './app/components/team/team.html',
        controller: 'teamController',
        controllerAs: 'teamCtrl'
      })

      .state('work', {
        url: '/work',
        templateUrl: './app/components/work/workView.html',
        controller: 'WorkController',
        controllerAs: 'workCtrl'
      })

      .state('workDetail', {
        url: '/work-detail/:workDetailTitle',
        templateUrl: './app/components/workDetail/workDetailView.html',
        controller: 'WorkController',
        controllerAs: 'workCtrl',
        params: {
          workID: null,
        },
      })

      .state('services', {
        url: '/services',
        templateUrl: './app/components/services/servicesView.html',
        controller: 'SerivesController',
        controllerAs: 'servicesCtrl'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: './app/components/contact/contactView.html',
        controller: 'ContactController',
        controllerAs: 'contactCtrl'
      })
});

require('./components/main/mainController');
require('./components/main/mainService');

require('./components/home/homeController');
require('./components/home/homeService');

require('./components/team/teamController');
require('./components/team/teamService');

require('./components/work/workController');
require('./components/work/workService');

require('./components/services/servicesController');
require('./components/services/servicesService');

require('./components/contact/contactController');
require('./components/contact/contactService');

require('./shared/trustUrl.filter.js');
