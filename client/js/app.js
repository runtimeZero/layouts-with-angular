angular.module('myApp',[])
.controller('MainCtrl',['$scope','$layout',function($scope,$layout){
    $scope.change = function(){
      $layout.change('yellow');
    };

}])
.factory('$layout',function(){
    
    return {
        change: function(arg){
           $('body').removeClass('class_black');
           $('body').addClass('class_yellow');
        },
        
    }
    
});