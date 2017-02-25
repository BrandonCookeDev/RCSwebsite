angular.module('RCSapp.contact')
    .controller('ContactCtrl', ['$scope', '$http',
        function($scope, $http){

    var apiHostname = 'http://138.197.24.51:8000';

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.email = null;
    $scope.comment = null;

    $scope.validateForm = function(){
        if(!$scope.firstName) return false;
        if(!$scope.lastName) return false;
        if(!$scope.email) return false;
        if(!$scope.comment) return false;

        if(validator.isEmpty($scope.firstName)) return false;
        if(validator.isEmpty($scope.lastName)) return false;
        if(validator.isEmpty($scope.email)) return false;
        if(validator.isEmpty($scope.comment)) return false;
        if(!validator.isEmail($scope.email)) return false;

        return true;
    };

    $scope.submitContactForm = function(){
        if(!$scope.validateForm()){
            alert('Please make sure all fields have valid content');
            return
        }

        var url = hostname + 'api/contact/mail';

        var postParams = {
            firstName : $scope.firstName,
            lastName : $scope.lastName,
            sender : $scope.email,
            message : $scope.comment
        };


        $http.post(url, postParams, success, failure);
        $scope.ready = false;
        setTimeout(function() {
            $scope.$apply(function(){
                $scope.ready = true;
            })
        }, 8000);

        $scope.firstName = null;
        $scope.lastName = null;
        $scope.email = null;
        $scope.comment = null;
    };

    function success(){
        $scope.$apply(function(){
            $scope.ready = true;
        })

        $scope.firstName = null;
        $scope.lastName = null;
        $scope.email = null;
        $scope.comment = null;


        alert('Message succesfully sent!');
    }

    function failure(err){
        $scope.$apply(function(){
            $scope.ready = true;
        })

        alert(err.message);
    }

    /* LOADING ANIMATION */
    $scope.ready = false;
    angular.element(document).ready(function () {
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.ready = true;
            })
        }, 1000)
    });

}]);