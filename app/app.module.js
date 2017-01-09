var angular = require('angular');

var absApp = angular.module('absApp', [
  'absRouter',
  'ngResource',
  'slugifier',
  'ngSanitize',
  'contentful',
  'hc.marked'
]);

absApp.config(function(contentfulProvider) {

    contentfulProvider.setOptions({
      space: 'lxejsmju70ex',
      accessToken: '2ef82748feb6fd9e7d78f7103794d27612337c3499abc02d7f21c1fb4ee5c627'
    });

});

require('./app.routes.js');

require('angular-sanitize/angular-sanitize.js');
require('angular-slugify/angular-slugify.js');
require('angular-resource/angular-resource.js');
require('angular-contentful/dist/angular-contentful.js');
require('angular-marked/lib/angular-marked.js');
