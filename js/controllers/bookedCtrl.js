app.controller("bookedCtrl",function($scope,mainSrv,$stateParams){
    var id = $stateParams.id;
    
        $scope.booked = mainSrv.getPackagesById(id);
    
});