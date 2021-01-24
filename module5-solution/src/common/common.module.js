(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://unique-name-heroku.herokuapp.com') // this is my heroku app url
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
