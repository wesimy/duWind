/**
 * @ngdoc controller
 * @name app.Controller:RegisterationCtrl
 * @description
 * 
 * Registeration Page Main Controller it handles the Registeration form validation and user registeration.
 **/


app.controller('RegisterationCtrl', ['$scope', '$location', 'RegistrationService', function ($scope, $location, RegistrationService) {
    console.log('Registeration Controller Init');
    // Default Variables
    $scope.User = {
        Forename: '',
        Surname: '',
        Sex: '',
        DOB: '',
        Email: '',
        Verifyemail: '',
        Password: ''
    };

    $scope.dt = '';

    /**
     * @ngdoc method
     * @name Register
     * @methodOf app.Controller:RegisterationCtrl
     * @description
     * 
     * Call the Registeration Service to add the user and redirect to dashboard or display an error
     * @param {json}
     *            user json object
     */

    $scope.Register = function (user) {
        if ($scope.registrationform.$valid) {
            console.log('Calling Save Data Service');
            RegistrationService.SaveData($scope.User).then(function (d) {
                if (d === true) {
                    // Clear The Form
                    $location.path("/dashboard");
                    // Redirect To Login

                } else {
                    console.log('Some bad stuff happened');
                }
            });
        }
    }

    /**
     * @ngdoc method
     * @name ClearForm
     * @methodOf app.Controller:RegisterationCtrl
     * @description
     * 
     * Clears Form Inputs and reset status and user object
     * @param {json}
     *            user json object
     */
    $scope.ClearForm = function () {
        $scope.User = {};
        $scope.registrationform.$setPristine();
    }

}]);