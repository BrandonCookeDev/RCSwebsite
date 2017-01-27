angular.module('RCSapp.splash')
    .controller('SplashCtrl', ['$scope', function($scope){

    /* LOADING ANIMATION */
    $scope.ready = false;
    angular.element(document).ready(function () {
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.ready = true;
            })
        }, 3500)
    });

}]);