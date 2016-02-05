
/**
         * @ngdoc object
         * @name App Config
         * @description Application Routing Provider
        **/

app.config(function ( $routeProvider ) {
  $routeProvider
      .when('/login', {
      templateUrl: 'dev/login/template.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
  .when('/register', {
      templateUrl: 'dev/register/template.html',
      controller: 'RegisterationCtrl',
      controllerAs: 'registeration'
    })
  .when('/dashboard', {
      templateUrl: 'dev/dashboard/template.html'      
    })
    .otherwise({
      redirectTo: '/login'
    });
});