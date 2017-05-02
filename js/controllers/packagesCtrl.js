app.controller("packagesCtrl",function($scope,mainSrv,$stateParams){
    
     var country = $stateParams.country;
    
            if (country){
     $scope.packages = mainSrv.getPackagesByCountry(country);
            } else{
                  $scope.packages = mainSrv.getPackages();
            }

    
     
    
});