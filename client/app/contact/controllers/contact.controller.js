angular.module('RCSapp.contact')
    .controller('ContactCtrl', function($scope){

    var hostname = 'localhost';

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.email = null;
    $scope.comment = null;

    $scope.submitContactForm = function(){
        var url = hostname + '/api/contact/mail';

        var postParams = {
            firstName : $scope.firstName,
            lastName : $scope.lastName,
            sender : $scope.email,
            message : $scope.comment
        }

        $http.post(url, postParams, success, failure);
    }

    function success(){
        $scope.firstName = null;
        $scope.lastName = null;
        $scope.email = null;
        $scope.comment = null;

        alert('Message succesfully sent!');
    }

    function failure(err){
        alert(err.message);
    }

});