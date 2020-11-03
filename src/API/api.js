
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
     getUsers(currentPage ,pageSize){

        return instance
           .get(
             `users?page=${currentPage}&count=${pageSize}`,{withCredentials:true}
           ).then(response=>response.data)
     },
     follow(userId){
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
           },
     unFollow(userId){
      
     return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
         

     },
}


// export const getUsers = (currentPage ,pageSize)=>{

//    return instance
//       .get(
//         `users?page=${currentPage}&count=${pageSize}`,{withCredentials:true}
//       ).then(response=>response.data)
// }
