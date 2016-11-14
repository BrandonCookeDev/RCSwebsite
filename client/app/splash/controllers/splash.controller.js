angular.module('RCSapp.splash')
    .controller('SplashCtrl', function($scope){

    $scope.ready = false;
    angular.element(document).ready(function () {
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.ready = true;
            })
        }, 1000)
    });

});