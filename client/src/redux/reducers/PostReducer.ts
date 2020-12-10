import { Post } from '../interfaces/Post'
import { 
    CREATE_POST,
    FETCH_ALL_POSTS,
    GetPostsStateType,
    ActionTypes 
} 
from './../types/PostTypes';

const initialStateFetchPosts: GetPostsStateType = {
    posts: []
}

export const fetchPostsReducer = (
    state = initialStateFetchPosts,
    action: ActionTypes 
): GetPostsStateType => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return {
                posts: action.payload
            }
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload] as Post[] // Для восприятия данного массива как тип Post[]
            }
        default:
            return state    
    } 
}