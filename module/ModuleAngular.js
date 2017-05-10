 var mod = angular.module("ModuleAngular",["ngRoute"]);

mod.service("helloService",helloService);
mod.service("DataService",DataService);
mod.filter('toIconFilter',toIconFilter);
mod.filter('celKelFilter',celKelFilter);
mod.directive("linkdirective",linkdirective);
mod.directive("maDirective",maDirective);
mod.directive("meteodirectivetemp",meteodirectivetemp);
mod.directive("pluiedirective",pluiedirective);
mod.controller("FirstCtrl",FirstCtrl);
mod.controller("HomeController",HomeController);
mod.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"/app/template/home.html",
        controller:"HomeController"
    })
    .when("/page1",{
        templateUrl:"/app/template/page1.html",
        controller:"HomeController"
    })
    .otherwise({
        redirectTo:"/"
    });
});
