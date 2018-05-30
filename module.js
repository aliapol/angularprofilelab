"use strict";
angular
    .module("app", ["ngRoute"] )
    .config(($routeProvider) => {
        $routeProvider
        .when("/signup", {
            template: "<set-user-profile></set-user-profile>"
        })
        .when("/display", {
            template: "<get-user-profile></get-user-profile>"
        })
        .otherwise ({ redirectTo: "/display"});
    });

