import { Post } from '../interfaces/Post'

export const FETCH_ALL = 'FETCH_ALL'
export const CREATE_POST = 'CREATE_POST'

export interface GetPostsStateType {
    posts: Post[]
}

function inferLiteralFromString<T extends string>(arg: T): T {
    return arg
}

interface FetchPostsActionType {
    type: inferLiteralFromString(FETCH_ALL)
    payload: Post[]
}

interface CreatePostActionType {
    type: typeof CREATE_POST
    payload: Post[]
}

export type ActionTypes = FetchPostsActionType | CreatePostActionType
