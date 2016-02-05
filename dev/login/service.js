/**
 * @ngdoc service
 * @name app.Service:LoginService
 * @description
 * this service contains all the login services.
 **/
app.service("LoginService", ['$http', '$q', function ($http, $q)
    {

        /**
         * @ngdoc method
         * @name AuthUser
         * @methodOf app.Service:LoginService
         * @param {json}
         *            user json object
         * @returns {bool} if the user valid
         */
        this.AuthUser = function (u) {

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