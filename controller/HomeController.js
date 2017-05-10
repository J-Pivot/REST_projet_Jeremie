function HomeController($scope,DataService){

    $scope.longitude=48.85341;
    $scope.lattitude=2.3488;
    console.log($scope.longitude,$scope.lattitude,$scope.cel);
    
    $scope.charging = false;
    $scope.getMeteo=function(){
        setTimeout(function(){
        DataService.getMeteo($scope.longitude,$scope.lattitude)
        .then(
            function(success){
                console.log(success);
                console.log($scope.longitude,$scope.lattitude);
                $scope.meteo=success;
                $scope.charging = true;
            },
            function(error){
                console.log("erreur : "+error);
                $scope.charging = true;
            }
        );
    },1500)};
    

};