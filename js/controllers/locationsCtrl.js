app.controller("locationsCtrl",function($scope,mainSrv){
   
    
     $scope.locations = mainSrv.getTravel();
    
    
});