var app = angular.module("myApp", []);
app.controller('usercontroller', function ($scope, $http) {


    $scope.comments = [];
    $scope.selectedOJBComments = {};


    $scope.getComments = function () {
        if ($scope.searchemail == '' || typeof $scope.searchemail == 'undefined') {
            $http.get("https://jsonplaceholder.typicode.com/comments").then(function successCallback(response) {
                $scope.comments = response.data;
            }, function errorCallBack(error) {
                console.log("server not responding ", error);
            });

        } else {

            $http.get("https://jsonplaceholder.typicode.com/comments?email=" + $scope.searchemail).then(function successCallback(response) {
                $scope.comments = response.data;
            }, function errorCallBack(error) {
                console.log("server not responding ", error);
            });
        }
    }

    $scope.getComments();
    
    $scope.selectedComments = function (com) {

        $scope.selectedOJBComments = com;

    }



});