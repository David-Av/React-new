import {
    usersApi
} from "../API/api";
// !!! import { updateObjectInArray } from "../utils/objectHelpers"; chi stacvel refactoring@

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgres: []

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
              
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    //!!! users: updateObjectInArray(state.users,action.userId,"id",{followed:false})
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u
                    })
                }
                case SET_USERS: {
                    return {
                        ...state,
                        users: action.users
                    }
                }
                case SET_CURRENT_PAGE: {
                    return {
                        ...state,
                        currentPage: action.currentPage
                    }
                }
                case SET_USERS_TOTAL_COUNT: {
                    return {
                        ...state,
                        totalUsersCount: action.totalUsersCount
                    }
                }
                case TOGGLE_IS_FETCHING: {
                    return {
                        ...state,
                        isFetching: action.isFetching
                    }
                }
                case TOGGLE_IS_FOLLOWING_PROGRESS: {
                    return {
                        ...state,
                        followingInProgres: action.followingInProgres ?
                            [...state.followingInProgres, action.userId] :
                            state.followingInProgres.filter(id => id !== action.userId)

                    }
                }
                default:
                    return state;
    }
};
export const toggleFollowingProgress = (followingInProgres, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgres,
    userId
})
export const setIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});
export const unFollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

const followUnfollowFlow = async (dispatch, userId, apimethod, ac) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apimethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(ac(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage))
    let response = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items))
    dispatch(setIsFetching(false))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const follow = (userId) => async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersApi.follow.bind(usersApi),followSuccess)
    }

export const unFollow = (userId) =>  async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersApi.unFollow.bind(usersApi),unFollowSuccess)
    }


export default usersReducer;
