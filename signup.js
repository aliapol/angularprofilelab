"use strict";
const setUserProfile = {
    template: `
    <form ng-submit="$ctrl.setUserProfile($ctrl.user)";>
    <input type="text" placeholder="Name" ng-model="$ctrl.user.name">
    <input type="text" placeholder="email" ng-model="$ctrl.user.email">
    <input type="text" placeholder="password" ng-model="$ctrl.user.bio">
    <a href="#!/display"><button type="button">Sign Up</button>
    </form>
    `,
controller: ["profileService", function(profileService)  {
        const vm = this;
        vm.user = angular.copy(profileService.getInfo()); //in theory both display page and sign up page display this info. added angular.copy to prevent this
        vm.setUserProfile = (user) => {
            console.log(user);
            profileService.setInfo(user); //we are passing "user" into our setInfo method
        };
    }]





};




angular
    .module("app")
    .component("setUserProfile", setUserProfile);