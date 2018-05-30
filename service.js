"use strict";
function profileService() {

    let userData = {
        name: "Grant",
        email: "grant@chirpus.com",
        bio: "Here's a big about me"
    };
    
    const getInfo = () => { //sends data to component
        return userData;
    };

    //we are bringing info into our service
    //user is the object we are passing in here
    const setInfo = (user) => { //retrieves data from component?
        userData = user //we are initializing the object (user) to be the new value of UserData
    };
    //our service gets the object and places it into userData so we can call on userData elsewhere?
    
    return {
        getInfo,
        setInfo
    };

}

angular
    .module("app")
    .factory("profileService", profileService);