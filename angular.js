(function(){
    // route module
    var app = angular.module('routeApp', ['ngRoute']);
// Config the routes
    app.config(function ($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl: "pages/welcome.html"
            })
            // route for the about page
            .when('/our_macarons', {
                templateUrl: "pages/our_macarons.html"
            })
            // route for the contact page
            .when('/gifts_parties', {
                templateUrl: "pages/gifts_parties.html"
            })
            .when('/contact', {
                templateUrl: "pages/contact.html"
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();

