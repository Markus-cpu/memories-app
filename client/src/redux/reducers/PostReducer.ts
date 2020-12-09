
import { 
    CREATE_POST,
    FETCH_ALL,
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
        case FETCH_ALL:
            return {
                posts: action.payload
            }
        case CREATE_POST:
            return {
               posts: [...state, action.payload]
            }
        default:
            return state    
    } 
}