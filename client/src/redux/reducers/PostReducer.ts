
import { 
    CREATE_POST,
    FETCH_ALL,
    GetPostsStateType,
    PostActionTypes 
} 
from './../types/PostTypes';

const initialStateFetchPosts: GetPostsStateType = {
    posts: []
}

export const fetchPostsReducer = (
    state = initialStateFetchPosts,
    action: PostActionTypes 
): GetPostsStateType => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state    
    }
}