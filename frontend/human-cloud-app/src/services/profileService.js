import RestDataSource from "./restdatasource";

export const profileService = {
    fetchProfileDetails,
    addProfileDetails,
    updateProfileDetails,
    deleteProfileDetails
};

//fetch profile details
function fetchProfileDetails(userId,fn) {

          var url = "http://localhost:8005/humanCloud-identity/api/profile/getProfileDetails?userId="+userId;
         
          return new RestDataSource(url, null, fn).GetData((res) => fn(res));
}

//add profile details
function addProfileDetails(userData, fn) {

    var url = "http://localhost:8005/humanCloud-identity/api/profile/addProfileDetails";
   
    return new RestDataSource(url, 0, fn).Store(userData, (res) => fn(res));
}

//update profile details
function updateProfileDetails(userData, fn) {

    var url = "http://localhost:8005/humanCloud-identity/api/profile/updateProfileDetails";

    return new RestDataSource(url, null, fn).Update(userData, (res) => fn(res));
}

//delete profile details
function deleteProfileDetails(userId, fn) {

    var url = "http://localhost:8005/humanCloud-identity/api/profile/deleteProfile?userId="+userId;
    return new RestDataSource(url, null, fn).Delete(userId, (res) => fn(res));
}



