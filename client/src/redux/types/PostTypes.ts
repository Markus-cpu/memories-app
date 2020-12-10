import { Post } from '../interfaces/Post'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const CREATE_POST = 'CREATE_POST'

export type GetPostsStateType = {
    posts: Post[]
}


export type FetchPostsActionType = {
    type: typeof FETCH_ALL_POSTS
    payload: Post[]
}

export type CreatePostActionType = {
    type: typeof CREATE_POST
    payload: Post[]
}



export type ActionTypes = FetchPostsActionType | CreatePostActionType
