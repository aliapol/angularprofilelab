"use strict";
const getUserProfile = {
    template: `
    <p> {{$ctrl.userData.name}} </p>
    <p> {{$ctrl.userData.email}} </p>
    <p> {{$ctrl.userData.bio}} </p>
    <a href="#!/signup"><button type="button">Edit</button></a> 
    `,
    controller: ["profileService", function(profileService) {
        const vm = this; 
        vm.userData = profileService.getInfo(); // this is going to call our service and say "give me the data you have in your service"
    }]
};

angular
    .module("app")
    .component("getUserProfile", getUserProfile);