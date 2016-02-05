/**
 * @ngdoc controller
 * @name app.Controller:LoginCtrl
 * @description
 * 
 * Login Page Main Controller it handles the login form validation and user authentication.
 **/


app.controller('LoginCtrl', ['$scope', '$location', 'LoginService', function ($scope, $location, LoginService) {
    console.log('Login Controller Init');

    // Default Variables
    $scope.User = {
        Username: '',
        Password: ''
    };


    /**
     * @ngdoc method
     * @name Login
     * @methodOf app.Controller:LoginCtrl
     * @description
     * 
     * Call the Login Service to auth the user and redirect to dashboard or display an error
     * @param {json}
     *            user json object
     */

    $scope.Login = function (user) {
        if ($scope.loginform.$valid) {
            console.log('Calling Save Data Service');
            LoginService.AuthUser($scope.User).then(function (d) {
                if (d === true) {
                    // Redirect To Login
                    $location.path("/dashboard")
                }
                // Do Something
                else {
                    console.log('user is not valid');
                }

            });
        }
    }



}]);