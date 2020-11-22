
import * as axios from "axios"
// const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY" : "560961f6-c212-4142-b02d-d99d0a8308d3"
      }
})

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  auth() {
    return instance.get(`auth/me`);
  },
  getProfile(userId) {
    console.warn("Obsolete Method. Please use Profile Api Object")
    return profileApi.getProfile(userId)
  },
};
export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  },
  login(email,password,rememberMe = false){
    
    return instance.post(`auth/login` ,{email,password,rememberMe})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
}
export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status){
    return instance.put(`profile/status`,{status: status});
  }
}

// export const getUsers = (currentPage ,pageSize)=>{

//    return instance
//       .get(
//         `users?page=${currentPage}&count=${pageSize}`,{withCredentials:true}
//       ).then(response=>response.data)
// }
