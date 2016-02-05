/**
 * @ngdoc service
 * @name app.Service:RegistrationService
 * @description
 * this service contains all the registration services.
 **/
app.service("RegistrationService", ['$http', '$q', function ($http, $q)
    {
        /**
         * @ngdoc method
         * @name SaveData
         * @methodOf app.Service:RegistrationService
         * @param {json} user json object
         * @returns {bool} if the user registered successfully.
         */
        this.SaveData = function (d) {

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