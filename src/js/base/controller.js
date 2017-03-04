/**
 * Created by Administrator on 2017/3/4 0004.
 */
angular.module('elemeApp',[]).controller('navCtrl',['$scope','$http',function ($scope,$http) {
    $scope.name = [];
    $scope.subCateagory = [];
    $scope.clickCategory = false;
    $scope.subCategories = false;
    $scope.num = 1;
    $scope.num1 = 0;
    $http.get('json/classify.json').success(function(data){
        $scope.name = data[0].topic;
        $scope.changeCategory=function(obj){
            console.log(obj)
            if(obj.id==1){
                $scope.clickCategory = true;
            }else{
                $scope.clickCategory = false;
                $scope.num = obj.id;
                $scope.subCategories = true;
                $scope.subCateagory = data[1].content[($scope.num-2)].goods;
                $scope.num1 = 0;
            }
        }
        $scope.changeSubCategory = function(obj){
            console.log(obj.id)
            $scope.num1 = obj.id;
        }
    })
}])