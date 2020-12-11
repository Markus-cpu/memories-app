import { Post } from './../interfaces/Post';
import { FETCH_ALL_POSTS, CREATE_POST, CreatePostActionType, FetchPostsActionType } from './../types/PostTypes'


export const fetchPostsAction = (posts: Post[]): FetchPostsActionType => {
    return {
        type: FETCH_ALL_POSTS,
        payload: posts
    }
}

export const createPostAction = (newPost: Post[]): CreatePostActionType => {
    return {
        type: CREATE_POST,
        payload: newPost
    }
}