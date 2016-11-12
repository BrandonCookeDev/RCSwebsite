angular.module('RCSapp.contact')
    .controller('ContactCtrl', function($scope, ContactService){

    $scope.contactService = ContactService;

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.email = null;
    $scope.comment = null;

    $scope.submitContactForm = function(){
        var emails = $scope.contactService.getEmailAddresses();

        // TODO EMAIL THE ABOVE CONTACTS
    }

});