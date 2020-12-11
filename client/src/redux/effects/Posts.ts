import { CreatePostActionType, CREATE_POST, FetchPostsActionType, FETCH_ALL_POSTS } from './../types/PostTypes';
import { Dispatch } from 'react';
import { Post } from './../interfaces/Post';
import * as api from '../../api/index'

// Action Creators
export const getPosts = () => async (dispatch: Dispatch<FetchPostsActionType>) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL_POSTS, payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const createPost = (newPost: Post[]) => async (dispatch: Dispatch<CreatePostActionType>) => {
    try {
        const { data } = await api.createPost(newPost)
        dispatch({ type: CREATE_POST, payload: data })
    } catch (e) {
        console.log(e.message);
    }
}