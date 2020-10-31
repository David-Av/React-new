const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
let initialState = {
    users:[
        
      ]
//   users: [
//     {
//       id: 1,
//       followed: true,
//       status: "i'm a...",
//       photo: "",
//       fullName: "Dmitry",
//       location: { city: "Minsk", country: "Belarus" },
//     },
//     {
//       id: 2,
//       followed: false,
//       status: "i'm a...",
//       photo: "",
//       fullName: "Oleg",
//       location: { city: "Yerevan", country: "Armenia" },
//     },
//     {
//       id: 3,
//       followed: true,
//       status: "i'm a...",
//       photo: "",
//       fullName: "Vartiter",
//       location: { city: "Kirovakan", country: "Armenia" },
//     },
//   ],
};

const usersReducer = (state = initialState, action) => {
    debugger;
  switch (action.type) {
      case FOLLOW:
        return {
            ...state, 
            users:state.users.map(u=>{
                if(u.id === action.userId){
                    return {...u, followed:true}
                }
                return u
            })
        }
        case UNFOLLOW:
            return {
                ...state, 
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed:false}
                    }
                    return u
                })
            }
            case SET_USERS:{
                return {...state,users:[...state.users,...action.users] }
            }
        default:
      return state;
  }
};

export const followAC = (userId) => ({type:FOLLOW,userId});
export const unFollowAC = (userId) => ({type:UNFOLLOW,userId})
export const setUsersAC = (users) => ({type:SET_USERS, users})
export default usersReducer;
