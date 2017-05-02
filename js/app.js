var app = angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state({
                    name: "home",
                    url: '/',
                    templateUrl: "../views/about.html"
                })
                .state({
                    name: "adventurers",
                    url:"/adventurers",
                    templateUrl:"../views/about-adventurers.html"

                })
            .state({
                name:"contact",
                url:"/contact",
                templateUrl:"../views/contact.html"
            })
            .state({
                name:"packages",
                url:"/packages/:country",
                templateUrl:"../views/packages.html",
                controller:"packagesCtrl"
            })
            .state({
                name:"booked",
                url:"/booked/:id",
                templateUrl:"../views/booked.html",
                controller:"bookedCtrl"
            })
            .state({
                name:"locations",
                url:"/locations",
                templateUrl:"../views/locations.html",
                controller: "locationsCtrl"
            })
    
    
    
    
    
    
    $urlRouterProvider
            .when("",'/');
    });
