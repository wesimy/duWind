/**
@ngdoc overview
@name Technical Exercise
@description User Authentication Exercise
**/


'use strict';

/**
    *@ngdoc  TechnicalExercise Application
    *@name App
    *@description  
    *
    */
var app = angular.module('TechnicalExercise', [
  'ngSanitize',
    'ngRoute',
  'ngSanitize',
    'ngAnimate',
    'ngMessages',
    'ui.bootstrap'
]);




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
app.run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection);
    
  })
});
app.controller('LoginCtrl', ['$scope','$location','LoginService',function ($scope, $location, LoginService) {
  console.log('Login Controller Init');
    
    // Default Variables
    $scope.User = {
        Username: '',
        Password: ''
    };
    
    
    /**
         * @ngdoc object
         * @id RegistrationSaveData
         * @name SubmitData
         * @description
         * This Method submits the form data to the Registration Service
        **/
    $scope.Login = function(data){
        if($scope.loginform.$valid){
            console.log('Calling Save Data Service');
            LoginService.AuthUser($scope.User).then(function(d){     
                   if(d === true){
                    // Redirect To Login
                    $location.path( "/dashboard" )   
                   }
                    // Do Something
                   else{
                       console.log('user is not valid');
                    }
            
            });
        }
    }
    
   
    
}]);

app.service("LoginService", ['$http', '$q', function ($http, $q)
	{
        /**
         * @ngdoc object
         * @id AuthUser
         * @name AuthUser
         * @description
         * This Method submits user info to the server and returns auth (true / false ) .
        **/
		this.AuthUser = function (u)
		{
            
            // Pass the data to the server with a defer promise and handle success / fail call backs
            var deferred = $q.defer();
            
            console.log('LoginService - AuthUser:');
            console.log(u);
            
            // To Be Replaced with $http call
            // On Success
            deferred.resolve(true);
            // On Error
            //deferred.resolve(false);
            return deferred.promise;
		};
        
		
	}]);
app.controller('RegisterationCtrl', ['$scope','$location','RegistrationService',function ($scope, $location,RegistrationService) {
  console.log('Registeration Controller Init');
    // Default Variables
    $scope.User = {
        Forename: '',
        Surname: '',
        Sex:'',
        DOB:'',
        Email:'',
        Verifyemail:'',
        Password:''
    };
    
    $scope.dt = '';
    
    /**
         * @ngdoc object
         * @id RegistrationSaveData
         * @name SubmitData
         * @description
         * This Method submits the form data to the Registration Service
        **/
    $scope.Register = function(data){
        $scope.message = '';
        
        if($scope.registrationform.$valid){
            console.log('Calling Save Data Service');
            RegistrationService.SaveData($scope.User).then(function(d){
                    
                   if(d === true){
                    // Clear The Form
                     $location.path( "/dashboard" );  
                    // Redirect To Login
                       
                   }
                   
                   else{
                       console.log('Some bad stuff happened');
                    }
            
            });
        }
    }
    
    
    /**
         * @ngdoc object
         * @id RegistrationClearForm
         * @name ClearForm
         * @description
         * This Method clears the registration form and object.
        **/
    $scope.ClearForm = function(){
        $scope.User = {};
        $scope.registrationform.$setPristine();
        
    }
    
}]);

app.directive('verify', function() {
  return {
    restrict: 'A', // only activate on element attribute
    require: '?ngModel', // get a hold of NgModelController
    link: function(scope, elem, attrs, ngModel) {
      if(!ngModel) return; // do nothing if no ng-model

      // watch own value and re-validate on change
      scope.$watch(attrs.ngModel, function() {
        validate();
      });

      // observe the other value and re-validate on change
      attrs.$observe('verify', function (val) {
        validate();
      });

      var validate = function() {
        // values
        var val1 = ngModel.$viewValue;
        var val2 = attrs.verify;

        // set validity
        ngModel.$setValidity('verify', ! val1 || ! val2 || val1 === val2);
      };
    }
  }
});


app.directive('passwordToggle',function($compile){
        return {
            restrict: 'A',
            scope:{},
            link: function(scope,elem,attrs){
                scope.tgl = function(){ elem.attr('type',(elem.attr('type')==='text'?'password':'text')); }
                var lnk = angular.element('<div class="input-group-addon"><input type="checkbox" id="showpass" data-ng-click="tgl()"/> <label for="showpass"><small>Show</small></label></div>');
                $compile(lnk)(scope);
                elem.wrap('<div class="input-group"/>').after(lnk);
            }
        }
    });
app.service("RegistrationService", ['$http', '$q', function ($http, $q)
	{
        /**
         * @ngdoc object
         * @id SubmitData
         * @name SubmitData
         * @description
         * This Method takes a json data object and pass it to the server.
        **/
		this.SaveData = function (d)
		{
            
            // Pass the data to the server with a defer promise and handle success / fail call backs
            var deferred = $q.defer();
            
            console.log('RegistrationService - SaveData:');
            console.log(d);
            
            // To Be Replaced with $http call
            // On Success
            deferred.resolve(true);
            // On Error
            //deferred.resolve(false);
            return deferred.promise;
		};
        
		
	}]);