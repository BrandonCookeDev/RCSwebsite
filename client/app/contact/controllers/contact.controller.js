angular.module('RCSapp.contact')
    .controller('ContactCtrl', function($scope, $http){

    var apiHostname = 'http://138.197.24.51:8000';

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.email = null;
    $scope.comment = null;

    $scope.validateForm = function(){
        if($scope.firstName == '' || $scope.firstName == null
            || $scope.lastName == '' || $scope.lastName == null
            || $scope.email == '' || $scope.email == null
            || $scope.comment == '' || $scope.comment == null)
                return false;

        if(!$scope.validateEmail($scope.email))
            return false;
        return true;
    }

    $scope.validateEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

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

});