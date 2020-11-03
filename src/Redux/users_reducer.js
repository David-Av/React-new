import { usersApi } from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let initialState = {
     users : [],
     pageSize:100,
     totalUsersCount:21,
     currentPage:1,
     isFetching:false,
     followingInProgres:[]
   
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
                return {...state,users:action.users}
            }
            case SET_CURRENT_PAGE:{
                return {...state,currentPage:action.currentPage }
            }
            case SET_USERS_TOTAL_COUNT:{
                return {...state,totalUsersCount:action.totalUsersCount }
            }
            case TOGGLE_IS_FETCHING:{
                return {...state,isFetching:action.isFetching }
            }
            case TOGGLE_IS_FOLLOWING_PROGRESS:{
                return {...state,followingInProgres:action.followingInProgres
                ?[...state.followingInProgres,action.userId]
                :state.followingInProgres.filter(id=>id!=action.userId)
                
                }
            }
        default:
      return state;
  }
};
export const toggleFollowingProgress = (followingInProgres,userId)=>({
    type:TOGGLE_IS_FOLLOWING_PROGRESS,followingInProgres,userId
})
export const setIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING,isFetching});
export const setTotalUsersCount = (totalUsersCount) =>({type:SET_USERS_TOTAL_COUNT,totalUsersCount});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage});
export const followSuccess = (userId) => ({type:FOLLOW,userId});
export const unFollowSuccess = (userId) => ({type:UNFOLLOW,userId})
export const setUsers = (users) => ({type:SET_USERS, users})

export const getUsers = (currentPage,pageSize)=>{

    return (dispatch)=>{
    dispatch(setIsFetching(true));

    usersApi.getUsers(currentPage, pageSize)
      .then((response) => {
        return (
          dispatch(setUsers(response.items)),
          dispatch(setIsFetching(false)),
          dispatch(setTotalUsersCount(response.totalCount))
        
        );
      });
    }
}
export const follow = (userId)=>{

    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId))
        usersApi.follow(userId)
          .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
          })
    }
}
export const unFollow = (userId)=>{

    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId))
        usersApi.unFollow(userId)
          .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
          })
    }
}


export default usersReducer;
