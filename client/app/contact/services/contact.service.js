angular.module('RCSapp.contact')
    .service('ContactService', function(){
        var service = {
            getEmailAddresses: function(){
                var emails = [
                    'bcooke91@gmail.com'
                ]
                return emails;
            }
        }
        return service;
});