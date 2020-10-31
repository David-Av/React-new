const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
let initialState = {
     users : []
    //  [
    //     {
    //       id: 1,
    //       followed: true,
    //       status: "i'm a...",
    //       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
    //       fullName: "Dmitry",
    //       location: { city: "Minsk", country: "Belarus" },
    //     },
    //     {
    //       id: 2,
    //       followed: false,
    //       status: "i'm a...",
    //       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
    //       fullName: "Oleg",
    //       location: { city: "Yerevan", country: "Armenia" },
    //     },
    //     {
    //       id: 3,
    //       followed: true,
    //       status: "i'm a...",
    //       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
    //       fullName: "Vartiter",
    //       location: { city: "Kirovakan", country: "Armenia" },
    //     },
    //   ]
};

const usersReducer = (state = initialState, action) => {
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
