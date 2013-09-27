/*
 * client/js/main/index.js
 */

'use strict';

var angular = require('angular'),
    rhtml = require('rhtml');

var ngModule = angular.module('app.main', []);

// Routes
ngModule.config(function ($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/',
      views: {
        '@': {
          template: rhtml('./templates/home.html'),
          controller: 'HomeCtrl'
        }
      },
      resolve: {
        features: function ($http) {
          return $http.get('/api/features').then(function (res) {
            return res.data.result;
          });
        }
      }
    });
});

// Controllers
require('./controllers/home')(ngModule);
