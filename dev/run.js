app.run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection);
    
  })
});