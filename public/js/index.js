var app = angular.module("myApp", []);
app.controller('usercontroller', function ($scope, $http, $timeout) {


    $scope.comments = [];
    $scope.selectedOJBComments = {};

    $scope.query = {
        email: ""
    }

    $scope.$watch('query', function (tmpStr) {
        if (!tmpStr || tmpStr.length == 0)
            return 0;

        if (tmpStr === $scope.query.email) {
            $timeout(function () {
                $http.get("https://jsonplaceholder.typicode.com/comments?email=" + tmpStr).then(function successCallback(response) {
                    $scope.comments = response.data;
                }, function errorCallBack(error) {
                    console.log("server not responding ", error);
                });
            }, 1000);
        }

        $scope.getComments();
    }, true);


    $scope.getComments = function () {
        if ($scope.searchemail == '' || typeof $scope.searchemail == 'undefined') {
            $http.get("https://jsonplaceholder.typicode.com/comments").then(function successCallback(response) {
                $scope.comments = response.data;
            }, function errorCallBack(error) {
                console.log("server not responding ", error);
            });
        }

        // else {

        //     $http.get("https://jsonplaceholder.typicode.com/comments?email=" + $scope.searchemail).then(function successCallback(response) {
        //         $scope.comments = response.data;
        //     }, function errorCallBack(error) {
        //         console.log("server not responding ", error);
        //     });
        // }
    }

    $scope.getComments();

    $scope.selectedComments = function (com) {

        $scope.selectedOJBComments = com;

    }



});

app.directive("stRatio",function () {

    return {
        restrict : 'EA',   // Restrict EA: only matches Element name
        link: function (scope, element, attr) {
            var ratio = +(attr.stRatio);
            element.css('width', ratio + '%');

        }
    }
});